import type { WaveDef } from '../core/types';

// Сектор 1 «Гостиная»: обучение. Реплики — ИИ «Мара».
export const SECTOR1: WaveDef[] = [
  {
    name: 'Первый Разлом',
    hint: 'Мара: жуки идут за грузом. Короткими очередями — зенитка греется.',
    spawns: [0, 1.6, 3.2, 4.8].map((t) => ({ t, enemy: 'scout' })),
  },
  {
    name: 'Искры',
    hint: 'Мара: искры летят прямо в тебя. Сбей — иначе экран треснет.',
    spawns: [
      { t: 0, enemy: 'scout' }, { t: 1.2, enemy: 'spark' }, { t: 2.4, enemy: 'scout' },
      { t: 3.6, enemy: 'spark' }, { t: 4.8, enemy: 'scout' }, { t: 6, enemy: 'scout' },
    ],
  },
  {
    name: 'Хваталки',
    hint: 'Мара: хваталка тяжёлая. Бей по руке — груз упадёт.',
    spawns: [
      { t: 0, enemy: 'grabber' }, { t: 2, enemy: 'scout' }, { t: 3, enemy: 'scout' },
      { t: 5, enemy: 'grabber' }, { t: 6, enemy: 'scout' },
    ],
  },
  {
    name: 'Огонь на поражение',
    hint: 'Мара: стрелок бьёт сгустками. Сгусток можно сбить!',
    spawns: [
      { t: 0, enemy: 'shooter' }, { t: 2, enemy: 'spark' }, { t: 3, enemy: 'spark' },
      { t: 4, enemy: 'scout' }, { t: 5.5, enemy: 'spark' }, { t: 7, enemy: 'scout' },
    ],
  },
  {
    name: 'Последний натиск',
    hint: 'Мара: всё сразу. Держись, Оператор.',
    spawns: [
      { t: 0, enemy: 'shooter' }, { t: 1, enemy: 'grabber' }, { t: 2, enemy: 'spark' },
      { t: 3, enemy: 'spark' }, { t: 4, enemy: 'scout' }, { t: 5, enemy: 'scout' },
      { t: 6, enemy: 'grabber' }, { t: 7.5, enemy: 'spark' }, { t: 9, enemy: 'scout' },
    ],
  },
];
