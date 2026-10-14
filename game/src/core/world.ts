import { stepCore, stepNode } from './finale';
import { stepAcid, stepHarpoon, stepHive, stepReaper, stepStomper, updateTethers } from './heavy';
import { pickPortalPos, type PortalZone } from './portals';
import { makeRng, type Rng } from './rng';
import type {
  Bolt, Cargo, Enemy, EnemyDef, GameEvent, Mine, PartState, Portal, Rocket, Tether, WaveDef,
} from './types';
import {
  add, clone, dist, distXZ, dot, mul, norm, raySegment, raySphere, rotY, sub, v3, wrapAngle, type V3,
} from './vec';

export interface Input {
  firing: boolean;
  camPos: V3;
  camDir: V3;
  /** кнопка ракет удерживается: захват цели, отпускание — пуск */
  rocket?: boolean;
  /** нажатие ЭМИ (срабатывает по фронту) */
  emp?: boolean;
}

export interface WeaponsOpt { rockets?: { ammo: number }; emp?: { cooldown: number } }

export interface WorldOptions {
  seed: number;
  floorY: number;
  player: V3;
  cargo: V3[];
  /** где открываются порталы */
  zone: PortalZone;
  waves: WaveDef[];
  enemyDefs: Record<string, EnemyDef>;
  /** Параметры зенитки из прокачки (иначе — базовые FLAK). */
  flak?: Partial<typeof FLAK>;
  maxHull?: number;
  /** доп. оружие в слотах */
  weapons?: WeaponsOpt;
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
export const BOLT_SPEED = 1.6;
const BOLT_DAMAGE = 8;
export const ACID = { damage: 5, speed: 1.4 };
const SPARK_DAMAGE = 12;

export const ROCKET = { lockTime: 0.6, speed0: 3, speed1: 8, turn: 5, damage: 45, splash: 1.3, splashDamage: 22, life: 5 };
export const BOMB = { height: 1.6, period: 3.5, gravity: 3, blast: 0.6 };
export const EMP = { stun: 3, cone: 0.75, range: 16, reveal: 4 };
/** Глушитель: импульс отключает ракеты и ЭМИ. */
export const JAM = { period: 7, time: 3.5 };
export const REPAIR = { rate: 10, reach: 1.6 };
export const BLINK = { period: 3.5, dist: 2.2, warn: 0.6 };
/** Босс «Сборщик»: скрыт → выдаёт себя залпом → призывает подмогу. */
export const COLLECTOR = { hide: 4.5, attack: 3.5, volleys: [1.0, 2.0] };

/** Тайминги порталов, с. */
export const PORTAL = { lead: 1.8, open: 0.6, close: 0.5, linger: 1.2, enter: 0.5 };

interface Pending { at: number; enemy: string; lane?: number; portalId: number | null }

export class World {
  time = 0;
  events: GameEvent[] = [];
  player = { pos: v3(), hull: HULL, maxHull: HULL };
  floorY: number;
  cargo: Cargo[] = [];
  portals: Portal[] = [];
  enemies: Enemy[] = [];
  bolts: Bolt[] = [];
  rockets: Rocket[] = [];
  mines: Mine[] = [];
  tethers: Tether[] = [];
  /** состояние доп. оружия; null — не взято в бой */
  rocketState: { ammo: number; lockT: number; lockId: number | null; locked: boolean } | null = null;
  empState: { cd: number; cooldown: number } | null = null;
  /** помехи глушителя: доп. оружие отключено, с */
  jam = 0;
  private rocketHeld = false;
  private empHeld = false;
  weapon = { heat: 0, overheated: false, cd: 0 };
  stats = { kills: 0, crystals: 0, shots: 0, hits: 0, cargoLost: 0, cargoTotal: 0 };
  /** сбито по видам врагов и какие виды встречены */
  killsBy: Record<string, number> = {};
  seen = new Set<string>();
  readonly flak: typeof FLAK;
  waveIdx = -1;
  phase: 'intermission' | 'wave' | 'done' = 'intermission';
  result: 'win' | 'lose' | null = null;

  /** @internal */ rng: Rng;
  /** @internal */ nextId = 1;
  /** @internal */ pending: Pending[] = [];
  private phaseT = 2;
  private waves: WaveDef[];
  private defs: Record<string, EnemyDef>;
  /** @internal */ front: number;
  private zone: PortalZone;

  constructor(o: WorldOptions) {
    this.rng = makeRng(o.seed);
    this.floorY = o.floorY;
    this.player.pos = clone(o.player);
    this.zone = o.zone;
    this.waves = o.waves;
    this.defs = o.enemyDefs;
    this.front = o.front ?? 0;
    this.flak = { ...FLAK, ...(o.flak ?? {}) };
    if (o.weapons?.rockets) this.rocketState = { ammo: o.weapons.rockets.ammo, lockT: 0, lockId: null, locked: false };
    if (o.weapons?.emp) this.empState = { cd: 0, cooldown: o.weapons.emp.cooldown };
    const hull = o.maxHull ?? HULL;
    this.player.hull = hull;
    this.player.maxHull = hull;
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
    this.jam = Math.max(0, this.jam - dt);

    this.updateWeapon(dt, input);
    this.updateRockets(dt, input);
    this.updateEmp(dt, input);
    this.updateWaves(dt);
    for (const e of this.enemies) if (!e.dead) this.stepEnemy(e, dt);
    this.updatePortals(dt);
    updateTethers(this, dt);
    this.updateBolts(dt);
    this.updateMines(dt);
    this.updateCargo(dt);
    this.enemies = this.enemies.filter((e) => !e.dead);
    this.checkEnd();
  }

  // ───── оружие ─────

  private updateWeapon(dt: number, input: Input): void {
    const w = this.weapon;
    w.cd = Math.max(0, w.cd - dt);
    if (!(input.firing && !w.overheated)) {
      w.heat = Math.max(0, w.heat - this.flak.cooling * dt);
      if (w.overheated && w.heat <= this.flak.resumeAt) {
        w.overheated = false;
        this.events.push({ type: 'cooled' });
      }
    }
    if (input.firing && !w.overheated) {
      while (w.cd <= 0) {
        w.cd += 1 / this.flak.rate;
        this.shoot(input.camPos, norm(input.camDir));
        w.heat += this.flak.heatPerShot;
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
  pick(origin: V3, d: V3): { enemy: Enemy | null; bolt: Bolt | null; mine?: Mine | null; tether?: Tether | null; t: number } | null {
    let bestT = Infinity;
    let enemy: Enemy | null = null;
    let bolt: Bolt | null = null;
    let mine: Mine | null = null;
    let tether: Tether | null = null;
    for (const e of this.enemies) {
      if (!this.targetable(e)) continue;
      const t = raySphere(origin, d, e.pos, e.def.radius * (e.def.scale ?? 1) * this.flak.aimAssist);
      if (t !== null && t < bestT) { bestT = t; enemy = e; bolt = null; }
    }
    for (const b of this.bolts) {
      const t = raySphere(origin, d, b.pos, 0.2);
      if (t !== null && t < bestT) { bestT = t; bolt = b; enemy = null; }
    }
    for (const m of this.mines) {
      const t = raySphere(origin, d, m.pos, 0.2);
      if (t !== null && t < bestT) { bestT = t; mine = m; bolt = null; enemy = null; }
    }
    for (const th of this.tethers) {
      const ends = this.tetherEnds(th);
      if (!ends) continue;
      const t = raySegment(origin, d, ends[0], ends[1], 0.12);
      if (t !== null && t < bestT) { bestT = t; tether = th; mine = null; bolt = null; enemy = null; }
    }
    return enemy || bolt || mine || tether ? { enemy, bolt, mine, tether, t: bestT } : null;
  }

  private shoot(origin: V3, dir0: V3): void {
    this.stats.shots++;
    const d = norm(add(dir0, v3(
      (this.rng() - 0.5) * this.flak.spread * 2, (this.rng() - 0.5) * this.flak.spread * 2, (this.rng() - 0.5) * this.flak.spread * 2,
    )));
    const hit = this.pick(origin, d);
    const bestT = hit?.t ?? Infinity;
    const hitEnemy = hit?.enemy ?? null;
    const hitBolt = hit?.bolt ?? null;
    const hitMine = hit?.mine ?? null;
    const hitTether = hit?.tether ?? null;
    if (hitTether) {
      const point = add(origin, mul(d, bestT));
      this.events.push({ type: 'shot', origin: clone(origin), end: point, hit: true });
      this.stats.hits++;
      hitTether.hp -= this.flak.damage;
      if (hitTether.hp <= 0) this.cutTether(hitTether, point);
      return;
    }
    if (hitMine) {
      this.mines = this.mines.filter((m) => m !== hitMine);
      this.events.push({ type: 'boltShot', pos: clone(hitMine.pos) });
      this.events.push({ type: 'shot', origin: clone(origin), end: clone(hitMine.pos), hit: true });
      this.stats.hits++;
      return;
    }
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
      this.damage(e, part, this.flak.damage, point);
      return;
    }
    this.events.push({ type: 'shot', origin: clone(origin), end: add(origin, mul(d, 10)), hit: false });
  }

  /** Концы троса: орудие врага и груз. */
  tetherEnds(th: Tether): [V3, V3] | null {
    const e = this.enemies.find((x) => x.id === th.enemyId && !x.dead);
    const c = this.cargoOf(th.cargoId);
    if (!e || !c) return null;
    const gun = e.parts.find((p) => p.def.kind === 'grabber' && p.alive) ?? e.parts[0];
    return [this.partWorld(e, gun), add(c.pos, v3(0, 0.12, 0))];
  }

  /** Трос перебит: груз падает целым. */
  cutTether(th: Tether, at: V3): void {
    this.tethers = this.tethers.filter((x) => x !== th);
    const e = this.enemies.find((x) => x.id === th.enemyId);
    if (e && e.cargoId === th.cargoId) {
      this.dropCargo(e);
      if (e.state === 'reel') e.state = e.def.behavior === 'reaper' ? 'reaper' : 'harpoon';
      e.fireCd = Math.max(e.fireCd, 3);
    }
    this.events.push({ type: 'tetherCut', pos: clone(at) });
  }

  /** В невидимого врага нельзя прицелиться (но взрыв ракеты задевает). */
  targetable(e: Enemy): boolean {
    return !e.dead && e.cloak < 0.6;
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

  /** @internal */ damage(e: Enemy, part: PartState, dmg: number, point: V3, pierce = false): void {
    if (e.shielded) {
      this.events.push({ type: 'enemyHit', enemyId: e.id, partId: 'shield', point, weak: false });
      return;
    }
    // фронтальный щит принимает на себя всё, кроме ракет
    const shield = e.parts.find((p) => p.def.kind === 'shield' && p.alive);
    if (shield && !pierce) part = shield;
    if (part.def.kind === 'shield') {
      part.hp -= dmg;
      this.events.push({ type: 'enemyHit', enemyId: e.id, partId: part.def.id, point, weak: false });
      if (part.alive && part.hp <= 0) {
        part.alive = false;
        this.events.push({ type: 'partDestroyed', enemyId: e.id, partId: part.def.id, point: this.partWorld(e, part) });
      }
      return;
    }
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
      for (const th of this.tethers.filter((x) => x.enemyId === e.id)) this.cutTether(th, this.partWorld(e, part));
      this.dropCargo(e);
      if (e.state === 'seek' || e.state === 'carry') e.state = 'flee';
    }
    if (part.def.kind === 'weapon' && e.def.behavior === 'shooter') e.state = 'attack';
    if (part.def.kind === 'weapon' && (e.def.behavior === 'bomber' || e.def.behavior === 'jammer' || e.def.behavior === 'repair')) {
      e.state = 'flee';
      e.beamTo = null;
    }
    if (part.def.id === 'veil') {
      e.noCloak = true;
      this.events.push({ type: 'cloakBroken', enemyId: e.id });
    }
  }

  /** @internal */ kill(e: Enemy, byPlayer: boolean): void {
    if (e.dead) return;
    e.dead = true;
    for (const th of this.tethers.filter((x) => x.enemyId === e.id)) this.cutTether(th, e.pos);
    this.dropCargo(e);
    if (e.def.blast) this.blast(e);
    for (const n of this.enemies) if (n.owner === e.id && !n.dead) this.kill(n, byPlayer);
    if (byPlayer) {
      this.stats.kills++;
      this.killsBy[e.def.id] = (this.killsBy[e.def.id] ?? 0) + 1;
      this.stats.crystals += e.def.reward;
    }
    const size = e.def.cls === 'L' ? 0.5 : e.def.cls === 'M' ? 0.9 : 1.4;
    this.events.push({ type: 'enemyKilled', enemyId: e.id, pos: clone(e.pos), reward: byPlayer ? e.def.reward : 0, defId: e.def.id, byPlayer });
    this.events.push({ type: 'explosion', pos: clone(e.pos), size });
  }

  /** Взрыв сапёра: задевает соседей и, если близко, стекло. */
  private blast(e: Enemy): void {
    const b = e.def.blast!;
    for (const o of this.enemies) {
      if (o === e || o.dead || dist(o.pos, e.pos) > b.r) continue;
      this.damage(o, this.nearestPart(o, e.pos), b.dmg, e.pos, true);
    }
    if (dist(this.player.pos, e.pos) < b.r) this.hurt(Math.round(b.dmg / 3), e.pos);
    this.events.push({ type: 'explosion', pos: clone(e.pos), size: b.r * 1.1 });
    if (b.dmg >= 30) this.events.push({ type: 'shake', power: 0.7 });
  }

  // ───── волны ─────

  private updateWaves(dt: number): void {
    if (this.phase === 'done') return;
    if (this.phase === 'intermission') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) this.startWave(this.waveIdx + 1);
      return;
    }
    // портал открывается заранее, враг вылезает из него в назначенное время
    for (const p of this.pending) {
      if (p.portalId === null && this.time >= p.at - PORTAL.lead) {
        p.portalId = this.openPortal('in', null, p.lane, !!this.defs[p.enemy].walk).id;
      }
    }
    const due = this.pending.filter((p) => this.time >= p.at);
    this.pending = this.pending.filter((p) => this.time < p.at);
    for (const p of due) this.spawn(p.enemy, p.portalId ?? -1);
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
      lane: s.portal,
      portalId: null,
    }));
    this.events.push({ type: 'waveStart', index: i, total: this.waves.length, name: w.name });
    this.events.push({ type: 'message', text: w.hint });
  }

  /** Враг вылезает из портала portalId (если его нет — портал открывается сразу). */
  spawn(defId: string, portalId = -1, at?: V3): Enemy {
    const def = this.defs[defId];
    this.seen.add(defId);
    let start: V3;
    let portalRef = -1;
    if (at) start = clone(at); // выводок матки — без портала
    else {
      let portal = this.portals.find((q) => q.id === portalId && q.kind === 'in');
      if (!portal) {
        portal = this.openPortal('in', null, undefined, !!def.walk);
        portal.state = 'open';
      }
      portal.closeAt = this.time + PORTAL.linger;
      portalRef = portal.id;
      start = def.walk ? v3(portal.pos.x, this.floorY - 0.4, portal.pos.z) : clone(portal.pos);
    }
    const e: Enemy = {
      id: this.nextId++, def, pos: start, vel: v3(), yaw: 0, hp: def.hp,
      parts: def.parts.map((p) => ({ def: p, hp: p.hp, alive: true })),
      state: 'emerge', t: 0, portal: portalRef, cargoId: null, targetCargo: null,
      fireCd: 2 + this.rng(), orbitAng: this.rng() * Math.PI * 2, falling: false, dead: false, stun: 0,
      exitId: null, cloak: 0, reveal: 0, noCloak: false, blinkCd: BLINK.period * (0.6 + 0.4 * this.rng()),
      beamTo: null, phaseT: 0, cycle: 0, shielded: false, owner: null,
    };
    e.yaw = Math.atan2(this.player.pos.x - e.pos.x, this.player.pos.z - e.pos.z);
    this.enemies.push(e);
    return e;
  }

  // ───── поведение врагов ─────

  private stepEnemy(e: Enemy, dt: number): void {
    e.t += dt;
    this.updateCloak(e, dt);
    if (e.stun > 0 && !e.falling) { e.stun -= dt; return; }
    if (e.state === 'emerge') {
      // вылезает из портала в сторону игрока
      const out = norm(sub(this.player.pos, e.pos));
      e.pos = add(e.pos, mul(v3(out.x, 0, out.z), 0.9 * dt));
      // шагающий вылезает из портала в полу
      if (e.def.walk) e.pos.y = Math.min(this.floorY + e.def.walk, e.pos.y + (e.def.walk + 0.4) * dt / 0.7);
      if (e.t >= 0.7) {
        const first: Record<string, Enemy['state']> = {
          shooter: 'orbit', kamikaze: 'attack', bomber: 'bomb', jammer: 'jam', repair: 'repair', boss: 'boss',
          harpoon: 'harpoon', hive: 'hive', acid: 'acid', stomper: 'stomp', reaper: 'reaper', core: 'core', node: 'node',
        };
        e.state = first[e.def.behavior] ?? 'seek';
      }
      return;
    }
    const engines = e.parts.filter((p) => p.def.kind === 'engine');
    const lost = engines.filter((p) => !p.alive).length;
    if (engines.length > 0 && lost === engines.length) e.falling = true;
    if (e.falling && e.def.walk) {
      // шагающий без ног оседает и разваливается
      e.pos.y -= dt * 0.6;
      if (e.pos.y <= this.floorY + 0.08) this.kill(e, true);
      return;
    }
    if (e.falling) {
      e.vel.y -= 5 * dt;
      e.pos.x += e.vel.x * 0.4 * dt;
      e.pos.z += e.vel.z * 0.4 * dt;
      e.pos.y += e.vel.y * dt;
      // разбился: награды нет (кроме босса)
      if (e.pos.y <= this.floorY + 0.08) this.kill(e, e.def.cls === 'B' || !!e.def.walk);
      return;
    }
    let speed = e.def.speed * (1 - (engines.length ? 0.45 * (lost / engines.length) : 0));
    // мотылёк «подсвечивает» груз: остальные воры летят быстрее
    if (e.def.behavior === 'thief' && !e.def.buff) {
      const scout = this.enemies.find((o) => o.def.buff && !o.dead && o.state !== 'emerge');
      if (scout) speed *= 1 + scout.def.buff!;
    }
    switch (e.state) {
      case 'seek': this.stepSeek(e, speed, dt); break;
      case 'carry': this.stepCarry(e, speed * 0.85, dt); break;
      case 'flee': this.stepFlee(e, speed, dt); break;
      case 'attack': this.stepAttack(e, speed, dt); break;
      case 'orbit': this.stepOrbit(e, speed, dt); break;
      case 'bomb': this.stepBomb(e, speed, dt); break;
      case 'jam': this.stepJam(e, speed, dt); break;
      case 'repair': this.stepRepair(e, speed, dt); break;
      case 'boss': this.stepBoss(e, speed, dt); break;
      case 'harpoon': case 'reel': stepHarpoon(this, e, speed, dt); break;
      case 'hive': stepHive(this, e, speed, dt); break;
      case 'acid': stepAcid(this, e, speed, dt); break;
      case 'stomp': stepStomper(this, e, speed, dt); break;
      case 'reaper': stepReaper(this, e, speed, dt); break;
      case 'core': stepCore(this, e, speed, dt); break;
      case 'node': stepNode(this, e, dt); break;
      default: break;
    }
  }

  /** @internal */ flyTo(e: Enemy, target: V3, speed: number, dt: number, wobble = 0.4): void {
    if (e.def.walk) {
      target = v3(target.x, this.floorY + e.def.walk, target.z);
      wobble = 0;
    }
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

  /** @internal */ cargoOf(id: number | null): Cargo | undefined {
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
    this.tryBlink(e, target, dt);
    this.flyTo(e, target, speed, dt, e.def.zigzag ?? 0.4);
    if (distXZ(e.pos, target) < (e.def.walk ? 0.35 : 0.22) && (e.def.walk || Math.abs(e.pos.y - target.y) < 0.25)) {
      c.state = 'carried';
      e.cargoId = c.id;
      e.state = 'carry';
      e.phaseT = 0;
      this.events.push({ type: 'cargoGrabbed', cargoId: c.id, pos: clone(c.pos) });
    }
  }

  /** Клещ сидит на грузе и через latch секунд исчезает вместе с ним. */
  private stepLatch(e: Enemy, dt: number): void {
    const c = this.cargoOf(e.cargoId);
    if (!c) { e.state = 'flee'; return; }
    e.pos = v3(c.pos.x, c.pos.y + 0.14, c.pos.z);
    e.phaseT += dt;
    const L = e.def.latch!;
    if (e.phaseT >= L - 1 && e.phaseT - dt < L - 1) this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
    if (e.phaseT < L) return;
    c.state = 'lost';
    this.stats.cargoLost++;
    this.events.push({ type: 'cargoLost', cargoId: c.id, pos: clone(c.pos) });
    this.events.push({ type: 'blink', enemyId: e.id, from: clone(e.pos), to: clone(e.pos) });
    e.cargoId = null;
    e.dead = true;
    this.events.push({ type: 'enemyEscaped', enemyId: e.id });
  }

  private stepCarry(e: Enemy, speed: number, dt: number): void {
    if (e.def.latch) { this.stepLatch(e, dt); return; }
    const exit = this.exitFor(e);
    const p = exit.pos;
    this.tryBlink(e, p, dt);
    this.flyTo(e, p, speed, dt, e.def.zigzag ? e.def.zigzag / 2 : 0.15);
    if ((e.def.walk ? distXZ(e.pos, p) : dist(e.pos, p)) < PORTAL.enter && exit.state !== 'opening') {
      this.closePortal(exit);
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
    const exit = this.exitFor(e);
    const p = exit.pos;
    this.flyTo(e, p, speed * 1.3, dt, 0.2);
    if ((e.def.walk ? distXZ(e.pos, p) : dist(e.pos, p)) < PORTAL.enter && exit.state !== 'opening') {
      this.closePortal(exit);
      e.dead = true;
      this.events.push({ type: 'enemyEscaped', enemyId: e.id });
    }
  }

  private stepAttack(e: Enemy, speed: number, dt: number): void {
    this.flyTo(e, this.player.pos, speed, dt, 0.5);
    if (dist(e.pos, this.player.pos) < 0.45) {
      const dmg = e.def.contactDamage ?? SPARK_DAMAGE;
      this.hurt(dmg, e.pos);
      e.dead = true;
      this.events.push({ type: 'enemyKilled', enemyId: e.id, pos: clone(e.pos), reward: 0, defId: e.def.id, byPlayer: false });
      this.events.push({ type: 'explosion', pos: clone(e.pos), size: dmg > 12 ? 1.2 : 0.8 });
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

  /** Бомбардир: зависает над грузом и сбрасывает мины. */
  private stepBomb(e: Enemy, speed: number, dt: number): void {
    let c = this.cargoOf(e.targetCargo);
    if (!c || c.state !== 'idle') {
      c = this.nearestIdleCargo(e.pos);
      e.targetCargo = c ? c.id : null;
    }
    if (!c) { e.state = 'flee'; return; }
    const over = v3(c.pos.x, c.pos.y + BOMB.height, c.pos.z);
    this.flyTo(e, over, Math.min(speed, dist(e.pos, over) * 2 + 0.05), dt, 0.1);
    if (distXZ(e.pos, over) > 0.4) return;
    e.fireCd -= dt;
    if (e.fireCd <= 0.7 && e.fireCd + dt > 0.7) this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
    if (e.fireCd <= 0) {
      e.fireCd = BOMB.period;
      const at = v3(e.pos.x, e.pos.y - 0.2, e.pos.z);
      this.mines.push({ id: this.nextId++, pos: at, vy: 0 });
      this.events.push({ type: 'mineDropped', pos: clone(at) });
    }
  }

  // ───── сектор 3: невидимость, прыжки, помехи, ремонт, босс ─────

  private updateCloak(e: Enemy, dt: number): void {
    e.reveal = Math.max(0, e.reveal - dt);
    let want = 0;
    if (e.def.cloak && !e.noCloak && e.state !== 'emerge' && !e.falling && e.reveal <= 0 && e.cargoId === null) {
      if (e.def.behavior === 'boss') want = e.state === 'boss' && e.phaseT < COLLECTOR.hide ? 1 : 0;
      else {
        e.phaseT += dt;
        const len = e.def.cloak.hidden + e.def.cloak.shown;
        want = e.phaseT % len < e.def.cloak.hidden ? 1 : 0;
      }
    }
    const k = Math.min(1, dt * 2.5);
    e.cloak += (want - e.cloak) * k;
    if (Math.abs(want - e.cloak) < 0.01) e.cloak = want;
  }

  /** Прыгун мерцает и перескакивает ближе к цели. */
  private tryBlink(e: Enemy, target: V3, dt: number): void {
    if (!e.def.blink) return;
    const hop = e.def.hop ?? BLINK;
    e.blinkCd -= dt;
    if (e.blinkCd <= BLINK.warn && e.blinkCd + dt > BLINK.warn) this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
    if (e.blinkCd > 0) return;
    e.blinkCd = hop.period;
    const to = sub(target, e.pos);
    const d = Math.hypot(to.x, to.y, to.z);
    if (d < 0.6) return;
    const from = clone(e.pos);
    e.pos = add(e.pos, mul(norm(to), Math.min(hop.dist, d - 0.4)));
    this.events.push({ type: 'blink', enemyId: e.id, from, to: clone(e.pos) });
  }

  /** Точка «висения» перед игроком: дуга ±30°, расстояние r. */
  /** @internal */ hoverPoint(e: Enemy, r: number, dy: number): V3 {
    const p = this.player.pos;
    const a = this.front + Math.sin(e.orbitAng) * 0.5;
    return v3(p.x + Math.sin(a) * r, p.y + dy + Math.sin(e.t * 0.9) * 0.2, p.z + Math.cos(a) * r);
  }

  /** @internal */ faceTo(e: Enemy, at: V3, dt: number): void {
    e.yaw += wrapAngle(Math.atan2(at.x - e.pos.x, at.z - e.pos.z) - e.yaw) * Math.min(1, dt * 4);
  }

  /** Глушитель висит впереди и раз в JAM.period отключает доп. оружие. */
  private stepJam(e: Enemy, speed: number, dt: number): void {
    e.orbitAng += 0.2 * dt;
    const want = this.hoverPoint(e, 5, 0.7);
    this.flyTo(e, want, Math.min(speed, dist(e.pos, want) * 2 + 0.05), dt, 0);
    this.faceTo(e, this.player.pos, dt);
    e.fireCd -= dt;
    if (e.fireCd <= 1 && e.fireCd + dt > 1) this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
    if (e.fireCd <= 0) {
      e.fireCd = JAM.period;
      this.jam = JAM.time;
      this.events.push({ type: 'jam', pos: clone(e.pos) });
    }
  }

  /** Ремонтник летит к самому побитому союзнику и чинит его лучом. */
  private stepRepair(e: Enemy, speed: number, dt: number): void {
    let target: Enemy | undefined;
    let worst = 1;
    for (const o of this.enemies) {
      if (o === e || o.dead || o.def.behavior === 'repair') continue;
      const f = o.hp / o.def.hp;
      if (f < worst - 0.001) { worst = f; target = o; }
    }
    if (!target) {
      e.beamTo = null;
      e.orbitAng += 0.15 * dt;
      const want = this.hoverPoint(e, 6, 1);
      this.flyTo(e, want, Math.min(speed, dist(e.pos, want) * 2 + 0.05), dt, 0);
      this.faceTo(e, this.player.pos, dt);
      return;
    }
    const want = add(target.pos, v3(0, 0.8, 0));
    this.flyTo(e, want, Math.min(speed * 1.2, dist(e.pos, want) * 2 + 0.05), dt, 0.1);
    this.faceTo(e, target.pos, dt);
    if (dist(e.pos, target.pos) < REPAIR.reach) {
      e.beamTo = target.id;
      target.hp = Math.min(target.def.hp, target.hp + REPAIR.rate * dt);
    } else e.beamTo = null;
  }

  /** Босс «Сборщик»: скрыт и перемещается → проявляется и даёт залп → через цикл зовёт подмогу. */
  private stepBoss(e: Enemy, speed: number, dt: number): void {
    const hideT = e.noCloak ? 2 : COLLECTOR.hide;
    // начало цикла: новая точка и, через раз, подкрепление
    if (e.phaseT === 0) {
      e.orbitAng = (this.rng() - 0.5) * 2;
      if (e.cycle % 2 === 1) {
        const crew = e.hp < e.def.hp / 2 ? ['jammer', 'grabber', 'scout'] : e.cycle % 4 === 1 ? ['jammer', 'scout'] : ['ghost', 'scout'];
        crew.forEach((id, i) => this.pending.push({ at: this.time + PORTAL.lead + i * 0.6, enemy: id, portalId: null }));
        this.events.push({ type: 'message', text: 'Мара: Сборщик зовёт подмогу!' });
      }
    }
    e.phaseT += dt;
    const want = this.hoverPoint(e, 5.5, 0.8);
    this.flyTo(e, want, Math.min(speed, dist(e.pos, want) * 1.5 + 0.05), dt, 0);
    this.faceTo(e, this.player.pos, dt);
    const at = e.phaseT - hideT;
    if (at >= 0) {
      if (at - dt < 0) this.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
      const guns = e.parts.filter((p) => p.def.kind === 'weapon' && p.alive);
      for (const v of COLLECTOR.volleys) {
        if (at >= v && at - dt < v) {
          // по сгустку из каждой живой пушки (без пушек — один из корпуса)
          const n = Math.max(1, guns.length);
          for (let i = 0; i < n; i++) {
            const from = guns[i] ? this.partWorld(e, guns[i]) : clone(e.pos);
            const aim = add(this.player.pos, v3((i - (n - 1) / 2) * 0.25, 0, 0));
            this.bolts.push({ id: this.nextId++, pos: from, vel: mul(norm(sub(aim, from)), BOLT_SPEED * 1.2), life: 6, from: clone(from) });
          }
          this.events.push({ type: 'boltFired', from: clone(e.pos) });
        }
      }
      if (at >= COLLECTOR.attack) { e.phaseT = 0; e.cycle++; }
    }
  }

  private updateMines(dt: number): void {
    for (const m of this.mines) {
      m.vy -= BOMB.gravity * dt;
      m.pos = v3(m.pos.x, m.pos.y + m.vy * dt, m.pos.z);
    }
    const landed = this.mines.filter((m) => m.pos.y <= this.floorY);
    this.mines = this.mines.filter((m) => m.pos.y > this.floorY);
    for (const m of landed) {
      const at = v3(m.pos.x, this.floorY, m.pos.z);
      let destroyed = 0;
      for (const c of this.cargo) {
        if (c.state === 'idle' && distXZ(c.pos, at) < BOMB.blast) {
          c.state = 'lost';
          this.stats.cargoLost++;
          destroyed++;
          this.events.push({ type: 'cargoLost', cargoId: c.id, pos: clone(c.pos) });
        }
      }
      this.events.push({ type: 'explosion', pos: at, size: 0.7 });
      this.events.push({ type: 'mineBlast', pos: at, destroyed });
    }
  }

  /** @internal */ nearestIdleCargo(from: V3): Cargo | undefined {
    let best: Cargo | undefined;
    let bd = Infinity;
    for (const c of this.cargo) {
      if (c.state !== 'idle') continue;
      const d = dist(from, c.pos);
      if (d < bd) { bd = d; best = c; }
    }
    return best;
  }

  // ───── порталы ─────

  /** @internal */ openPortal(kind: 'in' | 'out', owner: number | null, lane?: number, floor = false): Portal {
    const avoid = this.portals.map((q) => q.pos);
    const pos = pickPortalPos(floor ? { ...this.zone, rMin: Math.min(this.zone.rMin, 6), rMax: Math.min(this.zone.rMax, 7.5) } : this.zone, this.floorY, this.rng, avoid, lane);
    if (floor) pos.y = this.floorY + 0.02;
    // страховка: портал вторжения не висит дольше, чем нужно врагу, чтобы вылезти
    const closeAt = kind === 'in' ? this.time + PORTAL.lead + PORTAL.linger + 1 : Infinity;
    const p: Portal = { id: this.nextId++, pos, kind, state: 'opening', t: 0, owner, closeAt, floor };
    this.portals.push(p);
    this.events.push({ type: 'portalOpen', id: p.id, pos: clone(pos), kind });
    return p;
  }

  private closePortal(p: Portal): void {
    if (p.state === 'closing') return;
    p.state = 'closing';
    p.t = 0;
    this.events.push({ type: 'portalClose', id: p.id, kind: p.kind });
  }

  /** Портал ухода врага: открывается, когда враг решил уйти. */
  /** @internal */ exitFor(e: Enemy): Portal {
    let p = this.portals.find((q) => q.id === e.exitId && q.state !== 'closing');
    if (!p) {
      p = this.openPortal('out', e.id, undefined, !!e.def.walk);
      e.exitId = p.id;
    }
    return p;
  }

  private updatePortals(dt: number): void {
    for (const p of this.portals) {
      p.t += dt;
      if (p.state === 'opening' && p.t >= PORTAL.open) { p.state = 'open'; p.t = 0; }
      if (p.state === 'closing') continue;
      if (p.kind === 'in' && this.time >= p.closeAt) this.closePortal(p);
      if (p.kind === 'out') {
        const e = this.enemies.find((x) => x.id === p.owner);
        // хозяин сбит или передумал уходить — портал схлопывается
        if (!e || e.dead || e.falling || (e.state !== 'carry' && e.state !== 'flee')) this.closePortal(p);
      }
    }
    this.portals = this.portals.filter((p) => !(p.state === 'closing' && p.t >= PORTAL.close));
  }

  /** @internal */ dropCargo(e: Enemy): void {
    const c = this.cargoOf(e.cargoId);
    e.cargoId = null;
    if (c && c.state === 'carried') {
      c.state = 'falling';
      c.vy = 0;
      this.events.push({ type: 'cargoDropped', cargoId: c.id, pos: clone(c.pos) });
    }
  }

  // ───── снаряды, груз, игрок ─────

  // ───── ракеты и ЭМИ ─────

  private updateRockets(dt: number, input: Input): void {
    const rs = this.rocketState;
    if (rs) {
      // помехи: захват сбрасывается, пуск невозможен
      const held = !!input.rocket && this.jam <= 0;
      if (this.jam > 0) { rs.locked = false; rs.lockId = null; rs.lockT = 0; }
      if (held && rs.ammo > 0) {
        const hit = this.pick(input.camPos, norm(input.camDir));
        const id = hit?.enemy?.id ?? null;
        if (id !== null && id === rs.lockId) {
          rs.lockT += dt;
          if (!rs.locked && rs.lockT >= ROCKET.lockTime) {
            rs.locked = true;
            this.events.push({ type: 'lockOn', enemyId: id });
          }
        } else if (!rs.locked) {
          rs.lockId = id;
          rs.lockT = 0;
        }
      }
      if (!held && this.rocketHeld) {
        const target = rs.locked ? this.enemies.find((e) => e.id === rs.lockId && !e.dead) : undefined;
        if (target && rs.ammo > 0) {
          rs.ammo--;
          const from = add(input.camPos, v3(0, -0.15, 0));
          this.rockets.push({ id: this.nextId++, pos: from, vel: mul(norm(input.camDir), ROCKET.speed0), target: target.id, life: ROCKET.life });
          this.events.push({ type: 'rocketFired', from: clone(from) });
        }
        rs.lockId = null; rs.lockT = 0; rs.locked = false;
      }
      if (rs.locked && !this.enemies.some((e) => e.id === rs.lockId && !e.dead)) { rs.locked = false; rs.lockId = null; rs.lockT = 0; }
      this.rocketHeld = held;
    }
    for (const r of this.rockets) {
      r.life -= dt;
      const t = this.enemies.find((e) => e.id === r.target && !e.dead);
      const sp = Math.min(ROCKET.speed1, Math.hypot(r.vel.x, r.vel.y, r.vel.z) + 8 * dt);
      let dir = norm(r.vel);
      if (t) {
        const want = norm(sub(t.pos, r.pos));
        dir = norm(add(dir, mul(sub(want, dir), Math.min(1, ROCKET.turn * dt))));
      }
      r.vel = mul(dir, sp);
      r.pos = add(r.pos, mul(r.vel, dt));
      const close = t && dist(r.pos, t.pos) < t.def.radius * (t.def.scale ?? 1) + 0.15;
      if (close || r.life <= 0) {
        r.life = 0;
        this.explodeRocket(r.pos, t ?? null);
      }
    }
    this.rockets = this.rockets.filter((r) => r.life > 0);
  }

  private explodeRocket(at: V3, direct: Enemy | null): void {
    this.events.push({ type: 'explosion', pos: clone(at), size: 1.1 });
    if (direct && !direct.dead) {
      const core = direct.parts.find((p) => p.def.kind === 'core') ?? direct.parts[0];
      this.damage(direct, core, ROCKET.damage, at, true);
    }
    for (const e of this.enemies) {
      if (e.dead || e === direct) continue;
      if (dist(e.pos, at) < ROCKET.splash) this.damage(e, this.nearestPart(e, at), ROCKET.splashDamage, at, true);
    }
  }

  private updateEmp(dt: number, input: Input): void {
    const es = this.empState;
    if (!es) return;
    es.cd = Math.max(0, es.cd - dt);
    const pressed = !!input.emp && !this.empHeld;
    this.empHeld = !!input.emp;
    if (!pressed || es.cd > 0 || this.jam > 0) return;
    es.cd = es.cooldown;
    const dir = norm(input.camDir);
    let n = 0;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const to = sub(e.pos, input.camPos);
      const d = Math.hypot(to.x, to.y, to.z);
      if (d < EMP.range && dot(norm(to), dir) > Math.cos(EMP.cone)) { e.stun = EMP.stun; e.reveal = EMP.reveal; n++; }
    }
    for (const b of [...this.bolts, ...this.mines]) this.events.push({ type: 'boltShot', pos: clone(b.pos) });
    this.bolts = [];
    this.mines = [];
    this.events.push({ type: 'emp', pos: clone(input.camPos), stunned: n });
  }

  private updateBolts(dt: number): void {
    for (const b of this.bolts) {
      b.pos = add(b.pos, mul(b.vel, dt));
      b.life -= dt;
      if (dist(b.pos, this.player.pos) < 0.35) {
        b.life = 0;
        this.hurt(b.acid ? ACID.damage : BOLT_DAMAGE, b.from);
        if (b.acid) this.events.push({ type: 'acidHit' });
      }
    }
    this.bolts = this.bolts.filter((b) => b.life > 0);
  }

  private updateCargo(dt: number): void {
    for (const c of this.cargo) {
      if (c.state === 'carried') {
        const e = this.enemies.find((x) => x.cargoId === c.id && !x.dead);
        if (e && !this.tethers.some((t) => t.cargoId === c.id)) {
          if (e.def.push) {
            // болтун катит груз перед собой по полу
            const f = norm(v3(e.vel.x, 0, e.vel.z));
            c.pos = v3(e.pos.x + f.x * 0.22, this.floorY, e.pos.z + f.z * 0.22);
          } else if (e.def.latch) c.pos = v3(c.pos.x, this.floorY, c.pos.z);
          else c.pos = e.def.walk ? v3(e.pos.x, e.pos.y + 0.3, e.pos.z) : v3(e.pos.x, e.pos.y - 0.4, e.pos.z);
        }
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
