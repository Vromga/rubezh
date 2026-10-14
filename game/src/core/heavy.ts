import type { Enemy } from './types';
import { add, clone, dist, distXZ, mul, norm, sub, v3 } from './vec';
import { ACID, BOLT_SPEED, PORTAL, type World } from './world';

// Сектор 4 «Подвал»: тяжёлые враги и босс Жнец.

export const HARPOON = { period: 6, reel: 0.7, hp: 24 };
export const HIVE = { period: 7, maxBrood: 6 };
export const SPITTER = { period: 5, dist: 4.5 };
export const STOMP = { step: 1.1, reach: 0.7 };
export const REAPER = { volley: 5, volleyFast: 3.5, tractor: 12, reel: 0.35, tetherHp: 30, summon: 12 };

const alivePart = (e: Enemy, kind: string) => e.parts.some((p) => p.def.kind === kind && p.alive);

function telegraph(w: World, e: Enemy, before: number, dt: number): void {
  if (e.fireCd <= before && e.fireCd + dt > before) w.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
}

function hover(w: World, e: Enemy, r: number, dy: number, speed: number, dt: number, drift = 0.15): void {
  e.orbitAng += drift * dt;
  const want = w.hoverPoint(e, r, dy);
  w.flyTo(e, want, Math.min(speed, dist(e.pos, want) * 2 + 0.05), dt, 0);
  w.faceTo(e, w.player.pos, dt);
}

function attachTether(w: World, e: Enemy, hp: number): boolean {
  const c = w.nearestIdleCargo(e.pos);
  if (!c) return false;
  c.state = 'carried';
  e.cargoId = c.id;
  w.tethers.push({ id: w.nextId++, enemyId: e.id, cargoId: c.id, hp });
  w.events.push({ type: 'tether', enemyId: e.id, cargoId: c.id });
  w.events.push({ type: 'cargoGrabbed', cargoId: c.id, pos: clone(c.pos) });
  return true;
}

/** Гарпунщик: висит поодаль, гарпуном подтягивает груз, затем уносит в портал. */
export function stepHarpoon(w: World, e: Enemy, speed: number, dt: number): void {
  if (!alivePart(e, 'grabber')) { e.state = 'flee'; return; }
  if (e.state === 'reel') {
    hover(w, e, 5.5, 1.2, speed * 0.3, dt, 0);
    if (!w.tethers.some((t) => t.enemyId === e.id)) e.state = e.cargoId !== null ? 'carry' : 'harpoon';
    return;
  }
  hover(w, e, 5.5, 1.2, speed, dt);
  e.fireCd -= dt;
  telegraph(w, e, 1, dt);
  if (e.fireCd <= 0) {
    e.fireCd = HARPOON.period;
    if (attachTether(w, e, HARPOON.hp)) e.state = 'reel';
  }
}

/** Тросы тянут груз к орудию; дотянул — гарпунщик уносит, Жнец забирает в трюм. */
export function updateTethers(w: World, dt: number): void {
  for (const th of [...w.tethers]) {
    const ends = w.tetherEnds(th);
    const e = w.enemies.find((x) => x.id === th.enemyId);
    const c = w.cargoOf(th.cargoId);
    if (!ends || !e || !c) { w.tethers = w.tethers.filter((x) => x !== th); continue; }
    const speed = e.def.behavior === 'reaper' ? REAPER.reel : HARPOON.reel;
    const to = sub(ends[0], c.pos);
    const d = dist(ends[0], c.pos);
    c.pos = add(c.pos, mul(norm(to), Math.min(d, speed * dt)));
    if (d > 0.4) continue;
    w.tethers = w.tethers.filter((x) => x !== th);
    if (e.def.behavior === 'reaper') {
      c.state = 'lost';
      w.stats.cargoLost++;
      e.cargoId = null;
      w.events.push({ type: 'cargoLost', cargoId: c.id, pos: clone(c.pos) });
    } else e.state = 'carry';
  }
}

/** Рой-матка: держится далеко и выпускает жуков, пока целы мешки-инкубаторы. */
export function stepHive(w: World, e: Enemy, speed: number, dt: number): void {
  hover(w, e, 6.5, 1.6, speed, dt, 0.1);
  e.fireCd -= dt;
  telegraph(w, e, 1.2, dt);
  if (e.fireCd > 0) return;
  e.fireCd = HIVE.period;
  const sacs = e.parts.filter((p) => p.def.kind === 'sensor' && p.alive).length;
  const scouts = w.enemies.filter((x) => x.def.id === 'scout' && !x.dead).length;
  const n = Math.min(sacs + 1, HIVE.maxBrood - scouts);
  if (sacs === 0 || n <= 0) return;
  for (let i = 0; i < n; i++) {
    const s = w.spawn('scout', -1, add(e.pos, v3((i - (n - 1) / 2) * 0.35, -0.3, 0)));
    s.t = 0.4;
  }
  w.events.push({ type: 'brood', pos: clone(e.pos), n });
}

/** Кислотник: плюёт кислотой в стекло — пятна мешают видеть. */
export function stepAcid(w: World, e: Enemy, speed: number, dt: number): void {
  const mouth = e.parts.find((p) => p.def.kind === 'weapon' && p.alive);
  if (!mouth) { e.state = 'flee'; return; }
  hover(w, e, SPITTER.dist, 0.5, speed, dt, 0.25);
  e.fireCd -= dt;
  telegraph(w, e, 1, dt);
  if (e.fireCd > 0) return;
  e.fireCd = SPITTER.period;
  const from = w.partWorld(e, mouth);
  w.bolts.push({ id: w.nextId++, pos: from, vel: mul(norm(sub(w.player.pos, from)), ACID.speed), life: 6, from: clone(from), acid: true });
  w.events.push({ type: 'boltFired', from: clone(from) });
}

/** Левиафан: идёт по полу к грузу и давит его; шаги трясут экран. */
export function stepStomper(w: World, e: Enemy, speed: number, dt: number): void {
  const c = w.nearestIdleCargo(e.pos);
  if (!c) { e.state = 'flee'; return; }
  w.flyTo(e, c.pos, speed, dt);
  e.phaseT += dt;
  if (e.phaseT >= STOMP.step) {
    e.phaseT = 0;
    w.events.push({ type: 'shake', power: 0.3 });
  }
  if (distXZ(e.pos, c.pos) < STOMP.reach) {
    c.state = 'lost';
    w.stats.cargoLost++;
    w.events.push({ type: 'cargoLost', cargoId: c.id, pos: clone(c.pos) });
    w.events.push({ type: 'explosion', pos: clone(c.pos), size: 0.8 });
    w.events.push({ type: 'shake', power: 1 });
  }
}

const REAPER_LINES = [
  '',
  'Мара: трюм открылся — он тянет груз лучом! Перебей луч или разбей трюм.',
  'Мара: он вызывает тяжёлых! Держись, Жнец почти разбит.',
];

/** Жнец: три фазы — залпы; + луч-захват груза в трюм; + подкрепления и частый огонь. */
export function stepReaper(w: World, e: Enemy, speed: number, dt: number): void {
  const want = w.hoverPoint(e, 6, 0);
  want.y = w.floorY + 2.6;
  e.orbitAng += 0.12 * dt;
  w.flyTo(e, want, Math.min(speed, dist(e.pos, want) + 0.05), dt, 0);
  w.faceTo(e, w.player.pos, dt);
  const frac = e.hp / e.def.hp;
  const phase = frac > 0.66 ? 0 : frac > 0.33 ? 1 : 2;
  if (phase > e.cycle) {
    e.cycle = phase;
    w.events.push({ type: 'message', text: REAPER_LINES[phase] });
    w.events.push({ type: 'shake', power: 0.6 });
  }
  // залпы из пушек
  e.fireCd -= dt;
  telegraph(w, e, 0.8, dt);
  if (e.fireCd <= 0) {
    e.fireCd = phase === 2 ? REAPER.volleyFast : REAPER.volley;
    const guns = e.parts.filter((p) => p.def.kind === 'weapon' && p.alive);
    const sources = guns.length ? guns.map((g) => w.partWorld(e, g)) : [clone(e.pos)];
    sources.forEach((from, i) => {
      const aim = add(w.player.pos, v3((i - (sources.length - 1) / 2) * 0.3, 0, 0));
      w.bolts.push({ id: w.nextId++, pos: from, vel: mul(norm(sub(aim, from)), BOLT_SPEED), life: 8, from: clone(from) });
    });
    w.events.push({ type: 'boltFired', from: clone(e.pos) });
  }
  // луч-захват
  if (phase >= 1 && alivePart(e, 'grabber') && !w.tethers.some((t) => t.enemyId === e.id)) {
    e.phaseT += dt;
    if (e.phaseT >= REAPER.tractor) {
      e.phaseT = 0;
      attachTether(w, e, REAPER.tetherHp);
    }
  }
  // подкрепления
  if (phase === 2) {
    e.blinkCd -= dt;
    if (e.blinkCd <= 0) {
      e.blinkCd = REAPER.summon;
      const crew = w.time % 2 < 1 ? ['crab', 'scout'] : ['harpooner', 'scout'];
      crew.forEach((id, i) => w.pending.push({ at: w.time + PORTAL.lead + i * 0.6, enemy: id, portalId: null }));
    }
  }
}
