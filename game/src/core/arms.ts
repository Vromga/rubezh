import type { Enemy } from './types';
import { add, clone, dist, dot, mul, norm, sub, v3, type V3 } from './vec';
import type { Input, World } from './world';

// Доп. оружие: лазер «Луч», молния «Тесла», дрон «Оса».

export const LASER = { heatUp: 30, cool: 22, resume: 35, range: 14, tick: 0.1 };
export const TESLA = { cooldown: 6, hop: 2.6, dmg: 28, falloff: 0.85, cone: 0.2 };
export const DRONE = { period: 0.45, range: 9 };

export interface LaserState { dps: number; heat: number; over: boolean; acc: number; beam: { from: V3; to: V3 } | null }
export interface TeslaState { cd: number; links: number; held: boolean }
export interface DroneState { dmg: number; cd: number; pos: V3; ang: number }

/** Лазер: пока кнопка зажата — непрерывный луч по линии прицела; режет броню и щиты. */
export function updateLaser(w: World, dt: number, input: Input): void {
  const ls = w.laserState;
  if (!ls) return;
  const on = !!input.laser && !ls.over && w.jam <= 0;
  ls.beam = null;
  if (!on) {
    ls.heat = Math.max(0, ls.heat - LASER.cool * dt);
    if (ls.over && ls.heat <= LASER.resume) ls.over = false;
    ls.acc = 0;
    return;
  }
  ls.heat += LASER.heatUp * dt;
  if (ls.heat >= 100) { ls.heat = 100; ls.over = true; w.events.push({ type: 'overheat' }); }
  const d = norm(input.camDir);
  // луч выходит из-под кабины чуть впереди, а не из глаз
  const o = add(add(input.camPos, mul(d, 0.45)), v3(0, -0.14, 0));
  const hit = w.pick(input.camPos, d);
  const t = hit ? hit.t : LASER.range;
  ls.beam = { from: o, to: add(input.camPos, mul(d, t)) };
  ls.acc += dt;
  if (ls.acc < LASER.tick) return;
  const dmg = ls.dps * ls.acc;
  ls.acc = 0;
  if (!hit) return;
  const point = add(input.camPos, mul(d, hit.t));
  if (hit.bolt) { w.bolts = w.bolts.filter((b) => b !== hit.bolt); w.events.push({ type: 'boltShot', pos: clone(hit.bolt.pos) }); return; }
  if (hit.mine) { w.mines = w.mines.filter((m) => m !== hit.mine); w.events.push({ type: 'boltShot', pos: clone(hit.mine.pos) }); return; }
  if (hit.tether) { hit.tether.hp -= dmg; if (hit.tether.hp <= 0) w.cutTether(hit.tether, point); return; }
  if (hit.enemy) {
    const e = hit.enemy;
    const shield = e.parts.find((p) => p.def.kind === 'shield' && p.alive);
    if (shield) { w.damage(e, shield, dmg * 2, point); return; }
    const approach = add(input.camPos, mul(d, dot(sub(e.pos, input.camPos), d)));
    const part = w.nearestPart(e, approach);
    // броня не ослабляет лазер
    w.damage(e, part, part.def.kind === 'armor' ? dmg * 2 : dmg, point, true);
  }
}

/** Тесла: по нажатию молния бьёт в цель и перескакивает на ближайших. */
export function updateTesla(w: World, dt: number, input: Input): void {
  const ts = w.teslaState;
  if (!ts) return;
  ts.cd = Math.max(0, ts.cd - dt);
  const pressed = !!input.tesla && !ts.held;
  ts.held = !!input.tesla;
  if (!pressed || ts.cd > 0 || w.jam > 0) return;
  const d = norm(input.camDir);
  let first: Enemy | null = w.pick(input.camPos, d)?.enemy ?? null;
  if (!first) {
    // нет точного попадания — ближайший враг в узком конусе прицела
    let best = Math.cos(TESLA.cone);
    for (const e of w.enemies) {
      if (!w.targetable(e)) continue;
      const c = dot(norm(sub(e.pos, input.camPos)), d);
      if (c > best) { best = c; first = e; }
    }
  }
  if (!first) { ts.cd = 0.4; return; }
  ts.cd = TESLA.cooldown;
  const points: V3[] = [add(input.camPos, v3(0, -0.15, 0))];
  const hitSet = new Set<number>();
  let cur: Enemy | null = first;
  for (let i = 0; i < ts.links && cur; i++) {
    hitSet.add(cur.id);
    points.push(clone(cur.pos));
    w.damage(cur, w.nearestPart(cur, cur.pos), TESLA.dmg * TESLA.falloff ** i, cur.pos, true);
    cur.stun = Math.max(cur.stun, 0.4);
    let next: Enemy | null = null;
    let nd = TESLA.hop;
    for (const e of w.enemies) {
      if (hitSet.has(e.id) || !w.targetable(e)) continue;
      const dd = dist(e.pos, cur.pos);
      if (dd < nd) { nd = dd; next = e; }
    }
    cur = next;
  }
  w.events.push({ type: 'tesla', points });
}

/** Дрон «Оса»: кружит рядом и сам стреляет — в первую очередь по ворам с грузом. */
export function updateDrone(w: World, dt: number): void {
  const ds = w.droneState;
  if (!ds) return;
  ds.ang += dt * 1.1;
  const p = w.player.pos;
  ds.pos = v3(p.x + Math.sin(w.front + Math.sin(ds.ang) * 0.9) * 0.9, p.y + 0.35 + Math.sin(ds.ang * 2) * 0.08, p.z + Math.cos(w.front + Math.sin(ds.ang) * 0.9) * 0.9);
  ds.cd -= dt;
  if (ds.cd > 0 || w.jam > 0) return;
  const inRange = w.enemies.filter((e) => w.targetable(e) && e.state !== 'emerge' && dist(e.pos, p) < DRONE.range);
  const thief = inRange.filter((e) => e.cargoId !== null).sort((a, b) => dist(a.pos, p) - dist(b.pos, p))[0];
  const target = thief ?? inRange.sort((a, b) => dist(a.pos, p) - dist(b.pos, p))[0];
  if (!target) return;
  ds.cd = DRONE.period;
  w.quiet = true;
  w.damage(target, w.nearestPart(target, target.pos), ds.dmg, target.pos);
  w.quiet = false;
  w.events.push({ type: 'droneShot', from: clone(ds.pos), to: clone(target.pos) });
}
