import type { EnemyDef } from '../core/types';
import { v3 } from '../core/vec';

// Враги описаны данными: баланс правится без изменения кода боя.
export const ENEMIES: Record<string, EnemyDef> = {
  scout: {
    id: 'scout', name: 'Жук-скаут', cls: 'L', hp: 20, speed: 2.2, radius: 0.3, behavior: 'thief', reward: 3,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.14 },
      { id: 'wingL', kind: 'engine', hp: 8, off: v3(-0.17, 0.03, 0), r: 0.1 },
      { id: 'wingR', kind: 'engine', hp: 8, off: v3(0.17, 0.03, 0), r: 0.1 },
    ],
  },
  spark: {
    id: 'spark', name: 'Искра', cls: 'L', hp: 14, speed: 2.6, radius: 0.28, behavior: 'kamikaze', reward: 4,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.12 },
      { id: 'fin', kind: 'engine', hp: 6, off: v3(0, 0, -0.2), r: 0.1 },
    ],
  },
  grabber: {
    id: 'grabber', name: 'Хваталка', cls: 'M', hp: 70, speed: 1.4, radius: 0.42, behavior: 'thief', reward: 12,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.2 },
      { id: 'head', kind: 'sensor', hp: 12, off: v3(0, 0.02, 0.28), r: 0.12 },
      { id: 'arm', kind: 'grabber', hp: 26, off: v3(0, -0.25, 0.05), r: 0.14 },
      { id: 'thrL', kind: 'engine', hp: 16, off: v3(-0.28, 0, -0.05), r: 0.12 },
      { id: 'thrR', kind: 'engine', hp: 16, off: v3(0.28, 0, -0.05), r: 0.12 },
    ],
  },
  shooter: {
    id: 'shooter', name: 'Стрелок', cls: 'M', hp: 50, speed: 1.6, radius: 0.38, behavior: 'shooter', reward: 14,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.2 },
      { id: 'plateL', kind: 'armor', hp: 14, off: v3(-0.2, 0.05, 0), r: 0.12 },
      { id: 'plateR', kind: 'armor', hp: 14, off: v3(0.2, 0.05, 0), r: 0.12 },
      { id: 'gun', kind: 'weapon', hp: 18, off: v3(0, -0.08, 0.32), r: 0.12 },
      { id: 'rotor', kind: 'engine', hp: 20, off: v3(0, 0.2, 0), r: 0.2 },
    ],
  },
};
