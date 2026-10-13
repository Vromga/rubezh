import type { Rng } from './rng';
import { v3, type V3 } from './vec';

const HEIGHTS = [0.9, 2.3, 1.3, 2.6, 1.0, 2.0];

/**
 * Порталы в секторе перед игроком (±arc/2 от направления взгляда yaw0, по умолчанию 60°).
 * Высота над полом чередуется.
 */
export function makePortals(center: V3, yaw0: number, radius: number, floorY: number, rng: Rng, count = 5, arc = Math.PI / 3): V3[] {
  const out: V3[] = [];
  for (let i = 0; i < count; i++) {
    const a = yaw0 - arc / 2 + arc * (i / (count - 1)) + (rng() - 0.5) * 0.06;
    out.push(v3(center.x + Math.sin(a) * radius, floorY + HEIGHTS[i % HEIGHTS.length], center.z + Math.cos(a) * radius));
  }
  return out;
}
