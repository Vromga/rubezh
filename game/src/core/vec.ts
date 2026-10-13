export interface V3 { x: number; y: number; z: number }

export const v3 = (x = 0, y = 0, z = 0): V3 => ({ x, y, z });
export const clone = (a: V3): V3 => ({ x: a.x, y: a.y, z: a.z });
export const add = (a: V3, b: V3): V3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export const sub = (a: V3, b: V3): V3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const mul = (a: V3, s: number): V3 => ({ x: a.x * s, y: a.y * s, z: a.z * s });
export const dot = (a: V3, b: V3): number => a.x * b.x + a.y * b.y + a.z * b.z;
export const len = (a: V3): number => Math.hypot(a.x, a.y, a.z);
export const dist = (a: V3, b: V3): number => len(sub(a, b));
export const distXZ = (a: V3, b: V3): number => Math.hypot(a.x - b.x, a.z - b.z);
export const norm = (a: V3): V3 => {
  const l = len(a);
  return l < 1e-9 ? v3(0, 0, 1) : mul(a, 1 / l);
};

/** Поворот вектора вокруг оси Y так же, как rotation.y в three.js. */
export function rotY(a: V3, yaw: number): V3 {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  return { x: c * a.x + s * a.z, y: a.y, z: -s * a.x + c * a.z };
}

export function wrapAngle(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

/** Расстояние t до первого пересечения луча со сферой или null. */
export function raySphere(o: V3, d: V3, c: V3, r: number): number | null {
  const oc = sub(c, o);
  const tca = dot(oc, d);
  if (tca < 0) return null;
  const d2 = dot(oc, oc) - tca * tca;
  if (d2 > r * r) return null;
  const thc = Math.sqrt(r * r - d2);
  return Math.max(tca - thc, 0.05);
}
