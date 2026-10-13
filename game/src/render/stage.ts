import * as THREE from 'three';
import type { GameEvent } from '../core/types';
import type { V3 } from '../core/vec';
import type { World } from '../core/world';
import { Fx } from './fx';
import { buildCargo, buildEnemy, buildPortal, buildRocket, type EnemyView, type PortalView } from './meshes';

const toV = (p: V3) => new THREE.Vector3(p.x, p.y, p.z);

interface EView { view: EnemyView; flash: number; smoke: number; fire: number; charge: number; spawnT: number }

/** Связывает логику боя (World) со сценой three.js. */
export class Stage {
  readonly root = new THREE.Group();
  readonly fx = new Fx();
  private world: World;
  private enemies = new Map<number, EView>();
  private cargo = new Map<number, THREE.Group>();
  private portals: PortalView[] = [];
  private portalPower: number[] = [];
  private boltMeshes = new Map<number, THREE.Mesh>();
  private boltGeo = new THREE.SphereGeometry(0.07, 10, 8);
  private boltMat = new THREE.MeshBasicMaterial({ color: 0xff3322 });
  private rocketMeshes = new Map<number, THREE.Group>();
  private t = 0;
  private portalScale = 1;

  constructor(world: World) {
    this.world = world;
    this.root.add(this.fx.root);
    this.root.add(new THREE.HemisphereLight(0xffffff, 0x445066, 1.8));
    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(2, 4, 1);
    this.root.add(sun);

    const c = world.player.pos;
    // дальние порталы крупнее, чтобы оставаться заметными
    const p0 = world.portals[0];
    this.portalScale = Math.min(1.9, Math.max(1, Math.hypot(p0.x - c.x, p0.z - c.z) / 3.5));
    world.portals.forEach((p) => {
      const pv = buildPortal();
      pv.group.position.copy(toV(p));
      pv.group.lookAt(c.x, p.y, c.z);
      this.root.add(pv.group);
      this.portals.push(pv);
      this.portalPower.push(0);
    });
    for (const cg of world.cargo) {
      const g = buildCargo(cg.kind);
      g.position.copy(toV(cg.pos));
      this.root.add(g);
      this.cargo.set(cg.id, g);
    }
  }

  handle(events: GameEvent[]): void {
    for (const ev of events) {
      switch (ev.type) {
        case 'shot':
          if (ev.hit) this.fx.sparks(toV(ev.end), 5);
          break;
        case 'enemyHit': {
          const v = this.enemies.get(ev.enemyId);
          if (v) v.flash = 0.08;
          this.fx.sparks(toV(ev.point), ev.weak ? 10 : 4, ev.weak ? [1, 0.3, 0.2] : [1, 0.8, 0.4]);
          break;
        }
        case 'partDestroyed': {
          const v = this.enemies.get(ev.enemyId);
          const obj = v?.view.parts[ev.partId];
          if (v && obj) {
            const out = toV(ev.point).sub(v.view.group.position).normalize();
            this.fx.detach(obj, out);
            this.fx.explosion(toV(ev.point), 0.3);
          }
          break;
        }
        case 'enemyKilled': {
          const v = this.enemies.get(ev.enemyId);
          if (v) {
            for (const [id, obj] of Object.entries(v.view.parts)) {
              if (obj.visible && id !== 'body') this.fx.detach(obj, obj.position.clone().normalize());
            }
            this.root.remove(v.view.group);
            this.enemies.delete(ev.enemyId);
          }
          break;
        }
        case 'enemyEscaped': {
          const v = this.enemies.get(ev.enemyId);
          if (v) { this.root.remove(v.view.group); this.enemies.delete(ev.enemyId); }
          break;
        }
        case 'explosion': this.fx.explosion(toV(ev.pos), ev.size); break;
        case 'boltShot': this.fx.explosion(toV(ev.pos), 0.25); break;
        case 'emp': this.fx.empWave(toV(ev.pos)); break;
        case 'telegraph': {
          const v = this.enemies.get(ev.enemyId);
          if (v) v.charge = 0.7;
          break;
        }
        case 'portalWarn': this.portalPower[ev.portal] = 2.5; break;
        case 'cargoLost': this.fx.sparks(toV(ev.pos), 14, [0.6, 0.4, 1]); break;
        default: break;
      }
    }
  }

  sync(dt: number): void {
    this.t += dt;
    const w = this.world;

    this.portals.forEach((p, i) => {
      this.portalPower[i] = Math.max(0, this.portalPower[i] - dt);
      p.shader.uniforms.time.value = this.t;
      p.shader.uniforms.power.value = this.portalPower[i] > 0 ? 0.5 + Math.sin(this.t * 14) * 0.3 : 0;
      p.group.scale.setScalar(this.portalScale * (this.portalPower[i] > 0 ? 1 + Math.sin(this.t * 10) * 0.05 : 1));
    });

    const alive = new Set<number>();
    for (const e of w.enemies) {
      alive.add(e.id);
      let ev = this.enemies.get(e.id);
      if (!ev) {
        const view = buildEnemy(e.def);
        this.root.add(view.group);
        ev = { view, flash: 0, smoke: 0, fire: 0, charge: 0, spawnT: 0 };
        this.enemies.set(e.id, ev);
        this.fx.sparks(toV(e.pos), 8, [0.8, 0.4, 1]);
      }
      const g = ev.view.group;
      g.position.set(e.pos.x, e.pos.y, e.pos.z);
      g.rotation.y = e.yaw;
      if (e.falling) { g.rotation.z += dt * 6; g.rotation.x += dt * 3; }
      if (e.stun > 0) {
        g.position.x += Math.sin(this.t * 40 + e.id) * 0.01;
        if (Math.random() < dt * 12) this.fx.sparks(g.position, 2, [0.4, 0.85, 1]);
      }
      ev.spawnT += dt;
      const s = Math.min(1, ev.spawnT / 0.7);
      g.scale.setScalar((0.2 + 0.8 * (1 - Math.pow(1 - s, 3))) * (e.def.scale ?? 1));
      ev.view.anim(this.t + e.id);

      const frac = e.hp / e.def.hp;
      ev.flash = Math.max(0, ev.flash - dt);
      for (const m of ev.view.mats) {
        m.mat.color.copy(m.color).multiplyScalar(0.45 + 0.55 * frac);
        m.mat.emissive.copy(m.emissive);
        m.mat.emissiveIntensity = m.ei;
        if (ev.flash > 0) { m.mat.emissive.setRGB(1, 1, 1); m.mat.emissiveIntensity = 1.2; }
        else if (e.stun > 0) { m.mat.emissive.setRGB(0.3, 0.8, 1); m.mat.emissiveIntensity = 0.6 + Math.sin(this.t * 25) * 0.4; }
        else if (frac < 0.34) { m.mat.emissive.lerp(new THREE.Color(0xff2200), 0.6); m.mat.emissiveIntensity = Math.max(m.ei, 0.5 + Math.sin(this.t * 12) * 0.3); }
      }
      if (ev.view.charge) {
        ev.charge = Math.max(0, ev.charge - dt);
        ev.view.charge(ev.charge / 0.7);
      }
      // дым при <66%, огонь и искры при <33%
      if (frac < 0.66) {
        ev.smoke += dt * (frac < 0.34 ? 14 : 7);
        while (ev.smoke > 1) { ev.smoke -= 1; this.fx.smokePuff(g.position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.15, 0.1, (Math.random() - 0.5) * 0.15))); }
      }
      if (frac < 0.34) {
        ev.fire += dt * 18;
        while (ev.fire > 1) { ev.fire -= 1; this.fx.fire(g.position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.2, 0.05, (Math.random() - 0.5) * 0.2))); }
        if (Math.random() < dt * 4) this.fx.sparks(g.position, 3);
      }
    }
    for (const [id, ev] of this.enemies) {
      if (!alive.has(id)) { this.root.remove(ev.view.group); this.enemies.delete(id); }
    }

    for (const c of w.cargo) {
      const g = this.cargo.get(c.id)!;
      g.visible = c.state !== 'lost';
      g.position.set(c.pos.x, c.pos.y, c.pos.z);
      const hold = g.userData.hold as THREE.Object3D;
      hold.position.y = Math.sin(this.t * 2 + c.id) * 0.012;
      hold.rotation.y = this.t * 0.8 + c.id;
      g.scale.setScalar(c.state === 'carried' ? 0.9 : 1);
    }

    const seen = new Set<number>();
    for (const b of w.bolts) {
      seen.add(b.id);
      let m = this.boltMeshes.get(b.id);
      if (!m) { m = new THREE.Mesh(this.boltGeo, this.boltMat); this.root.add(m); this.boltMeshes.set(b.id, m); }
      m.position.set(b.pos.x, b.pos.y, b.pos.z);
      m.scale.setScalar(1 + Math.sin(this.t * 30) * 0.2);
      this.fx.sparks(m.position, 1, [1, 0.2, 0.1]);
    }
    for (const [id, m] of this.boltMeshes) {
      if (!seen.has(id)) { this.root.remove(m); this.boltMeshes.delete(id); }
    }

    const rseen = new Set<number>();
    for (const r of w.rockets) {
      rseen.add(r.id);
      let g = this.rocketMeshes.get(r.id);
      if (!g) { g = buildRocket(); this.root.add(g); this.rocketMeshes.set(r.id, g); }
      g.position.set(r.pos.x, r.pos.y, r.pos.z);
      g.lookAt(r.pos.x + r.vel.x, r.pos.y + r.vel.y, r.pos.z + r.vel.z);
      const tail = g.position.clone().addScaledVector(new THREE.Vector3(r.vel.x, r.vel.y, r.vel.z).normalize(), -0.2);
      this.fx.fire(tail);
      this.fx.smokePuff(tail, 0.07);
    }
    for (const [id, g] of this.rocketMeshes) {
      if (!rseen.has(id)) { this.root.remove(g); this.rocketMeshes.delete(id); }
    }

    this.fx.update(dt, w.floorY);
  }

  portalPos(i: number): THREE.Vector3 {
    return this.portals[i].group.position;
  }
}
