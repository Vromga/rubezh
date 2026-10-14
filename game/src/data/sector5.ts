import type { WaveDef } from '../core/types';

// Сектор 5 «Орбита»: «Ядро». Портал ведёт на корабль Хора. Все виды врагов и финальный босс.
export const SECTOR5: WaveDef[] = [
  {
    name: 'По ту сторону',
    hint: 'Мара: мы на их корабле — Хор затаскивает груз сюда. Пауки ползут по полу, мотыльки ускоряют остальных воров.',
    spawns: [{ t: 0, enemy: 'spider' }, { t: 1, enemy: 'moth' }, { t: 2, enemy: 'spider' }, { t: 3.5, enemy: 'scout' }, { t: 4.5, enemy: 'spider' }],
  },
  {
    name: 'Клещи',
    hint: 'Мара: клещ прыжками добирается до груза и прилипает. Сбей его за 5 секунд — груз не пострадает.',
    spawns: [{ t: 0, enemy: 'tick' }, { t: 1.5, enemy: 'tick' }, { t: 3, enemy: 'moth' }, { t: 4, enemy: 'scout' }],
  },
  {
    name: 'Болтуны',
    hint: 'Мара: болтун катит груз по полу к порталу. Бока бронированы — бей в люк сверху.',
    spawns: [{ t: 0, enemy: 'roller' }, { t: 2, enemy: 'spider' }, { t: 3.5, enemy: 'roller' }, { t: 5, enemy: 'spark' }],
  },
  {
    name: 'Охотники',
    hint: 'Мара: охотник уносит груз пешком. Голова-сенсор — двойной урон, руку можно отстрелить.',
    spawns: [{ t: 0, enemy: 'hunter' }, { t: 2, enemy: 'moth' }, { t: 3, enemy: 'hunter' }, { t: 5, enemy: 'tick' }],
  },
  {
    name: 'Конвейер',
    hint: 'Мара: Хор тащит всё подряд. Воры с грузом — в первую очередь.',
    spawns: [
      { t: 0, enemy: 'grabber' }, { t: 1, enemy: 'spider' }, { t: 2, enemy: 'moth' }, { t: 3, enemy: 'jumper' },
      { t: 4.5, enemy: 'roller' }, { t: 6, enemy: 'crab' }, { t: 7.5, enemy: 'tick' },
    ],
  },
  {
    name: 'Охрана корабля',
    hint: 'Мара: охрана Ядра. Глушитель и ремонтник — первыми.',
    spawns: [
      { t: 0, enemy: 'jammer' }, { t: 1.5, enemy: 'repair' }, { t: 3, enemy: 'shooter' }, { t: 4.5, enemy: 'ghost' },
      { t: 6, enemy: 'harpooner' }, { t: 8, enemy: 'spider' },
    ],
  },
  {
    name: 'Последний рубеж',
    hint: 'Мара: всё, что у них осталось. Держись, Оператор-7.',
    spawns: [
      { t: 0, enemy: 'hunter' }, { t: 1.5, enemy: 'spitter' }, { t: 3, enemy: 'moth' }, { t: 4.5, enemy: 'sapper' },
      { t: 6, enemy: 'roller' }, { t: 7.5, enemy: 'bomber' }, { t: 9, enemy: 'tick' }, { t: 10.5, enemy: 'scout' },
    ],
  },
  {
    name: 'Хор-Ядро',
    hint: 'Мара: Ядро. Это сердце Хора. Узлы щита — вокруг тебя, по сторонам. Сбей их и бей в Ядро.',
    spawns: [{ t: 0, enemy: 'nexus' }],
  },
];
