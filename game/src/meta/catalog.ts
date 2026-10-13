import type { WaveDef } from '../core/types';
import { SECTOR1 } from '../data/sector1';
import { SECTOR2 } from '../data/sector2';

export interface SectorDef {
  id: number;
  name: string;
  title: string;
  boss: boolean;
  /** null — сектор ещё в разработке */
  waves: WaveDef[] | null;
  briefing: string;
  recommend?: string;
}

export const SECTORS: SectorDef[] = [
  {
    id: 1, name: 'Гостиная', title: 'Первый Разлом', boss: false, waves: SECTOR1,
    briefing: 'Разлом открылся у тебя дома. Это разведчики Хора — мелкие, но цепкие. Расставь груз перед собой и не дай утащить его в порталы.',
  },
  {
    id: 2, name: 'Кухня', title: 'Сбор урожая', boss: false, waves: SECTOR2,
    briefing: 'Хор перешёл от разведки к сбору. Хваталки поднимают груз манипулятором — отстрели руку, и груз упадёт целым. Стрелков бей первыми, пока не разбили стекло.',
    recommend: 'rockets',
  },
  { id: 3, name: 'Спальня', title: 'Тишина', boss: true, waves: null, briefing: '' },
  { id: 4, name: 'Подвал', title: 'Глубокий Разлом', boss: true, waves: null, briefing: '' },
  { id: 5, name: 'Орбита', title: 'Ядро', boss: true, waves: null, briefing: '' },
];

export interface WeaponDef {
  id: string;
  name: string;
  icon: string;
  price: number;
  /** доступно в бою (остальное — «скоро») */
  ready: boolean;
  unlockSector?: number;
  desc: string;
  best: string;
}

export const WEAPONS: WeaponDef[] = [
  { id: 'flak', name: 'Зенитка', icon: '⁂', price: 0, ready: true, desc: 'Спаренная автоматическая пушка. Держи «ОГОНЬ» — очередь; перегревается.', best: 'лёгкие цели, сгустки' },
  { id: 'rockets', name: 'Ракеты «Копьё»', icon: 'R', price: 250, ready: true, desc: 'Держи кнопку ракет и прицел на цели 0,6 с — захват. Отпусти — самонаводящаяся ракета, урон по площади.', best: 'хваталки, стрелки, группы' },
  { id: 'emp', name: 'ЭМИ-импульс', icon: '◎', price: 300, ready: true, desc: 'Оглушает всех врагов в поле зрения и сбивает сгустки.', best: 'рой, стрелки' },
  { id: 'laser', name: 'Лазер «Луч»', icon: '≈', price: 400, ready: false, desc: 'Непрерывный луч режет броню одной цели.', best: 'броня, тяжёлые' },
  { id: 'tesla', name: 'Молния «Тесла»', icon: 'ϟ', price: 450, ready: false, desc: 'Разряд перескакивает между 3–6 врагами.', best: 'рой, мелочь' },
  { id: 'drone', name: 'Дрон «Оса»', icon: '✦', price: 500, ready: false, unlockSector: 3, desc: 'Помощник сам стреляет и ловит воров.', best: 'отвлечение' },
];

export interface UpgradeDef {
  key: string;
  group: 'flak' | 'hull' | 'weap';
  /** улучшение доступно, только если оружие куплено */
  requires?: string;
  name: string;
  /** значение на уровнях 0..max */
  values: number[];
  costs: number[];
  fmt: (v: number) => string;
}

export const UPGRADES: UpgradeDef[] = [
  { key: 'flak.damage', group: 'flak', name: 'Урон', values: [8, 10, 12, 14, 16, 18], costs: [120, 200, 320, 480, 700], fmt: (v) => `${v} за попадание` },
  { key: 'flak.rate', group: 'flak', name: 'Скорострельность', values: [9, 10.5, 12, 13.5, 15, 16.5], costs: [90, 160, 260, 400, 600], fmt: (v) => `${v} выстр/с` },
  { key: 'flak.cooling', group: 'flak', name: 'Охлаждение', values: [20, 25, 30, 36, 42, 50], costs: [60, 120, 200, 320, 480], fmt: (v) => `${v} ед/с` },
  { key: 'flak.spread', group: 'flak', name: 'Кучность', values: [0.012, 0.01, 0.0085, 0.007, 0.006, 0.005], costs: [50, 100, 180, 280, 420], fmt: (v) => `разброс ${(v * 57.3).toFixed(2)}°` },
  { key: 'rockets.ammo', group: 'weap', requires: 'rockets', name: 'Ракеты: боезапас', values: [4, 5, 6, 7, 8, 10], costs: [120, 200, 320, 480, 700], fmt: (v) => `${v} за бой` },
  { key: 'emp.cooldown', group: 'weap', requires: 'emp', name: 'ЭМИ: перезарядка', values: [18, 15, 13, 11, 9, 7], costs: [120, 200, 320, 480, 700], fmt: (v) => `${v} с` },
  { key: 'hull.armor', group: 'hull', name: 'Броня стекла', values: [100, 115, 130, 145, 160, 180], costs: [100, 180, 300, 460, 680], fmt: (v) => `корпус ${v}` },
];

export interface BeastDef { n: number; name: string; cls: 'L' | 'M' | 'H' | 'B'; enemyId?: string; desc: string; weak: string }

export const BESTIARY: BeastDef[] = [
  { n: 1, name: 'Жук-скаут', cls: 'L', enemyId: 'scout', desc: 'Летит к ближайшему грузу, хватает и уносит в портал.', weak: 'Крылья: сбей одно — замедлится, оба — упадёт.' },
  { n: 2, name: 'Искра', cls: 'L', enemyId: 'spark', desc: 'Дрон-камикадзе: летит прямо в стекло и взрывается.', weak: 'Хвостовой стабилизатор — без него падает.' },
  { n: 3, name: 'Паук-крадун', cls: 'L', desc: 'Ползёт по полу, ворует и убегает.', weak: 'Тонкие ноги.' },
  { n: 4, name: 'Мотылёк', cls: 'L', desc: 'Зигзагом подсвечивает цели для других.', weak: 'Хрупкий корпус.' },
  { n: 5, name: 'Болтун', cls: 'L', desc: 'Катится шаром и толкает груз.', weak: 'Уязвим сверху.' },
  { n: 6, name: 'Клещ', cls: 'L', desc: 'Прыгает и прилипает к грузу.', weak: 'Медленный на земле.' },
  { n: 7, name: 'Охотник', cls: 'M', desc: 'Двуногий шагоход, тащит груз пешком.', weak: 'Голова-сенсор.' },
  { n: 8, name: 'Хваталка', cls: 'M', enemyId: 'grabber', desc: 'Подлетает к грузу и поднимает его манипулятором. Медленная, но крепкая.', weak: 'Рука — груз упадёт целым. Глаз-сенсор — двойной урон.' },
  { n: 9, name: 'Стрелок', cls: 'M', enemyId: 'shooter', desc: 'Висит перед тобой и стреляет сгустками в стекло.', weak: 'Пушка — без неё идёт на таран. Сгустки можно сбить.' },
  { n: 10, name: 'Щитоносец', cls: 'M', desc: 'Закрыт фронтальным щитом.', weak: 'Ракеты, удар сбоку.' },
  { n: 11, name: 'Бомбардир', cls: 'M', desc: 'Сбрасывает мины на пол у груза.', weak: 'Брюхо с минами.' },
  { n: 12, name: 'Глушитель', cls: 'M', desc: 'Импульсом отключает доп. оружие.', weak: 'Излучатель.' },
  { n: 13, name: 'Ремонтник', cls: 'M', desc: 'Чинит союзников лучом.', weak: 'Сбивать первым.' },
  { n: 14, name: 'Прыгун', cls: 'M', desc: 'Телепортируется рядом с целью.', weak: 'Мерцает перед прыжком.' },
  { n: 15, name: 'Танк-краб', cls: 'H', desc: 'Тяжёлая броня, клешнями хватает два груза.', weak: 'Пластины сзади.' },
  { n: 16, name: 'Гарпунщик', cls: 'H', desc: 'Тащит груз гарпуном издалека.', weak: 'Трос гарпуна.' },
  { n: 17, name: 'Рой-матка', cls: 'H', desc: 'Выпускает жуков каждые 6 секунд.', weak: 'Убить до вылупления.' },
  { n: 18, name: 'Сапёр', cls: 'H', desc: 'Огромный заряд; взрыв сносит часть стекла.', weak: 'Бей издалека.' },
  { n: 19, name: 'Кислотник', cls: 'H', desc: 'Плюёт кислотой в стекло — пятна мешают видеть.', weak: 'Звук перед плевком.' },
  { n: 20, name: 'Призрак', cls: 'H', desc: 'Невидим, только мерцает.', weak: 'ЭМИ снимает невидимость.' },
  { n: 21, name: 'Левиафан', cls: 'H', desc: 'Гигантский ходок из пола, трясёт экран.', weak: 'Лапы.' },
  { n: 22, name: 'Жнец', cls: 'B', desc: 'Корабль-тягач, босс подвала.', weak: 'Трюм, двигатели, орудия.' },
  { n: 23, name: 'Сборщик', cls: 'B', desc: 'Невидимый босс спальни.', weak: 'Выдаёт себя при выстреле.' },
  { n: 24, name: 'Хор-Ядро', cls: 'B', desc: 'Финальный босс.', weak: 'Узлы вокруг тебя.' },
];
