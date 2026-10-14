import type { Rng } from './rng';
import { dist, v3, type V3 } from './vec';

/** Где могут открываться порталы: сектор перед игроком на расстоянии rMin..rMax. */
export interface PortalZone {
  center: V3;
  /** направление сектора (рад., как atan2(x, z)) */
  yaw: number;
  rMin: number;
  rMax: number;
  /** ширина сектора, по умолчанию 60° */
  arc?: number;
  /** высота портала над полом, м */
  hMin?: number;
  hMax?: number;
}

export const PORTAL_LANES = 5;

/**
 * Случайная точка портала в секторе на случайной высоте над полом.
 * lane (0..4) — необязательная «полоса» по ширине сектора.
 * Старается не ставить портал ближе 1,6 м к уже открытым.
 */
export function pickPortalPos(zone: PortalZone, floorY: number, rng: Rng, avoid: V3[] = [], lane?: number): V3 {
  const arc = zone.arc ?? Math.PI / 3;
  const hMin = zone.hMin ?? 0.4;
  const hMax = zone.hMax ?? 2.7;
  let best = v3();
  let bestGap = -1;
  for (let i = 0; i < 8; i++) {
    const k = lane === undefined ? rng() : (lane % PORTAL_LANES + 0.5 + (rng() - 0.5) * 0.6) / PORTAL_LANES;
    const a = zone.yaw - arc / 2 + arc * k;
    const r = zone.rMin + rng() * (zone.rMax - zone.rMin);
    const p = v3(zone.center.x + Math.sin(a) * r, floorY + hMin + rng() * (hMax - hMin), zone.center.z + Math.cos(a) * r);
    const gap = avoid.length ? Math.min(...avoid.map((q) => dist(p, q))) : Infinity;
    if (gap >= 1.6) return p;
    if (gap > bestGap) { bestGap = gap; best = p; }
  }
  return best;
}
