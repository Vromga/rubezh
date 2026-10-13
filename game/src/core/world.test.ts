import { describe, expect, it } from 'vitest';
import { ENEMIES } from '../data/enemies';
import { SECTOR1 } from '../data/sector1';
import { makePortals } from './portals';
import { makeRng } from './rng';
import { FLAK, World } from './world';
import { v3, type V3 } from './vec';

const CAM = v3(0, 1.4, 0);

function make(opts: Partial<{ cargo: V3[]; waves: typeof SECTOR1 }> = {}): World {
  const portals = makePortals(CAM, 0, 3.5, 0, makeRng(1));
  return new World({
    seed: 7, floorY: 0, player: CAM, portals,
    cargo: opts.cargo ?? [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8)],
    waves: opts.waves ?? SECTOR1, enemyDefs: ENEMIES,
  });
}

/** Прокрутить мир, пока не выполнится условие. */
function run(w: World, seconds: number, aim: (w: World) => V3 | null = () => null, until?: () => boolean): void {
  const dt = 1 / 30;
  for (let t = 0; t < seconds; t += dt) {
    const target = aim(w);
    const dir = target ? v3(target.x - CAM.x, target.y - CAM.y, target.z - CAM.z) : v3(0, 0, 1);
    w.update(dt, { firing: target !== null, camPos: CAM, camDir: dir });
    if (until?.()) return;
  }
}

describe('порталы', () => {
  it('порталы только в секторе 60° перед игроком', () => {
    for (const yaw of [0, 1, -2.5]) {
      for (const q of makePortals(CAM, yaw, 3.5, 0, makeRng(5))) {
        const a = Math.atan2(q.x - CAM.x, q.z - CAM.z);
        let d = a - yaw;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        expect(Math.abs(d)).toBeLessThanOrEqual(Math.PI / 6 + 0.04);
      }
    }
  });

  it('создаёт 5 порталов на заданном радиусе', () => {
    const p = makePortals(CAM, 0, 3.5, 0, makeRng(3));
    expect(p).toHaveLength(5);
    for (const q of p) expect(Math.hypot(q.x, q.z)).toBeCloseTo(3.5, 5);
  });
});

describe('зенитка', () => {
  it('попадание по врагу уменьшает его здоровье и сообщает о попадании', () => {
    const w = make();
    const e = w.spawn('scout', 0);
    e.state = 'emerge';
    e.pos = v3(0, 1.4, 3);
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(e.hp).toBeLessThan(e.def.hp);
    expect(w.drain().some((x) => x.type === 'enemyHit')).toBe(true);
  });

  it('перегревается при длинной очереди и охлаждается', () => {
    const w = make();
    run(w, 5, () => v3(0, 5, 5));
    expect(w.weapon.overheated).toBe(true);
    run(w, 5);
    expect(w.weapon.overheated).toBe(false);
  });

  it('сбивает сгусток стрелка', () => {
    const w = make();
    w.bolts.push({ id: 99, pos: v3(0, 1.4, 2), vel: v3(0, 0, 3), life: 5, from: v3(0, 1.4, 3) });
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.bolts).toHaveLength(0);
    expect(w.player.hull).toBe(100);
  });
});

describe('повреждения врагов', () => {
  it('рука хваталки роняет груз, и хваталка уходит', () => {
    const w = make();
    const e = w.spawn('grabber', 0);
    const c = w.cargo[0];
    c.state = 'carried';
    c.pos = v3(0, 1, 3);
    e.cargoId = c.id;
    e.state = 'carry';
    e.pos = v3(0, 1.4, 3);
    const arm = e.parts.find((p) => p.def.id === 'arm')!;
    arm.hp = 1;
    // нацелились в точку руки
    const armPos = w.partWorld(e, arm);
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(armPos.x, armPos.y - 1.4, armPos.z) });
    expect(arm.alive).toBe(false);
    expect(c.state).toBe('falling');
    expect(e.state).toBe('flee');
  });

  it('потеря всех двигателей роняет врага без награды', () => {
    const w = make();
    const e = w.spawn('spark', 0);
    e.state = 'attack';
    e.pos = v3(0, 3, 3);
    e.parts.find((p) => p.def.id === 'fin')!.alive = false;
    run(w, 3, () => null, () => e.dead);
    expect(e.dead).toBe(true);
    expect(w.stats.crystals).toBe(0);
  });
});

describe('кража груза', () => {
  it('скаут берёт груз, уносит в портал, груз потерян', () => {
    const w = make({ cargo: [v3(1, 0, 1.5)] });
    w.spawn('scout', 0);
    run(w, 30, () => null, () => w.result !== null);
    expect(w.stats.cargoLost).toBe(1);
    expect(w.result).toBe('lose');
  });

  it('убитый с грузом вор роняет груз целым', () => {
    const w = make();
    const e = w.spawn('scout', 0);
    const c = w.cargo[0];
    c.state = 'carried';
    c.pos = v3(0, 1, 3);
    e.cargoId = c.id;
    e.state = 'carry';
    e.pos = v3(0, 1.4, 3);
    e.hp = 1;
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(e.dead).toBe(true);
    expect(c.state).toBe('falling');
    run(w, 2);
    expect(c.state).toBe('idle');
    expect(c.pos.y).toBe(0);
  });
});

describe('игрок', () => {
  it('искра при подлёте наносит урон и создаёт событие playerHit', () => {
    const w = make();
    const e = w.spawn('spark', 0);
    e.state = 'attack';
    e.pos = v3(0, 1.4, 0.3);
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.player.hull).toBeLessThan(100);
    expect(w.drain().some((x) => x.type === 'playerHit')).toBe(true);
  });

  it('при нулевом корпусе бой проигран', () => {
    const w = make();
    w.hurt(100, v3(1, 1, 1));
    expect(w.result).toBe('lose');
  });
});

describe('волны', () => {
  it('идеальная стрельба по всем врагам проходит сектор', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)] });
    run(w, 600, (x) => {
      const t = x.enemies.find((e) => e.state !== 'emerge');
      return t ? v3(t.pos.x, t.pos.y, t.pos.z) : null;
    }, () => w.result !== null);
    expect(w.result).toBe('win');
    expect(w.waveIdx).toBe(SECTOR1.length - 1);
  });

  it('без стрельбы игра проигрывается', () => {
    const w = make();
    run(w, 300, () => null, () => w.result !== null);
    expect(w.result).toBe('lose');
  });
});

describe('стрелок', () => {
  it('остаётся перед игроком и не заходит за спину', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, 2)] });
    const e = w.spawn('shooter', 0);
    e.state = 'orbit';
    for (let i = 0; i < 30 * 60; i++) {
      w.update(1 / 30, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
      if (w.result) break;
      expect(e.pos.z).toBeGreaterThan(0.5);
    }
  });
});

describe('скорость врагов', () => {
  it('скаут облетает комнату неспешно (< 1,2 м/с)', () => {
    expect(ENEMIES.scout.speed).toBeLessThan(1.2);
    expect(ENEMIES.spark.speed).toBeLessThan(1.4);
  });
});

describe('прицел', () => {
  it('pick видит врага на линии огня и не видит вне её', () => {
    const w = make();
    const e = w.spawn('scout', 0);
    e.pos = v3(0, 1.4, 6);
    expect(w.pick(CAM, v3(0, 0, 1))?.enemy).toBe(e);
    expect(w.pick(CAM, v3(1, 0, 0))).toBeNull();
  });
});

describe('прокачка', () => {
  it('параметры зенитки и корпуса берутся из опций', () => {
    const w = new World({
      seed: 1, floorY: 0, player: CAM, portals: makePortals(CAM, 0, 3.5, 0, makeRng(1)), cargo: [v3(1, 0, 1)],
      waves: SECTOR1, enemyDefs: ENEMIES, flak: { damage: 30 }, maxHull: 150,
    });
    expect(w.player.hull).toBe(150);
    const e = w.spawn('scout', 0);
    e.pos = v3(0, 1.4, 3);
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(e.dead).toBe(true);
    expect(w.killsBy.scout).toBe(1);
    expect(w.seen.has('scout')).toBe(true);
  });
});

describe('ракеты', () => {
  const mk = () => new World({
    seed: 1, floorY: 0, player: CAM, portals: makePortals(CAM, 0, 3.5, 0, makeRng(1)), cargo: [v3(1, 0, 1)],
    waves: SECTOR1, enemyDefs: ENEMIES, weapons: { rockets: { ammo: 2 } },
  });

  it('захват за 0,6 с, пуск при отпускании, попадание наносит урон', () => {
    const w = mk();
    const e = w.spawn('grabber', 0);
    e.pos = v3(0, 1.4, 5);
    const inp = (rocket: boolean) => ({ firing: false, camPos: CAM, camDir: v3(0, 0, 1), rocket });
    for (let i = 0; i < 10; i++) w.update(0.05, inp(true));
    expect(w.rocketState!.locked).toBe(false);
    for (let i = 0; i < 4; i++) w.update(0.05, inp(true));
    expect(w.rocketState!.locked).toBe(true);
    w.update(0.05, inp(false));
    expect(w.rockets).toHaveLength(1);
    expect(w.rocketState!.ammo).toBe(1);
    for (let i = 0; i < 60 && w.rockets.length; i++) w.update(0.05, inp(false));
    expect(w.rockets).toHaveLength(0);
    expect(e.hp).toBeLessThanOrEqual(e.def.hp - 45);
  });

  it('без захвата отпускание ничего не запускает', () => {
    const w = mk();
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), rocket: true });
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), rocket: false });
    expect(w.rockets).toHaveLength(0);
    expect(w.rocketState!.ammo).toBe(2);
  });
});

describe('ЭМИ', () => {
  it('оглушает врагов перед игроком, сбивает сгустки, уходит на перезарядку', () => {
    const w = new World({
      seed: 1, floorY: 0, player: CAM, portals: makePortals(CAM, 0, 3.5, 0, makeRng(1)), cargo: [v3(1, 0, 1)],
      waves: SECTOR1, enemyDefs: ENEMIES, weapons: { emp: { cooldown: 10 } },
    });
    const front = w.spawn('scout', 0); front.pos = v3(0, 1.4, 4); front.state = 'seek';
    const back = w.spawn('scout', 0); back.pos = v3(0, 1.4, -4); back.state = 'seek';
    w.bolts.push({ id: 99, pos: v3(0, 1.4, 2), vel: v3(0, 0, -1), life: 5, from: v3(0, 1.4, 3) });
    const before = { ...front.pos };
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: true });
    expect(front.stun).toBeGreaterThan(0);
    expect(back.stun).toBe(0);
    expect(w.bolts).toHaveLength(0);
    for (let i = 0; i < 20; i++) w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: true });
    expect(front.pos).toEqual(before);
    expect(w.empState!.cd).toBeGreaterThan(8);
  });
});

describe('баланс зенитки', () => {
  it('скаут умирает не более чем за 4 попадания', () => {
    expect(Math.ceil(ENEMIES.scout.hp / FLAK.damage)).toBeLessThanOrEqual(4);
  });
});
