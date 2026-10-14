import type { WaveDef } from '../core/types';

// Сектор 3 «Спальня»: «Тишина». Ночь, невидимки и помехи. Босс — Сборщик.
export const SECTOR3: WaveDef[] = [
  {
    name: 'Сумерки',
    hint: 'Мара: ночью Хор тише. Прыгун мерцает перед скачком — лови момент.',
    spawns: [{ t: 0, enemy: 'scout' }, { t: 1, enemy: 'jumper' }, { t: 3, enemy: 'scout' }, { t: 4.5, enemy: 'jumper' }],
  },
  {
    name: 'Помехи',
    hint: 'Мара: глушитель! Его импульс отключает ракеты и ЭМИ. Сбивай антенну.',
    spawns: [{ t: 0, enemy: 'jammer' }, { t: 1.5, enemy: 'shooter' }, { t: 3, enemy: 'scout' }, { t: 4, enemy: 'scout' }],
  },
  {
    name: 'Ремонт',
    hint: 'Мара: ремонтник чинит своих. Его — первым, иначе всё зря.',
    spawns: [{ t: 0, enemy: 'shield' }, { t: 1, enemy: 'repair' }, { t: 2.5, enemy: 'grabber' }, { t: 4, enemy: 'spark' }],
  },
  {
    name: 'Скачки',
    hint: 'Мара: три прыгуна. Они уходят рывками — не жди, пока доберутся до груза.',
    spawns: [{ t: 0, enemy: 'jumper' }, { t: 1.2, enemy: 'jumper' }, { t: 2.4, enemy: 'jumper' }, { t: 4, enemy: 'scout' }, { t: 5, enemy: 'scout' }],
  },
  {
    name: 'Призраки',
    hint: 'Мара: призрак невидим, только дрожит воздух. ЭМИ его проявит — или жди, пока сам покажется.',
    spawns: [{ t: 0, enemy: 'ghost' }, { t: 2, enemy: 'scout' }, { t: 3, enemy: 'scout' }, { t: 5, enemy: 'ghost' }],
  },
  {
    name: 'Признание',
    hint: 'Мара: …я должна сказать. Я была частью Хора. Сбежала, когда поняла, что они «собирают» людей.',
    spawns: [
      { t: 0, enemy: 'jammer' }, { t: 1, enemy: 'ghost' }, { t: 2, enemy: 'repair' }, { t: 3, enemy: 'grabber' }, { t: 4.5, enemy: 'jumper' },
    ],
  },
  {
    name: 'Глухая ночь',
    hint: 'Мара: я знаю их тактику изнутри. Сейчас пойдут все сразу.',
    spawns: [
      { t: 0, enemy: 'shooter' }, { t: 1, enemy: 'jumper' }, { t: 2, enemy: 'ghost' }, { t: 3, enemy: 'jammer' },
      { t: 4, enemy: 'spark' }, { t: 5, enemy: 'repair' }, { t: 6, enemy: 'shield' }, { t: 7, enemy: 'scout' },
    ],
  },
  {
    name: 'Сборщик',
    hint: 'Мара: Сборщик. Невидим, но выдаёт себя, когда стреляет. Генератор сверху — его слабость.',
    spawns: [{ t: 0, enemy: 'collector' }, { t: 3, enemy: 'scout' }, { t: 5, enemy: 'scout' }],
  },
];
