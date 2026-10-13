import type { Rng } from './rng';
import { v3, type V3 } from './vec';

const HEIGHTS = [1.0, 1.8, 0.6, 1.5, 2.0, 0.9];

/** Порталы вокруг игрока, равномерно по кругу; высота над полом разная. */
export function makePortals(center: V3, yaw0: number, radius: number, floorY: number, rng: Rng, count = 6): V3[] {
  const out: V3[] = [];
  for (let i = 0; i < count; i++) {
    const a = yaw0 + (i / count) * Math.PI * 2 + (rng() - 0.5) * 0.3;
    out.push(v3(center.x + Math.sin(a) * radius, floorY + HEIGHTS[i % HEIGHTS.length], center.z + Math.cos(a) * radius));
  }
  return out;
}
