import type { EnemyDef } from '../core/types';
import { v3 } from '../core/vec';

// Враги описаны данными: баланс правится без изменения кода боя.
// Порталы далеко (9–12 м), поэтому роботы крупнее «игрушечного» размера.
const S = 1.8;

export const ENEMIES: Record<string, EnemyDef> = {
  scout: {
    id: 'scout', name: 'Жук-скаут', cls: 'L', hp: 20, speed: 0.9, radius: 0.3, behavior: 'thief', reward: 3, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.14 },
      { id: 'wingL', kind: 'engine', hp: 8, off: v3(-0.17, 0.03, 0), r: 0.1 },
      { id: 'wingR', kind: 'engine', hp: 8, off: v3(0.17, 0.03, 0), r: 0.1 },
    ],
  },
  spark: {
    id: 'spark', name: 'Искра', cls: 'L', hp: 14, speed: 1.1, radius: 0.28, behavior: 'thief', reward: 4, scale: S,
    blast: { r: 0.9, dmg: 14 },
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.12 },
      { id: 'fin', kind: 'engine', hp: 6, off: v3(0, 0, -0.2), r: 0.1 },
    ],
  },
  grabber: {
    id: 'grabber', name: 'Хваталка', cls: 'M', hp: 70, speed: 0.6, radius: 0.42, behavior: 'thief', reward: 12, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.2 },
      { id: 'head', kind: 'sensor', hp: 12, off: v3(0, 0.02, 0.28), r: 0.12 },
      { id: 'arm', kind: 'grabber', hp: 26, off: v3(0, -0.25, 0.05), r: 0.14 },
      { id: 'thrL', kind: 'engine', hp: 16, off: v3(-0.28, 0, -0.05), r: 0.12 },
      { id: 'thrR', kind: 'engine', hp: 16, off: v3(0.28, 0, -0.05), r: 0.12 },
    ],
  },
  shield: {
    id: 'shield', name: 'Щитоносец', cls: 'M', hp: 60, speed: 0.45, radius: 0.42, behavior: 'kamikaze', reward: 16, scale: S, contactDamage: 22,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.2 },
      { id: 'shield', kind: 'shield', hp: 120, off: v3(0, 0, 0.3), r: 0.36 },
      { id: 'jet', kind: 'engine', hp: 30, off: v3(0, -0.05, -0.25), r: 0.12 },
    ],
  },
  bomber: {
    id: 'bomber', name: 'Бомбардир', cls: 'M', hp: 55, speed: 0.6, radius: 0.45, behavior: 'bomber', reward: 15, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.25 },
      { id: 'bay', kind: 'weapon', hp: 20, off: v3(0, -0.12, 0), r: 0.14 },
      { id: 'eye', kind: 'sensor', hp: 10, off: v3(0, 0.02, 0.32), r: 0.1 },
      { id: 'jetL', kind: 'engine', hp: 15, off: v3(-0.36, 0, 0), r: 0.11 },
      { id: 'jetR', kind: 'engine', hp: 15, off: v3(0.36, 0, 0), r: 0.11 },
    ],
  },
  shooter: {
    id: 'shooter', name: 'Стрелок', cls: 'M', hp: 50, speed: 0.7, radius: 0.38, behavior: 'shooter', reward: 14, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.2 },
      { id: 'plateL', kind: 'armor', hp: 14, off: v3(-0.2, 0.05, 0), r: 0.12 },
      { id: 'plateR', kind: 'armor', hp: 14, off: v3(0.2, 0.05, 0), r: 0.12 },
      { id: 'gun', kind: 'weapon', hp: 18, off: v3(0, -0.08, 0.32), r: 0.12 },
      { id: 'rotor', kind: 'engine', hp: 20, off: v3(0, 0.2, 0), r: 0.2 },
    ],
  },
  jammer: {
    id: 'jammer', name: 'Глушитель', cls: 'M', hp: 45, speed: 0.7, radius: 0.4, behavior: 'jammer', reward: 14, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.18 },
      { id: 'dish', kind: 'weapon', hp: 18, off: v3(0, 0.2, 0.04), r: 0.15 },
      { id: 'engL', kind: 'engine', hp: 14, off: v3(-0.24, -0.04, 0), r: 0.1 },
      { id: 'engR', kind: 'engine', hp: 14, off: v3(0.24, -0.04, 0), r: 0.1 },
    ],
  },
  repair: {
    id: 'repair', name: 'Ремонтник', cls: 'M', hp: 50, speed: 0.75, radius: 0.38, behavior: 'repair', reward: 16, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.17 },
      { id: 'emitter', kind: 'weapon', hp: 16, off: v3(0, -0.14, 0.16), r: 0.1 },
      { id: 'rotor', kind: 'engine', hp: 18, off: v3(0, 0.18, 0), r: 0.18 },
    ],
  },
  jumper: {
    id: 'jumper', name: 'Прыгун', cls: 'M', hp: 35, speed: 0.6, radius: 0.32, behavior: 'thief', reward: 12, scale: S, blink: true,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.14 },
      { id: 'core', kind: 'sensor', hp: 8, off: v3(0, 0.02, 0.12), r: 0.07 },
      { id: 'finL', kind: 'engine', hp: 10, off: v3(-0.17, 0, -0.04), r: 0.09 },
      { id: 'finR', kind: 'engine', hp: 10, off: v3(0.17, 0, -0.04), r: 0.09 },
    ],
  },
  ghost: {
    id: 'ghost', name: 'Призрак', cls: 'H', hp: 80, speed: 0.55, radius: 0.42, behavior: 'thief', reward: 22, scale: S,
    cloak: { hidden: 4, shown: 2.2 },
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.22 },
      { id: 'veil', kind: 'sensor', hp: 18, off: v3(0, 0.18, -0.05), r: 0.1 },
      { id: 'claw', kind: 'grabber', hp: 24, off: v3(0, -0.24, 0.05), r: 0.12 },
      { id: 'engL', kind: 'engine', hp: 22, off: v3(-0.26, 0, -0.08), r: 0.1 },
      { id: 'engR', kind: 'engine', hp: 22, off: v3(0.26, 0, -0.08), r: 0.1 },
    ],
  },
  collector: {
    id: 'collector', name: 'Сборщик', cls: 'B', hp: 600, speed: 0.5, radius: 0.8, behavior: 'boss', reward: 150, scale: S * 1.4,
    cloak: { hidden: 5, shown: 3.5 },
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.45 },
      { id: 'veil', kind: 'sensor', hp: 80, off: v3(0, 0.32, 0), r: 0.16 },
      { id: 'gunL', kind: 'weapon', hp: 90, off: v3(-0.42, -0.12, 0.28), r: 0.13 },
      { id: 'gunR', kind: 'weapon', hp: 90, off: v3(0.42, -0.12, 0.28), r: 0.13 },
      { id: 'engL', kind: 'engine', hp: 140, off: v3(-0.55, 0.05, -0.2), r: 0.16 },
      { id: 'engR', kind: 'engine', hp: 140, off: v3(0.55, 0.05, -0.2), r: 0.16 },
    ],
  },
  crab: {
    id: 'crab', name: 'Танк-краб', cls: 'H', hp: 150, speed: 0.45, radius: 0.5, behavior: 'thief', reward: 26, scale: S, walk: 0.22,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.25 },
      { id: 'shell', kind: 'shield', hp: 90, off: v3(0, 0.1, 0.2), r: 0.3 },
      { id: 'claw', kind: 'grabber', hp: 40, off: v3(0.18, 0, 0.3), r: 0.12 },
      { id: 'legL', kind: 'engine', hp: 35, off: v3(-0.3, -0.12, 0), r: 0.12 },
      { id: 'legR', kind: 'engine', hp: 35, off: v3(0.3, -0.12, 0), r: 0.12 },
    ],
  },
  harpooner: {
    id: 'harpooner', name: 'Гарпунщик', cls: 'H', hp: 90, speed: 0.55, radius: 0.45, behavior: 'harpoon', reward: 24, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.22 },
      { id: 'gun', kind: 'grabber', hp: 30, off: v3(0, -0.12, 0.28), r: 0.12 },
      { id: 'engL', kind: 'engine', hp: 25, off: v3(-0.3, 0.02, -0.05), r: 0.11 },
      { id: 'engR', kind: 'engine', hp: 25, off: v3(0.3, 0.02, -0.05), r: 0.11 },
    ],
  },
  hive: {
    id: 'hive', name: 'Рой-матка', cls: 'H', hp: 140, speed: 0.4, radius: 0.6, behavior: 'hive', reward: 30, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.3 },
      { id: 'sacL', kind: 'sensor', hp: 30, off: v3(-0.26, -0.16, 0.05), r: 0.13 },
      { id: 'sacR', kind: 'sensor', hp: 30, off: v3(0.26, -0.16, 0.05), r: 0.13 },
      { id: 'rotor', kind: 'engine', hp: 40, off: v3(0, 0.3, 0), r: 0.22 },
    ],
  },
  sapper: {
    id: 'sapper', name: 'Сапёр', cls: 'H', hp: 90, speed: 0.35, radius: 0.45, behavior: 'kamikaze', reward: 20, scale: S,
    contactDamage: 35, blast: { r: 1.6, dmg: 40 },
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.26 },
      { id: 'charge', kind: 'sensor', hp: 25, off: v3(0, 0.02, 0.26), r: 0.12 },
      { id: 'jetL', kind: 'engine', hp: 25, off: v3(-0.28, 0, -0.1), r: 0.1 },
      { id: 'jetR', kind: 'engine', hp: 25, off: v3(0.28, 0, -0.1), r: 0.1 },
    ],
  },
  spitter: {
    id: 'spitter', name: 'Кислотник', cls: 'H', hp: 75, speed: 0.6, radius: 0.42, behavior: 'acid', reward: 22, scale: S,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.22 },
      { id: 'mouth', kind: 'weapon', hp: 22, off: v3(0, -0.06, 0.26), r: 0.11 },
      { id: 'wingL', kind: 'engine', hp: 20, off: v3(-0.28, 0.06, -0.04), r: 0.12 },
      { id: 'wingR', kind: 'engine', hp: 20, off: v3(0.28, 0.06, -0.04), r: 0.12 },
    ],
  },
  leviathan: {
    id: 'leviathan', name: 'Левиафан', cls: 'H', hp: 320, speed: 0.28, radius: 0.9, behavior: 'stomper', reward: 45, scale: S * 1.5, walk: 0.6,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.42 },
      { id: 'head', kind: 'sensor', hp: 60, off: v3(0, 0.12, 0.48), r: 0.17 },
      { id: 'legFL', kind: 'engine', hp: 60, off: v3(-0.42, -0.3, 0.3), r: 0.14 },
      { id: 'legFR', kind: 'engine', hp: 60, off: v3(0.42, -0.3, 0.3), r: 0.14 },
      { id: 'legBL', kind: 'engine', hp: 60, off: v3(-0.42, -0.3, -0.3), r: 0.14 },
      { id: 'legBR', kind: 'engine', hp: 60, off: v3(0.42, -0.3, -0.3), r: 0.14 },
    ],
  },
  reaper: {
    id: 'reaper', name: 'Жнец', cls: 'B', hp: 800, speed: 0.4, radius: 1.0, behavior: 'reaper', reward: 250, scale: S * 1.5,
    parts: [
      { id: 'body', kind: 'core', hp: 9999, off: v3(0, 0, 0), r: 0.55 },
      { id: 'hold', kind: 'grabber', hp: 160, off: v3(0, -0.3, 0), r: 0.25 },
      { id: 'gunL', kind: 'weapon', hp: 120, off: v3(-0.55, -0.1, 0.35), r: 0.14 },
      { id: 'gunR', kind: 'weapon', hp: 120, off: v3(0.55, -0.1, 0.35), r: 0.14 },
      { id: 'engL', kind: 'engine', hp: 220, off: v3(-0.72, 0.1, -0.35), r: 0.18 },
      { id: 'engR', kind: 'engine', hp: 220, off: v3(0.72, 0.1, -0.35), r: 0.18 },
    ],
  },
};
