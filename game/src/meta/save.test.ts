import { describe, expect, it } from 'vitest';
import { applyBattle, buyUpgrade, buyWeapon, computeStars, defaultSave, flakStats, loadSave, maxHull, nextCost, storeSave, weaponOpts } from './save';

const mem = () => {
  const m = new Map<string, string>();
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) };
};

describe('сохранение', () => {
  it('сохраняется и загружается', () => {
    const st = mem();
    const s = defaultSave();
    s.crystals = 77;
    s.settings.lefty = true;
    storeSave(s, st);
    const l = loadSave(st);
    expect(l.crystals).toBe(77);
    expect(l.settings.lefty).toBe(true);
    expect(l.settings.volume).toBe(0.6);
  });

  it('переносит кристаллы из первой версии', () => {
    const st = mem();
    st.setItem('rubezh.crystals', '42');
    expect(loadSave(st).crystals).toBe(42);
  });

  it('битое сохранение не ломает игру', () => {
    const st = mem();
    st.setItem('rubezh.save.v1', '{oops');
    expect(loadSave(st).crystals).toBe(0);
  });
});

describe('экономика', () => {
  it('улучшение списывает кристаллы и меняет параметр', () => {
    const s = defaultSave();
    s.crystals = 1000;
    expect(flakStats(s).damage).toBe(8);
    expect(buyUpgrade(s, 'flak.damage')).toBe(true);
    expect(s.crystals).toBe(880);
    expect(flakStats(s).damage).toBe(10);
  });

  it('без кристаллов улучшить нельзя; на максимуме цены нет', () => {
    const s = defaultSave();
    expect(buyUpgrade(s, 'hull.armor')).toBe(false);
    s.crystals = 1e6;
    for (let i = 0; i < 5; i++) buyUpgrade(s, 'hull.armor');
    expect(nextCost(s, 'hull.armor')).toBeNull();
    expect(maxHull(s)).toBe(180);
    expect(buyUpgrade(s, 'hull.armor')).toBe(false);
  });

  it('покупка оружия: один раз, ставится в свободный слот если готово', () => {
    const s = defaultSave();
    s.crystals = 1000;
    expect(buyWeapon(s, 'rockets')).toBe(true);
    expect(buyWeapon(s, 'rockets')).toBe(false);
    expect(s.owned).toContain('rockets');
    expect(s.crystals).toBe(750);
  });

  it('купленные ракеты встают в слот и идут в бой с боезапасом из прокачки', () => {
    const s = defaultSave();
    s.crystals = 1000;
    expect(weaponOpts(s)).toEqual({});
    buyWeapon(s, 'rockets');
    expect(s.loadout[0]).toBe('rockets');
    expect(weaponOpts(s)).toEqual({ rockets: { ammo: 4 } });
    buyUpgrade(s, 'rockets.ammo');
    expect(weaponOpts(s).rockets!.ammo).toBe(5);
    s.loadout = [null, null];
    expect(weaponOpts(s)).toEqual({});
  });

  it('дрон закрыт до сектора 3', () => {
    const s = defaultSave();
    s.crystals = 1000;
    expect(buyWeapon(s, 'drone')).toBe(false);
  });
});

describe('итоги боя', () => {
  it('звёзды: победа, весь груз, корпус ≥60%', () => {
    expect(computeStars(false, 5, 5, 1)).toBe(0);
    expect(computeStars(true, 4, 5, 0.3)).toBe(1);
    expect(computeStars(true, 5, 5, 0.8)).toBe(3);
  });

  it('победа открывает следующий сектор и даёт бонус за первое прохождение', () => {
    const s = defaultSave();
    const r = applyBattle(s, { sector: 1, win: true, crystals: 30, wavesDone: 5, stars: 2, kills: { scout: 4 }, seen: ['scout', 'spark'] });
    expect(r.firstWin).toBe(true);
    expect(s.unlocked).toBe(2);
    expect(s.crystals).toBe(30 + 60);
    expect(s.seen.scout.kills).toBe(4);
    expect(s.seen.spark.kills).toBe(0);
    const r2 = applyBattle(s, { sector: 1, win: true, crystals: 0, wavesDone: 5, stars: 1, kills: {}, seen: [] });
    expect(r2.firstWin).toBe(false);
    expect(s.sectors[1].stars).toBe(2);
  });

  it('поражение сохраняет кристаллы за сбитых, но не открывает сектор', () => {
    const s = defaultSave();
    applyBattle(s, { sector: 1, win: false, crystals: 12, wavesDone: 2, stars: 0, kills: {}, seen: [] });
    expect(s.crystals).toBe(12);
    expect(s.unlocked).toBe(1);
  });
});
