import type { WeaponsOpt } from '../core/world';
import { SECTORS, UPGRADES, WEAPONS } from './catalog';

export interface Settings { cracks: number; lefty: boolean; vibration: boolean; volume: number; cockpit: boolean; lowfx: boolean }

export interface SaveData {
  v: 1;
  crystals: number;
  cores: number;
  /** лучший результат по секторам */
  sectors: Record<number, { stars: number; bestWave: number }>;
  unlocked: number;
  owned: string[];
  loadout: (string | null)[];
  upgrades: Record<string, number>;
  /** враги: сколько сбито; ключ — id врага */
  seen: Record<string, { kills: number; first: string }>;
  settings: Settings;
  /** выбор в финале: закрыть Разломы или забрать технологию */
  ending?: 'close' | 'take';
  /** ремкомплекты в запасе */
  kits: number;
}

const KEY = 'rubezh.save.v1';

export function defaultSave(): SaveData {
  return {
    v: 1, crystals: 0, cores: 0, sectors: {}, unlocked: 1, owned: ['flak'], loadout: [null, null], upgrades: {}, seen: {},
    settings: { cracks: 1, lefty: false, vibration: true, volume: 0.6, cockpit: true, lowfx: false },
    kits: 0,
  };
}

interface Store { getItem(k: string): string | null; setItem(k: string, v: string): void }

function storage(): Store | null {
  try { return window.localStorage; } catch { return null; }
}

export function loadSave(st: Store | null = storage()): SaveData {
  const d = defaultSave();
  if (!st) return d;
  try {
    const raw = st.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<SaveData>;
      return { ...d, ...p, settings: { ...d.settings, ...(p.settings ?? {}) } };
    }
    // перенос кристаллов из первой версии
    const old = Number(st.getItem('rubezh.crystals') ?? 0);
    if (old > 0) d.crystals = old;
  } catch { /* битое сохранение — начинаем заново */ }
  return d;
}

export function storeSave(s: SaveData, st: Store | null = storage()): void {
  try { st?.setItem(KEY, JSON.stringify(s)); } catch { /* нет места или запрещено */ }
}

export function level(s: SaveData, key: string): number { return s.upgrades[key] ?? 0; }

export function upgradeValue(s: SaveData, key: string): number {
  const u = UPGRADES.find((x) => x.key === key)!;
  return u.values[Math.min(level(s, key), u.values.length - 1)];
}

export function nextCost(s: SaveData, key: string): number | null {
  const u = UPGRADES.find((x) => x.key === key)!;
  const l = level(s, key);
  return l < u.costs.length ? u.costs[l] : null;
}

export function buyUpgrade(s: SaveData, key: string): boolean {
  const cost = nextCost(s, key);
  if (cost === null || s.crystals < cost) return false;
  s.crystals -= cost;
  s.upgrades[key] = level(s, key) + 1;
  return true;
}

export function buyWeapon(s: SaveData, id: string): boolean {
  const w = WEAPONS.find((x) => x.id === id);
  if (!w || s.owned.includes(id) || s.crystals < w.price) return false;
  if (w.unlockSector && s.unlocked < w.unlockSector) return false;
  s.crystals -= w.price;
  s.owned.push(id);
  const free = s.loadout.indexOf(null);
  if (free >= 0 && w.ready) s.loadout[free] = id;
  return true;
}

export function flakStats(s: SaveData) {
  return {
    damage: upgradeValue(s, 'flak.damage'),
    rate: upgradeValue(s, 'flak.rate'),
    cooling: upgradeValue(s, 'flak.cooling'),
    spread: upgradeValue(s, 'flak.spread'),
  };
}

/** Доп. оружие, взятое в бой: только купленное, готовое и стоящее в слотах. */
export function weaponOpts(s: SaveData): WeaponsOpt {
  const inSlots = (id: string) => s.loadout.includes(id) && s.owned.includes(id) && !!WEAPONS.find((w) => w.id === id && w.ready);
  return {
    ...(inSlots('rockets') ? { rockets: { ammo: upgradeValue(s, 'rockets.ammo') } } : {}),
    ...(inSlots('emp') ? { emp: { cooldown: upgradeValue(s, 'emp.cooldown') } } : {}),
    ...(inSlots('laser') ? { laser: { dps: upgradeValue(s, 'laser.power') } } : {}),
    ...(inSlots('tesla') ? { tesla: { links: upgradeValue(s, 'tesla.links') } } : {}),
    ...(inSlots('drone') ? { drone: { damage: upgradeValue(s, 'drone.damage') } } : {}),
  };
}

export function maxHull(s: SaveData): number { return upgradeValue(s, 'hull.armor'); }

export function computeStars(win: boolean, cargoSaved: number, cargoTotal: number, hullFrac: number): number {
  if (!win) return 0;
  return 1 + (cargoSaved >= cargoTotal ? 1 : 0) + (hullFrac >= 0.6 ? 1 : 0);
}

export interface BattleResult {
  sector: number; win: boolean; crystals: number; wavesDone: number; stars: number;
  kills: Record<string, number>; seen: string[];
}

/** Записать итоги боя; возвращает бонус за сектор и признак первого прохождения. */
export function applyBattle(s: SaveData, r: BattleResult): { bonus: number; firstWin: boolean } {
  const prev = s.sectors[r.sector];
  const firstWin = r.win && !(prev && prev.stars > 0);
  const bonus = r.win ? (firstWin ? 60 * r.sector : 15 * r.sector) : 0;
  s.crystals += r.crystals + bonus;
  s.sectors[r.sector] = {
    stars: Math.max(prev?.stars ?? 0, r.stars),
    bestWave: Math.max(prev?.bestWave ?? 0, r.wavesDone),
  };
  if (r.win) {
    const next = SECTORS.find((x) => x.id === r.sector + 1);
    if (next) s.unlocked = Math.max(s.unlocked, next.id);
  }
  for (const id of r.seen) s.seen[id] ??= { kills: 0, first: `Сектор ${r.sector}` };
  for (const [id, k] of Object.entries(r.kills)) {
    s.seen[id] ??= { kills: 0, first: `Сектор ${r.sector}` };
    s.seen[id].kills += k;
  }
  return { bonus, firstWin };
}

export const KIT = { price: 60, max: 3, heal: 35 };

export function buyKit(s: SaveData): boolean {
  if (s.kits >= KIT.max || s.crystals < KIT.price) return false;
  s.crystals -= KIT.price;
  s.kits++;
  return true;
}
