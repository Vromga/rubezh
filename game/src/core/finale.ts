import type { Enemy } from './types';
import { add, clone, dist, mul, norm, sub, v3 } from './vec';
import { BOLT_SPEED, PORTAL, type World } from './world';

// Сектор 5 «Орбита»: финальный босс Хор-Ядро и его узлы-щиты.

/**
 * Щит Ядра держится, пока живы узлы. Узлов в слоях 3 → 4 → 5.
 * Сбил все — Ядро открыто CORE.open секунд, потом поднимает следующий слой.
 */
export const CORE = { layers: [3, 4, 5], open: 14, volley: 6, swarm: 22, nodeR: 4.2, arc: (150 * Math.PI) / 180 };

const SWARM = [['scout', 'spark', 'spider'], ['moth', 'scout', 'spider']];

const LINES = [
  'Мара: Ядро под щитом. Узлы вокруг тебя питают его — сбей их все!',
  'Мара: щит пал! Бей по Ядру, пока не поднялся новый слой!',
  'Мара: новый слой щита. Узлов больше — ищи их по сторонам.',
];

function spawnNodes(w: World, core: Enemy, n: number): void {
  const p = w.player.pos;
  for (let i = 0; i < n; i++) {
    const a = w.front - CORE.arc / 2 + (CORE.arc * (i + 0.5)) / n;
    const at = v3(p.x + Math.sin(a) * CORE.nodeR, p.y + (i % 2 ? 0.7 : -0.1), p.z + Math.cos(a) * CORE.nodeR);
    const node = w.spawn('node', -1, at);
    node.owner = core.id;
    node.beamTo = core.id;
    node.fireCd = 4 + i * 1.3;
  }
}

/** Хор-Ядро: щит от узлов, залпы, «все порталы сразу». */
export function stepCore(w: World, e: Enemy, speed: number, dt: number): void {
  e.orbitAng += 0.08 * dt;
  const want = w.hoverPoint(e, 7, 0.9);
  w.flyTo(e, want, Math.min(speed, dist(e.pos, want) + 0.05), dt, 0);
  w.faceTo(e, w.player.pos, dt);
  const nodes = w.enemies.filter((n) => n.owner === e.id && !n.dead);
  if (e.cycle === 0) {
    spawnNodes(w, e, CORE.layers[0]);
    e.cycle = 1;
    e.shielded = true;
    e.blinkCd = CORE.swarm / 2;
    w.events.push({ type: 'message', text: LINES[0] });
  } else if (e.shielded && nodes.length === 0) {
    e.shielded = false;
    e.phaseT = 0;
    w.events.push({ type: 'message', text: LINES[1] });
    w.events.push({ type: 'shake', power: 0.6 });
  } else if (!e.shielded) {
    e.phaseT += dt;
    if (e.phaseT >= CORE.open) {
      spawnNodes(w, e, CORE.layers[Math.min(e.cycle, CORE.layers.length - 1)]);
      e.cycle++;
      e.shielded = true;
      w.events.push({ type: 'message', text: LINES[2] });
    }
  }
  // залпы только у открытого Ядра: под щитом стреляют узлы
  if (!e.shielded) e.fireCd -= dt;
  if (e.fireCd <= 0.8 && e.fireCd + dt > 0.8) w.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
  if (e.fireCd <= 0) {
    e.fireCd = CORE.volley;
    for (const i of [-1, 0, 1]) {
      const aim = add(w.player.pos, v3(i * 0.35, 0, 0));
      w.bolts.push({ id: w.nextId++, pos: clone(e.pos), vel: mul(norm(sub(aim, e.pos)), BOLT_SPEED), life: 8, from: clone(e.pos) });
    }
    w.events.push({ type: 'boltFired', from: clone(e.pos) });
  }
  // «все порталы сразу»: рой воров из нескольких порталов одновременно
  e.blinkCd -= dt;
  if (e.blinkCd <= 0) {
    e.blinkCd = CORE.swarm;
    const crew = SWARM[e.cycle % SWARM.length];
    crew.forEach((id, i) => w.pending.push({ at: w.time + PORTAL.lead, enemy: id, lane: i + 1, portalId: null }));
    w.events.push({ type: 'message', text: 'Мара: Ядро открывает все порталы разом! Воры идут к грузу!' });
  }
}

/** Узел: висит на месте, питает щит Ядра и изредка стреляет. */
export function stepNode(w: World, e: Enemy, dt: number): void {
  w.faceTo(e, w.player.pos, dt);
  e.pos = v3(e.pos.x, e.pos.y + Math.sin(e.t * 1.3 + e.id) * 0.06 * dt, e.pos.z);
  e.fireCd -= dt;
  if (e.fireCd <= 0.7 && e.fireCd + dt > 0.7) w.events.push({ type: 'telegraph', enemyId: e.id, pos: clone(e.pos) });
  if (e.fireCd <= 0) {
    e.fireCd = 11;
    w.bolts.push({ id: w.nextId++, pos: clone(e.pos), vel: mul(norm(sub(w.player.pos, e.pos)), BOLT_SPEED * 0.9), life: 8, from: clone(e.pos) });
    w.events.push({ type: 'boltFired', from: clone(e.pos) });
  }
}
