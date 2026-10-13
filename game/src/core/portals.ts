import type { Rng } from './rng';
import { v3, type V3 } from './vec';

const HEIGHTS = [1.0, 1.8, 0.6, 1.5, 2.0, 0.9];

/**
 * Порталы в переднем полукруге (±arc/2 от направления взгляда yaw0), чтобы враги не появлялись за спиной.
 * Высота над полом чередуется.
 */
export function makePortals(center: V3, yaw0: number, radius: number, floorY: number, rng: Rng, count = 6, arc = Math.PI * 0.9): V3[] {
  const out: V3[] = [];
  for (let i = 0; i < count; i++) {
    const a = yaw0 - arc / 2 + arc * (i / (count - 1)) + (rng() - 0.5) * 0.12;
    out.push(v3(center.x + Math.sin(a) * radius, floorY + HEIGHTS[i % HEIGHTS.length], center.z + Math.cos(a) * radius));
  }
  return out;
}
