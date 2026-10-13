import type { WaveDef } from '../core/types';

// Сектор 2 «Кухня»: «Сбор урожая». Новые враги: щитоносец и бомбардир.
export const SECTOR2: WaveDef[] = [
  {
    name: 'Разведка боем',
    hint: 'Мара: Хор перешёл от разведки к сбору. Не дай им зацепиться за груз.',
    spawns: [0, 1, 2, 3, 4, 5].map((t) => ({ t, enemy: 'scout' })),
  },
  {
    name: 'Хваталки',
    hint: 'Мара: две хваталки сразу. Руки — их слабое место.',
    spawns: [
      { t: 0, enemy: 'grabber' }, { t: 1.5, enemy: 'grabber' }, { t: 3, enemy: 'scout' }, { t: 4, enemy: 'scout' },
    ],
  },
  {
    name: 'Щиты',
    hint: 'Мара: щитоносец! Зенитка в лоб его не берёт — разбей щит или пусти ракету.',
    spawns: [
      { t: 0, enemy: 'shield' }, { t: 1, enemy: 'spark' }, { t: 2, enemy: 'spark' }, { t: 4, enemy: 'shield' }, { t: 5, enemy: 'spark' },
    ],
  },
  {
    name: 'Перекрёстный огонь',
    hint: 'Мара: два стрелка. Сгустки сбиваются — следи за красными стрелками.',
    spawns: [
      { t: 0, enemy: 'shooter' }, { t: 2, enemy: 'shooter' }, { t: 4, enemy: 'scout' }, { t: 5, enemy: 'scout' },
    ],
  },
  {
    name: 'Бомбардиры',
    hint: 'Мара: бомбардир сбрасывает мины на груз. Мины сбиваются в воздухе!',
    spawns: [
      { t: 0, enemy: 'bomber' }, { t: 3, enemy: 'scout' }, { t: 4, enemy: 'scout' }, { t: 6, enemy: 'bomber' },
    ],
  },
  {
    name: 'Сбор урожая',
    hint: 'Мара: они идут за всем сразу.',
    spawns: [
      { t: 0, enemy: 'grabber' }, { t: 1, enemy: 'scout' }, { t: 2, enemy: 'scout' }, { t: 3, enemy: 'grabber' },
      { t: 4, enemy: 'spark' }, { t: 5, enemy: 'spark' }, { t: 6, enemy: 'scout' },
    ],
  },
  {
    name: 'Огневой вал',
    hint: 'Мара: стрелки прикрывают воров. Сначала воры — груз важнее.',
    spawns: [
      { t: 0, enemy: 'shooter' }, { t: 1, enemy: 'grabber' }, { t: 2, enemy: 'scout' }, { t: 3, enemy: 'spark' },
      { t: 4, enemy: 'shooter' }, { t: 5, enemy: 'scout' }, { t: 6, enemy: 'spark' },
    ],
  },
  {
    name: 'Последний сбор',
    hint: 'Мара: финальная волна сектора. Держись!',
    spawns: [
      { t: 0, enemy: 'grabber' }, { t: 0.5, enemy: 'shooter' }, { t: 1.5, enemy: 'shield' }, { t: 2.5, enemy: 'scout' },
      { t: 3.5, enemy: 'bomber' }, { t: 4.5, enemy: 'spark' }, { t: 5.5, enemy: 'scout' }, { t: 6.5, enemy: 'shooter' },
      { t: 7.5, enemy: 'spark' }, { t: 8.5, enemy: 'grabber' },
    ],
  },
];
