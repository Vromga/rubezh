import type { WaveDef } from '../core/types';

// Сектор 4 «Подвал»: «Глубокий Разлом». Тяжёлая техника лезет из пола. Босс — Жнец.
export const SECTOR4: WaveDef[] = [
  {
    name: 'Спуск',
    hint: 'Мара: танк-краб лезет из пола. Панцирь спереди держит зенитку — ракету в него или бей по ногам, когда панцирь треснет.',
    spawns: [{ t: 0, enemy: 'crab' }, { t: 2, enemy: 'scout' }, { t: 3.5, enemy: 'scout' }],
  },
  {
    name: 'Гарпуны',
    hint: 'Мара: гарпунщик тянет груз тросом. Перебей трос очередью — груз упадёт.',
    spawns: [{ t: 0, enemy: 'harpooner' }, { t: 1.5, enemy: 'grabber' }, { t: 3, enemy: 'scout' }, { t: 4, enemy: 'scout' }],
  },
  {
    name: 'Улей',
    hint: 'Мара: рой-матка выпускает жуков. Мешки-инкубаторы снизу — лопни их, и выводок кончится.',
    spawns: [{ t: 0, enemy: 'hive' }, { t: 2, enemy: 'shooter' }, { t: 4, enemy: 'spark' }],
  },
  {
    name: 'Сапёры',
    hint: 'Мара: сапёр несёт огромный заряд. Сбей его издалека — взрыв заденет соседей.',
    spawns: [{ t: 0, enemy: 'sapper' }, { t: 1, enemy: 'spark' }, { t: 2, enemy: 'spark' }, { t: 3.5, enemy: 'sapper' }, { t: 5, enemy: 'shield' }],
  },
  {
    name: 'Кислота',
    hint: 'Мара: кислотник плюётся в стекло — пятна мешают видеть. Плевок можно сбить, а лучше рот.',
    spawns: [{ t: 0, enemy: 'spitter' }, { t: 1.5, enemy: 'jumper' }, { t: 3, enemy: 'scout' }, { t: 4.5, enemy: 'spitter' }],
  },
  {
    name: 'Шаги',
    hint: 'Мара: Левиафан! Он давит груз. Ноги — его слабость: без ног он рухнет.',
    spawns: [{ t: 0, enemy: 'leviathan' }, { t: 3, enemy: 'scout' }, { t: 5, enemy: 'scout' }],
  },
  {
    name: 'Тяжёлая смена',
    hint: 'Мара: все тяжёлые сразу. Сначала тросы и воры — груз важнее.',
    spawns: [
      { t: 0, enemy: 'crab' }, { t: 3, enemy: 'harpooner' }, { t: 7, enemy: 'spitter' }, { t: 10, enemy: 'sapper' },
      { t: 14, enemy: 'hive' },
    ],
  },
  {
    name: 'Жнец',
    hint: 'Мара: Жнец пробил потолок! Пушки, трюм и двигатели — бей по частям.',
    spawns: [{ t: 0, enemy: 'reaper' }, { t: 3, enemy: 'scout' }, { t: 5, enemy: 'spark' }],
  },
];
