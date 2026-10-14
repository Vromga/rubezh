import * as THREE from 'three';
import type { GameEvent, Portal } from '../core/types';
import { PORTAL } from '../core/world';
import type { V3 } from '../core/vec';
import type { World } from '../core/world';
import { Fx } from './fx';
import { buildCargo, buildEnemy, buildPortal, buildRocket, type EnemyView, type PortalView } from './meshes';

const toV = (p: V3) => new THREE.Vector3(p.x, p.y, p.z);

interface EView {
  view: EnemyView; flash: number; smoke: number; fire: number; charge: number; spawnT: number;
  /** все материалы модели с исходной прозрачностью — для невидимости */
  fade: { m: THREE.Material; opacity: number; transparent: boolean }[];
  vis: number;
  beam?: THREE.Mesh;
}

const BEAM_GEO = new THREE.CylinderGeometry(0.012, 0.012, 1, 6, 1, true).translate(0, 0.5, 0).rotateX(Math.PI / 2);

/** Связывает логику боя (World) со сценой three.js. */
export class Stage {
  readonly root = new THREE.Group();
  readonly fx = new Fx();
  private world: World;
  private enemies = new Map<number, EView>();
  private cargo = new Map<number, THREE.Group>();
  private portals = new Map<number, PortalView>();
  private boltMeshes = new Map<number, THREE.Mesh>();
  private boltGeo = new THREE.SphereGeometry(0.07, 10, 8);
  private boltMat = new THREE.MeshBasicMaterial({ color: 0xff3322 });
  private rocketMeshes = new Map<number, THREE.Group>();
  private mineMeshes = new Map<number, THREE.Mesh>();
  private acidMat = new THREE.MeshBasicMaterial({ color: 0x8aff3a });
  private tetherMeshes = new Map<number, THREE.Mesh>();
  private tetherMat = new THREE.MeshBasicMaterial({ color: 0xd8e2ec });
  private beamMat = new THREE.MeshBasicMaterial({ color: 0x38e1ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  private mineGeo = new THREE.SphereGeometry(0.06, 10, 8);
  private mineMat = new THREE.MeshBasicMaterial({ color: 0xffa020 });
  private t = 0;

  constructor(world: World) {
    this.world = world;
    this.root.add(this.fx.root);
    this.root.add(new THREE.HemisphereLight(0xffffff, 0x445066, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(2, 4, 1);
    this.root.add(sun);

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
            this.dropView(ev.enemyId);
          }
          break;
        }
        case 'enemyEscaped': {
          this.dropView(ev.enemyId);
          break;
        }
        case 'explosion': this.fx.explosion(toV(ev.pos), ev.size); break;
        case 'boltShot': this.fx.explosion(toV(ev.pos), 0.25); break;
        case 'emp': this.fx.empWave(toV(ev.pos)); break;
        case 'jam': this.fx.empWave(toV(ev.pos), 0x5dffa0, 6); break;
        case 'blink':
          this.fx.sparks(toV(ev.from), 12, [0.75, 0.45, 1]);
          this.fx.sparks(toV(ev.to), 12, [0.75, 0.45, 1]);
          break;
        case 'tetherCut': this.fx.sparks(toV(ev.pos), 14, [1, 0.9, 0.6]); break;
        case 'brood': this.fx.sparks(toV(ev.pos), 18, [1, 0.75, 0.25]); break;
        case 'cloakBroken': {
          const v = this.enemies.get(ev.enemyId);
          if (v) this.fx.sparks(v.view.group.position, 16, [0.3, 0.85, 1]);
          break;
        }
        case 'telegraph': {
          const v = this.enemies.get(ev.enemyId);
          if (v) v.charge = 0.7;
          break;
        }
        case 'portalOpen': this.fx.sparks(toV(ev.pos), 14, ev.kind === 'in' ? [0.8, 0.4, 1] : [1, 0.35, 0.15]); break;
        case 'portalClose': {
          const pv = this.portals.get(ev.id);
          if (pv) this.fx.sparks(pv.group.position, 10, ev.kind === 'in' ? [0.8, 0.4, 1] : [1, 0.35, 0.15]);
          break;
        }
        case 'cargoLost': this.fx.sparks(toV(ev.pos), 14, [0.6, 0.4, 1]); break;
        default: break;
      }
    }
  }

  sync(dt: number): void {
    this.t += dt;
    const w = this.world;

    this.syncPortals();

    const alive = new Set<number>();
    for (const e of w.enemies) {
      alive.add(e.id);
      let ev = this.enemies.get(e.id);
      if (!ev) {
        const view = buildEnemy(e.def);
        this.root.add(view.group);
        const fade: EView['fade'] = [];
        view.group.traverse((o) => {
          const m = (o as THREE.Mesh).material as THREE.Material | undefined;
          if (m) fade.push({ m, opacity: m.opacity, transparent: m.transparent });
        });
        ev = { view, flash: 0, smoke: 0, fire: 0, charge: 0, spawnT: 0, fade, vis: 1 };
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
      this.applyCloak(ev, e.cloak, dt);
      this.syncBeam(ev, e.beamTo);
      // анимация после сброса материалов: мигалки и пульс ядра не затираются
      if (ev.flash <= 0) ev.view.anim(this.t + e.id);
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
    for (const id of [...this.enemies.keys()]) {
      if (!alive.has(id)) this.dropView(id);
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
      if (!m) { m = new THREE.Mesh(this.boltGeo, b.acid ? this.acidMat : this.boltMat); this.root.add(m); this.boltMeshes.set(b.id, m); }
      m.position.set(b.pos.x, b.pos.y, b.pos.z);
      m.scale.setScalar((b.acid ? 1.3 : 1) + Math.sin(this.t * 30) * 0.2);
      this.fx.sparks(m.position, 1, b.acid ? [0.55, 1, 0.2] : [1, 0.2, 0.1]);
    }
    for (const [id, m] of this.boltMeshes) {
      if (!seen.has(id)) { this.root.remove(m); this.boltMeshes.delete(id); }
    }

    const mseen = new Set<number>();
    for (const m of w.mines) {
      mseen.add(m.id);
      let mesh = this.mineMeshes.get(m.id);
      if (!mesh) { mesh = new THREE.Mesh(this.mineGeo, this.mineMat); this.root.add(mesh); this.mineMeshes.set(m.id, mesh); }
      mesh.position.set(m.pos.x, m.pos.y, m.pos.z);
      mesh.scale.setScalar(1 + Math.sin(this.t * 20) * 0.25);
      if (Math.random() < dt * 20) this.fx.sparks(mesh.position, 1, [1, 0.6, 0.1]);
    }
    for (const [id, mesh] of this.mineMeshes) {
      if (!mseen.has(id)) { this.root.remove(mesh); this.mineMeshes.delete(id); }
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

    this.syncTethers();
    this.fx.update(dt, w.floorY);
  }

  /** Тросы гарпунов (стальные) и луч Жнеца (голубой). */
  private syncTethers(): void {
    const seen = new Set<number>();
    for (const th of this.world.tethers) {
      const ends = this.world.tetherEnds(th);
      if (!ends) continue;
      seen.add(th.id);
      const reaper = this.world.enemies.find((e) => e.id === th.enemyId)?.def.behavior === 'reaper';
      let m = this.tetherMeshes.get(th.id);
      if (!m) { m = new THREE.Mesh(BEAM_GEO, reaper ? this.beamMat : this.tetherMat); this.root.add(m); this.tetherMeshes.set(th.id, m); }
      const a = toV(ends[0]);
      const b = toV(ends[1]);
      m.position.copy(a);
      m.lookAt(b);
      const thick = reaper ? 6 + Math.sin(this.t * 20) * 1.5 : 1.4;
      m.scale.set(thick, thick, a.distanceTo(b));
    }
    for (const [id, m] of this.tetherMeshes) if (!seen.has(id)) { this.root.remove(m); this.tetherMeshes.delete(id); }
  }

  private dropView(id: number): void {
    const v = this.enemies.get(id);
    if (!v) return;
    this.root.remove(v.view.group);
    if (v.beam) this.root.remove(v.beam);
    this.enemies.delete(id);
  }

  /** Невидимость: модель тает до едва заметного мерцания контура. */
  private applyCloak(ev: EView, cloak: number, dt: number): void {
    const vis = 1 - cloak * 0.93;
    if (Math.abs(vis - ev.vis) < 0.002) return;
    ev.vis = vis;
    for (const f of ev.fade) {
      const t = vis < 0.999 || f.transparent;
      if (f.m.transparent !== t) { f.m.transparent = t; f.m.needsUpdate = true; }
      f.m.opacity = f.opacity * vis;
      f.m.depthWrite = vis > 0.95 && !f.transparent;
    }
    // «дрожание воздуха» вокруг невидимки
    if (cloak > 0.6 && Math.random() < dt * 6) this.fx.sparks(ev.view.group.position, 1, [0.5, 0.8, 1]);
  }

  /** Луч ремонтника к союзнику. */
  private syncBeam(ev: EView, to: number | null): void {
    const target = to === null ? undefined : this.enemies.get(to);
    if (!target) { if (ev.beam) ev.beam.visible = false; return; }
    if (!ev.beam) {
      ev.beam = new THREE.Mesh(BEAM_GEO, new THREE.MeshBasicMaterial({ color: 0x3dff8a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
      this.root.add(ev.beam);
    }
    const a = ev.view.group.position;
    const b = target.view.group.position;
    ev.beam.visible = true;
    ev.beam.position.copy(a);
    ev.beam.lookAt(b);
    ev.beam.scale.set(1 + Math.sin(this.t * 30) * 0.4, 1 + Math.sin(this.t * 30) * 0.4, a.distanceTo(b));
    if (Math.random() < 0.3) this.fx.sparks(b, 1, [0.3, 1, 0.5]);
  }

  /** Порталы раскрываются из точки, живут, пока нужны, и схлопываются. */
  private syncPortals(): void {
    const w = this.world;
    const c = w.player.pos;
    const live = new Set<number>();
    for (const p of w.portals) {
      live.add(p.id);
      let pv = this.portals.get(p.id);
      if (!pv) {
        pv = buildPortal(p.kind);
        pv.group.position.copy(toV(p.pos));
        // портал в полу лежит горизонтально, остальные смотрят на игрока
        if (p.floor) pv.group.rotation.x = -Math.PI / 2;
        else pv.group.lookAt(c.x, p.pos.y, c.z);
        this.root.add(pv.group);
        this.portals.set(p.id, pv);
      }
      const k = portalOpenness(p);
      // дальние порталы крупнее, чтобы оставаться заметными
      const far = Math.min(1.9, Math.max(1, Math.hypot(p.pos.x - c.x, p.pos.z - c.z) / 3.5));
      pv.group.scale.setScalar(Math.max(0.001, k * far * (1 + Math.sin(this.t * 9 + p.id) * 0.03)));
      pv.spin.rotation.z = this.t * (p.kind === 'in' ? 1.5 : -2.2);
      pv.shader.uniforms.time.value = this.t;
      pv.shader.uniforms.power.value = p.state === 'opening' ? 1 - k : p.state === 'closing' ? 0.8 : 0.15 + Math.sin(this.t * 6) * 0.1;
    }
    for (const [id, pv] of this.portals) {
      if (!live.has(id)) { this.root.remove(pv.group); this.portals.delete(id); }
    }
  }
}

/** Насколько раскрыт портал (0..1) с «пружинкой» при открытии. */
function portalOpenness(p: Portal): number {
  if (p.state === 'opening') {
    const x = Math.min(1, p.t / PORTAL.open);
    const c = 1.7;
    return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2);
  }
  if (p.state === 'closing') {
    const x = Math.min(1, p.t / PORTAL.close);
    return x < 0.25 ? 1 + x * 0.6 : (1.15 * (1 - x)) / 0.75;
  }
  return 1;
}
