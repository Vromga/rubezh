import { makeRng, type Rng } from './rng';
import type {
  Bolt, Cargo, Enemy, EnemyDef, GameEvent, PartState, WaveDef,
} from './types';
import {
  add, clone, dist, distXZ, dot, mul, norm, raySphere, rotY, sub, v3, wrapAngle, type V3,
} from './vec';

export interface Input { firing: boolean; camPos: V3; camDir: V3 }

export interface WorldOptions {
  seed: number;
  floorY: number;
  player: V3;
  cargo: V3[];
  portals: V3[];
  waves: WaveDef[];
  enemyDefs: Record<string, EnemyDef>;
  /** Направление «вперёд» (рад., как atan2(x, z)): стрелки держатся в переднем полукруге. */
  front?: number;
}

/** Параметры зенитки (позже станут уровнями прокачки). */
export const FLAK = {
  rate: 9, // выстрелов в секунду
  damage: 8,
  spread: 0.012, // рад
  heatPerShot: 4,
  cooling: 20, // единиц нагрева в секунду
  resumeAt: 45,
  aimAssist: 1.4, // множитель зоны попадания
};

const HULL = 100;
const BOLT_SPEED = 1.6;
const BOLT_DAMAGE = 8;
const SPARK_DAMAGE = 12;

interface Pending { at: number; enemy: string; portal: number; warned: boolean }

export class World {
  time = 0;
  events: GameEvent[] = [];
  player = { pos: v3(), hull: HULL, maxHull: HULL };
  floorY: number;
  cargo: Cargo[] = [];
  portals: V3[];
  enemies: Enemy[] = [];
  bolts: Bolt[] = [];
  weapon = { heat: 0, overheated: false, cd: 0 };
  stats = { kills: 0, crystals: 0, shots: 0, hits: 0, cargoLost: 0, cargoTotal: 0 };
  waveIdx = -1;
  phase: 'intermission' | 'wave' | 'done' = 'intermission';
  result: 'win' | 'lose' | null = null;

  private rng: Rng;
  private nextId = 1;
  private pending: Pending[] = [];
  private phaseT = 2;
  private waves: WaveDef[];
  private defs: Record<string, EnemyDef>;
  private front: number;

  constructor(o: WorldOptions) {
    this.rng = makeRng(o.seed);
    this.floorY = o.floorY;
    this.player.pos = clone(o.player);
    this.portals = o.portals;
    this.waves = o.waves;
    this.defs = o.enemyDefs;
    this.front = o.front ?? 0;
    o.cargo.forEach((p, i) => this.cargo.push({
      id: i + 1, kind: i % 2 === 0 ? 'colonist' : 'crystal', pos: clone(p), state: 'idle', vy: 0,
    }));
    this.stats.cargoTotal = this.cargo.length;
  }

  get waveCount(): number { return this.waves.length; }

  drain(): GameEvent[] {
    const e = this.events;
    this.events = [];
    return e;
  }

  update(dt: number, input: Input): void {
    if (this.result) return;
    dt = Math.min(dt, 0.1);
    this.time += dt;
    this.player.pos = clone(input.camPos);

    this.updateWeapon(dt, input);
    this.updateWaves(dt);
    for (const e of this.enemies) if (!e.dead) this.stepEnemy(e, dt);
    this.updateBolts(dt);
    this.updateCargo(dt);
    this.enemies = this.enemies.filter((e) => !e.dead);
    this.checkEnd();
  }

  // ───── оружие ─────

  private updateWeapon(dt: number, input: Input): void {
    const w = this.weapon;
    w.cd = Math.max(0, w.cd - dt);
    if (!(input.firing && !w.overheated)) {
      w.heat = Math.max(0, w.heat - FLAK.cooling * dt);
      if (w.overheated && w.heat <= FLAK.resumeAt) {
        w.overheated = false;
        this.events.push({ type: 'cooled' });
      }
    }
    if (input.firing && !w.overheated) {
      while (w.cd <= 0) {
        w.cd += 1 / FLAK.rate;
        this.shoot(input.camPos, norm(input.camDir));
        w.heat += FLAK.heatPerShot;
        if (w.heat >= 100) {
          w.heat = 100;
          w.overheated = true;
          this.events.push({ type: 'overheat' });
          break;
        }
      }
    }
  }

  /** Что окажется на линии огня (без разброса): для прицела и для выстрела. */
  pick(origin: V3, d: V3): { enemy: Enemy | null; bolt: Bolt | null; t: number } | null {
    let bestT = Infinity;
    let enemy: Enemy | null = null;
    let bolt: Bolt | null = null;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const t = raySphere(origin, d, e.pos, e.def.radius * (e.def.scale ?? 1) * FLAK.aimAssist);
      if (t !== null && t < bestT) { bestT = t; enemy = e; bolt = null; }
    }
    for (const b of this.bolts) {
      const t = raySphere(origin, d, b.pos, 0.2);
      if (t !== null && t < bestT) { bestT = t; bolt = b; enemy = null; }
    }
    return enemy || bolt ? { enemy, bolt, t: bestT } : null;
  }

  private shoot(origin: V3, dir0: V3): void {
    this.stats.shots++;
    const d = norm(add(dir0, v3(
      (this.rng() - 0.5) * FLAK.spread * 2, (this.rng() - 0.5) * FLAK.spread * 2, (this.rng() - 0.5) * FLAK.spread * 2,
    )));
    const hit = this.pick(origin, d);
    const bestT = hit?.t ?? Infinity;
    const hitEnemy = hit?.enemy ?? null;
    const hitBolt = hit?.bolt ?? null;
    if (hitBolt) {
      this.bolts = this.bolts.filter((b) => b !== hitBolt);
      this.events.push({ type: 'boltShot', pos: clone(hitBolt.pos) });
      this.events.push({ type: 'shot', origin: clone(origin), end: clone(hitBolt.pos), hit: true });
      this.stats.hits++;
      return;
    }
    if (hitEnemy) {
      const e: Enemy = hitEnemy;
      const approach = add(origin, mul(d, dot(sub(e.pos, origin), d)));
      const part = this.nearestPart(e, approach);
      const point = add(origin, mul(d, bestT));
      this.events.push({ type: 'shot', origin: clone(origin), end: point, hit: true });
      this.stats.hits++;
      this.damage(e, part, FLAK.damage, point);
      return;
    }
    this.events.push({ type: 'shot', origin: clone(origin), end: add(origin, mul(d, 10)), hit: false });
  }

  partWorld(e: Enemy, p: PartState): V3 {
    return add(e.pos, rotY(mul(p.def.off, e.def.scale ?? 1), e.yaw));
  }

  private nearestPart(e: Enemy, at: V3): PartState {
    let best = e.parts[0];
    let bestD = Infinity;
    for (const p of e.parts) {
      if (!p.alive) continue;
      const dd = dist(this.partWorld(e, p), at) - p.def.r * (e.def.scale ?? 1);
      if (dd < bestD) { bestD = dd; best = p; }
    }
    return best;
  }

  private damage(e: Enemy, part: PartState, dmg: number, point: V3): void {
    const kind = part.def.kind;
    const mult = kind === 'sensor' ? 2 : kind === 'armor' ? 0.5 : 1;
    e.hp -= dmg * mult;
    part.hp -= dmg;
    this.events.push({ type: 'enemyHit', enemyId: e.id, partId: part.def.id, point, weak: kind === 'sensor' });
    if (part.alive && part.hp <= 0 && kind !== 'core') {
      part.alive = false;
      this.events.push({ type: 'partDestroyed', enemyId: e.id, partId: part.def.id, point: this.partWorld(e, part) });
      this.onPartDestroyed(e, part);
    }
    if (e.hp <= 0) this.kill(e, true);
  }

  private onPartDestroyed(e: Enemy, part: PartState): void {
    if (part.def.kind === 'grabber') {
      this.dropCargo(e);
      if (e.state === 'seek' || e.state === 'carry') e.state = 'flee';
    }
    if (part.def.kind === 'weapon' && e.def.behavior === 'shooter') e.state = 'attack';
  }

  private kill(e: Enemy, byPlayer: boolean): void {
    if (e.dead) return;
    e.dead = true;
    this.dropCargo(e);
    if (byPlayer) {
      this.stats.kills++;
      this.stats.crystals += e.def.reward;
    }
    const size = e.def.cls === 'L' ? 0.5 : e.def.cls === 'M' ? 0.9 : 1.4;
    this.events.push({ type: 'enemyKilled', enemyId: e.id, pos: clone(e.pos), reward: byPlayer ? e.def.reward : 0, defId: e.def.id, byPlayer });
    this.events.push({ type: 'explosion', pos: clone(e.pos), size });
  }

  // ───── волны ─────

  private updateWaves(dt: number): void {
    if (this.phase === 'done') return;
    if (this.phase === 'intermission') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) this.startWave(this.waveIdx + 1);
      return;
    }
    for (const p of this.pending) {
      if (!p.warned && this.time >= p.at - 1.5) {
        p.warned = true;
        this.events.push({ type: 'portalWarn', portal: p.portal });
      }
    }
    const due = this.pending.filter((p) => this.time >= p.at);
    this.pending = this.pending.filter((p) => this.time < p.at);
    for (const p of due) this.spawn(p.enemy, p.portal);
    if (this.pending.length === 0 && this.enemies.length === 0) {
      this.events.push({ type: 'waveClear', index: this.waveIdx });
      if (this.waveIdx >= this.waves.length - 1) {
        this.phase = 'done';
        this.finish('win', 'waves');
      } else {
        this.phase = 'intermission';
        this.phaseT = 5;
      }
    }
  }

  private startWave(i: number): void {
    this.waveIdx = i;
    this.phase = 'wave';
    const w = this.waves[i];
    this.pending = w.spawns.map((s) => ({
      at: this.time + 2.5 + s.t,
      enemy: s.enemy,
      portal: s.portal ?? Math.floor(this.rng() * this.portals.length),
      warned: false,
    }));
    this.events.push({ type: 'waveStart', index: i, total: this.waves.length, name: w.name });
    this.events.push({ type: 'message', text: w.hint });
  }

  spawn(defId: string, portal: number): Enemy {
    const def = this.defs[defId];
    const e: Enemy = {
      id: this.nextId++, def, pos: clone(this.portals[portal]), vel: v3(), yaw: 0, hp: def.hp,
      parts: def.parts.map((p) => ({ def: p, hp: p.hp, alive: true })),
      state: 'emerge', t: 0, portal, cargoId: null, targetCargo: null,
      fireCd: 2 + this.rng(), orbitAng: this.rng() * Math.PI * 2, falling: false, dead: false,
    };
    e.yaw = Math.atan2(this.player.pos.x - e.pos.x, this.player.pos.z - e.pos.z);
    this.enemies.push(e);
    return e;
  }

  // ───── поведение врагов ─────

  private stepEnemy(e: Enemy, dt: number): void {
    e.t += dt;
    if (e.state === 'emerge') {
      if (e.t >= 0.7) {
        e.state = e.def.behavior === 'shooter' ? 'orbit' : e.def.behavior === 'kamikaze' ? 'attack' : 'seek';
      }
      return;
    }
    const engines = e.parts.filter((p) => p.def.kind === 'engine');
    const lost = engines.filter((p) => !p.alive).length;
    if (engines.length > 0 && lost === engines.length) e.falling = true;
    if (e.falling) {
      e.vel.y -= 5 * dt;
      e.pos.x += e.vel.x * 0.4 * dt;
      e.pos.z += e.vel.z * 0.4 * dt;
      e.pos.y += e.vel.y * dt;
      if (e.pos.y <= this.floorY + 0.08) this.kill(e, false); // разбился: награды нет
      return;
    }
    const speed = e.def.speed * (1 - (engines.length ? 0.45 * (lost / engines.length) : 0));
    switch (e.state) {
      case 'seek': this.stepSeek(e, speed, dt); break;
      case 'carry': this.stepCarry(e, speed * 0.85, dt); break;
      case 'flee': this.stepFlee(e, speed, dt); break;
      case 'attack': this.stepAttack(e, speed, dt); break;
      case 'orbit': this.stepOrbit(e, speed, dt); break;
      default: break;
    }
  }

  private flyTo(e: Enemy, target: V3, speed: number, dt: number, wobble = 0.4): void {
    const dir = norm(sub(target, e.pos));
    const side = v3(dir.z, 0, -dir.x);
    const w = Math.sin(e.t * 3 + e.id) * wobble * speed;
    const vel = add(mul(dir, speed), mul(side, w));
    e.vel = vel;
    e.pos = add(e.pos, mul(vel, dt));
    const sp = Math.hypot(vel.x, vel.z);
    if (sp > 0.05) {
      const want = Math.atan2(vel.x, vel.z);
      e.yaw += wrapAngle(want - e.yaw) * Math.min(1, dt * 6);
    }
  }

  private cargoOf(id: number | null): Cargo | undefined {
    return id === null ? undefined : this.cargo.find((c) => c.id === id);
  }

  private stepSeek(e: Enemy, speed: number, dt: number): void {
    let c = this.cargoOf(e.targetCargo);
    if (!c || c.state !== 'idle') {
      c = this.nearestIdleCargo(e.pos);
      e.targetCargo = c ? c.id : null;
    }
    if (!c) { e.state = 'flee'; return; }
    const target = v3(c.pos.x, c.pos.y + 0.4, c.pos.z);
    this.flyTo(e, target, speed, dt);
    if (distXZ(e.pos, target) < 0.22 && Math.abs(e.pos.y - target.y) < 0.25) {
      c.state = 'carried';
      e.cargoId = c.id;
      e.portal = this.nearestPortal(e.pos);
      e.state = 'carry';
      this.events.push({ type: 'cargoGrabbed', cargoId: c.id, pos: clone(c.pos) });
    }
  }

  private stepCarry(e: Enemy, speed: number, dt: number): void {
    const p = this.portals[e.portal];
    this.flyTo(e, p, speed, dt, 0.15);
    if (dist(e.pos, p) < 0.5) {
      const c = this.cargoOf(e.cargoId);
      if (c) {
        c.state = 'lost';
        this.stats.cargoLost++;
        this.events.push({ type: 'cargoLost', cargoId: c.id, pos: clone(p) });
      }
      e.cargoId = null;
      e.dead = true;
      this.events.push({ type: 'enemyEscaped', enemyId: e.id });
    }
  }

  private stepFlee(e: Enemy, speed: number, dt: number): void {
    const p = this.portals[this.nearestPortal(e.pos)];
    this.flyTo(e, p, speed * 1.3, dt, 0.2);
    if (dist(e.pos, p) < 0.5) {
      e.dead = true;
      this.events.push({ type: 'enemyEscaped', enemyId: e.id });
    }
  }

  private stepAttack(e: Enemy, speed: number, dt: number): void {
    this.flyTo(e, this.player.pos, speed, dt, 0.5);
    if (dist(e.pos, this.player.pos) < 0.45) {
      this.hurt(SPARK_DAMAGE, e.pos);
      e.dead = true;
      this.events.push({ type: 'enemyKilled', enemyId: e.id, pos: clone(e.pos), reward: 0, defId: e.def.id, byPlayer: false });
      this.events.push({ type: 'explosion', pos: clone(e.pos), size: 0.8 });
    }
  }

  private stepOrbit(e: Enemy, speed: number, dt: number): void {
    const p = this.player.pos;
    e.orbitAng += 0.25 * dt;
    // покачивается дугой ±30° перед игроком, а не кружит вокруг него
    const a = this.front + Math.sin(e.orbitAng) * 0.5;
    const want = v3(p.x + Math.sin(a) * 3.5, p.y + 0.4 + Math.sin(e.t) * 0.3, p.z + Math.cos(a) * 3.5);
    this.flyTo(e, want, Math.min(speed, dist(e.pos, want) * 2 + 0.05), dt, 0);
    e.yaw += wrapAngle(Math.atan2(p.x - e.pos.x, p.z - e.pos.z) - e.yaw) * Math.min(1, dt * 4);
    e.fireCd -= dt;
    if (e.fireCd <= 0.7 && e.fireCd + dt > 0.7) {
      this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
    }
    if (e.fireCd <= 0) {
      e.fireCd = 4;
      const dir = norm(sub(p, e.pos));
      this.bolts.push({ id: this.nextId++, pos: clone(e.pos), vel: mul(dir, BOLT_SPEED), life: 5, from: clone(e.pos) });
      this.events.push({ type: 'boltFired', from: clone(e.pos) });
    }
  }

  private nearestIdleCargo(from: V3): Cargo | undefined {
    let best: Cargo | undefined;
    let bd = Infinity;
    for (const c of this.cargo) {
      if (c.state !== 'idle') continue;
      const d = dist(from, c.pos);
      if (d < bd) { bd = d; best = c; }
    }
    return best;
  }

  private nearestPortal(from: V3): number {
    let bi = 0;
    let bd = Infinity;
    this.portals.forEach((p, i) => {
      const d = dist(from, p);
      if (d < bd) { bd = d; bi = i; }
    });
    return bi;
  }

  private dropCargo(e: Enemy): void {
    const c = this.cargoOf(e.cargoId);
    e.cargoId = null;
    if (c && c.state === 'carried') {
      c.state = 'falling';
      c.vy = 0;
      this.events.push({ type: 'cargoDropped', cargoId: c.id, pos: clone(c.pos) });
    }
  }

  // ───── снаряды, груз, игрок ─────

  private updateBolts(dt: number): void {
    for (const b of this.bolts) {
      b.pos = add(b.pos, mul(b.vel, dt));
      b.life -= dt;
      if (dist(b.pos, this.player.pos) < 0.35) {
        b.life = 0;
        this.hurt(BOLT_DAMAGE, b.from);
      }
    }
    this.bolts = this.bolts.filter((b) => b.life > 0);
  }

  private updateCargo(dt: number): void {
    for (const c of this.cargo) {
      if (c.state === 'carried') {
        const e = this.enemies.find((x) => x.cargoId === c.id && !x.dead);
        if (e) c.pos = v3(e.pos.x, e.pos.y - 0.4, e.pos.z);
      } else if (c.state === 'falling') {
        c.vy -= 6 * dt;
        c.pos.y += c.vy * dt;
        if (c.pos.y <= this.floorY) {
          c.pos.y = this.floorY;
          c.state = 'idle';
        }
      }
    }
  }

  hurt(dmg: number, from: V3): void {
    if (this.result) return;
    this.player.hull = Math.max(0, this.player.hull - dmg);
    this.events.push({ type: 'playerHit', from: clone(from), dmg, hull: this.player.hull });
    if (this.player.hull <= 0) this.finish('lose', 'hull');
  }

  private checkEnd(): void {
    if (this.result) return;
    const alive = this.cargo.some((c) => c.state !== 'lost');
    if (!alive) this.finish('lose', 'cargo');
  }

  private finish(result: 'win' | 'lose', reason: 'hull' | 'cargo' | 'waves'): void {
    if (this.result) return;
    this.result = result;
    this.events.push({ type: 'end', result, reason });
  }
}
