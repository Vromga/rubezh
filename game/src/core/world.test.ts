import { describe, expect, it } from 'vitest';
import { ENEMIES } from '../data/enemies';
import { SECTOR1 } from '../data/sector1';
import { SECTOR2 } from '../data/sector2';
import { SECTOR3 } from '../data/sector3';
import { SECTOR4 } from '../data/sector4';
import { SECTOR5 } from '../data/sector5';
import { CORE } from './finale';
import { HARPOON, REAPER } from './heavy';
import { pickPortalPos, type PortalZone } from './portals';
import { makeRng } from './rng';
import { BLINK, COLLECTOR, FLAK, JAM, PORTAL, World } from './world';
import { v3, type V3 } from './vec';

const CAM = v3(0, 1.4, 0);
const ZONE: PortalZone = { center: CAM, yaw: 0, rMin: 3.5, rMax: 3.5 };
/** Как в игре: порталы в 7–9 м. */
const FAR: PortalZone = { center: CAM, yaw: 0, rMin: 7, rMax: 9 };

function make(opts: Partial<{ cargo: V3[]; waves: typeof SECTOR1; zone: PortalZone; weapons: ConstructorParameters<typeof World>[0]['weapons'] }> = {}): World {
  return new World({
    seed: 7, floorY: 0, player: CAM, zone: opts.zone ?? ZONE,
    cargo: opts.cargo ?? [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8)],
    waves: opts.waves ?? SECTOR1, enemyDefs: ENEMIES, weapons: opts.weapons,
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
  it('порталы только в секторе 60° перед игроком, на разной высоте', () => {
    const rng = makeRng(5);
    const heights = new Set<number>();
    for (const yaw of [0, 1, -2.5]) {
      for (let i = 0; i < 20; i++) {
        const q = pickPortalPos({ center: CAM, yaw, rMin: 9, rMax: 12 }, 0, rng);
        const a = Math.atan2(q.x - CAM.x, q.z - CAM.z);
        let d = a - yaw;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        expect(Math.abs(d)).toBeLessThanOrEqual(Math.PI / 6 + 1e-6);
        const r = Math.hypot(q.x - CAM.x, q.z - CAM.z);
        expect(r).toBeGreaterThanOrEqual(9 - 1e-6);
        expect(r).toBeLessThanOrEqual(12 + 1e-6);
        expect(q.y).toBeGreaterThanOrEqual(0.4);
        expect(q.y).toBeLessThanOrEqual(2.7);
        heights.add(Math.round(q.y * 2));
      }
    }
    expect(heights.size).toBeGreaterThan(3);
  });

  it('до волны порталов нет; портал открывается заранее, враг вылезает, портал закрывается', () => {
    const w = make();
    expect(w.portals).toHaveLength(0);
    let opened = -1;
    let spawnedAt = -1;
    let openedAt = -1;
    let closedAt = -1;
    run(w, 30, () => null, () => {
      for (const ev of w.drain()) {
        if (ev.type === 'portalOpen' && ev.kind === 'in' && opened < 0) { opened = ev.id; openedAt = w.time; }
        if (ev.type === 'portalClose' && ev.id === opened) closedAt = w.time;
      }
      if (spawnedAt < 0 && w.enemies.some((e) => e.portal === opened)) spawnedAt = w.time;
      return closedAt > 0;
    });
    expect(openedAt).toBeGreaterThan(0);
    expect(spawnedAt - openedAt).toBeGreaterThanOrEqual(PORTAL.lead - 0.05);
    expect(closedAt).toBeGreaterThan(spawnedAt);
  });

  it('вор с грузом открывает красный портал ухода, влетает — портал закрывается', () => {
    const w = make({ cargo: [v3(1, 0, 1.5)] });
    w.spawn('scout', 0);
    const kinds: string[] = [];
    run(w, 40, () => null, () => {
      for (const ev of w.drain()) if (ev.type === 'portalOpen' || ev.type === 'portalClose') kinds.push(`${ev.type}:${ev.kind}`);
      return w.result !== null;
    });
    expect(kinds).toContain('portalOpen:out');
    expect(kinds.indexOf('portalClose:out')).toBeGreaterThan(kinds.indexOf('portalOpen:out'));
    expect(w.stats.cargoLost).toBe(1);
  });

  it('сбитый беглец — портал ухода схлопывается', () => {
    const w = make({ cargo: [v3(1, 0, 1.5)] });
    const e = w.spawn('scout', 0);
    e.state = 'flee';
    e.pos = v3(0, 1.4, 3);
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    const exit = w.portals.find((p) => p.kind === 'out')!;
    expect(exit).toBeDefined();
    e.hp = 1;
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(e.pos.x, e.pos.y - 1.4, e.pos.z) });
    expect(e.dead).toBe(true);
    w.update(0.01, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(exit.state).toBe('closing');
    run(w, 1);
    expect(w.portals.some((p) => p.id === exit.id)).toBe(false);
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
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)], zone: FAR });
    run(w, 600, (x) => {
      const t = x.enemies.find((e) => e.state !== 'emerge');
      return t ? v3(t.pos.x, t.pos.y, t.pos.z) : null;
    }, () => w.result !== null);
    expect(w.result).toBe('win');
    expect(w.waveIdx).toBe(SECTOR1.length - 1);
  });

  it('сектор 2 проходим при точной стрельбе (мины и щиты учтены)', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)], waves: SECTOR2, zone: FAR });
    run(w, 900, (x) => {
      const m = x.mines[0];
      if (m) return v3(m.pos.x, m.pos.y, m.pos.z);
      const t = x.enemies.find((e) => e.state !== 'emerge');
      return t ? v3(t.pos.x, t.pos.y, t.pos.z) : null;
    }, () => w.result !== null);
    expect(w.result).toBe('win');
  });

  it('сектор 3 с боссом проходим при точной стрельбе', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)], waves: SECTOR3, zone: FAR });
    run(w, 1500, (x) => {
      const m = x.mines[0];
      if (m) return v3(m.pos.x, m.pos.y, m.pos.z);
      const b = x.bolts[0];
      if (b) return v3(b.pos.x, b.pos.y, b.pos.z);
      // как игрок: сначала ремонтник и глушитель, потом воры, остальное
      const order = ['repair', 'jammer'];
      const vis = x.enemies.filter((e) => e.state !== 'emerge' && x.targetable(e));
      const t = vis.find((e) => order.includes(e.def.id)) ?? vis.find((e) => e.cargoId !== null) ?? vis[0];
      return t ? v3(t.pos.x, t.pos.y, t.pos.z) : null;
    }, () => w.result !== null);
    expect(w.result).toBe('win');
    expect(w.killsBy.collector).toBe(1);
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
      seed: 1, floorY: 0, player: CAM, zone: ZONE, cargo: [v3(1, 0, 1)],
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
    seed: 1, floorY: 0, player: CAM, zone: ZONE, cargo: [v3(1, 0, 1)],
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
      seed: 1, floorY: 0, player: CAM, zone: ZONE, cargo: [v3(1, 0, 1)],
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

describe('щитоносец', () => {
  it('щит держит зенитку, ракета пробивает', () => {
    const w = new World({
      seed: 1, floorY: 0, player: CAM, zone: ZONE, cargo: [v3(1, 0, 1)],
      waves: SECTOR1, enemyDefs: ENEMIES, weapons: { rockets: { ammo: 1 } },
    });
    const e = w.spawn('shield', 0);
    e.pos = v3(0, 1.4, 5);
    e.yaw = Math.PI;
    e.state = 'emerge';
    for (let i = 0; i < 10; i++) w.update(0.05, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(e.hp).toBe(e.def.hp);
    const sh = e.parts.find((p) => p.def.kind === 'shield')!;
    expect(sh.hp).toBeLessThan(120);
    for (let i = 0; i < 14; i++) w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), rocket: true });
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), rocket: false });
    for (let i = 0; i < 40 && w.rockets.length; i++) w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(e.hp).toBeLessThan(e.def.hp);
  });

  it('таран щитоносца бьёт сильнее искры', () => {
    const w = make();
    const e = w.spawn('shield', 0);
    e.state = 'attack';
    e.pos = v3(0, 1.4, 0.3);
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.player.hull).toBe(100 - 22);
  });
});

describe('бомбардир', () => {
  it('сбрасывает мину, мина у груза уничтожает его', () => {
    const w = make({ cargo: [v3(1, 0, 2), v3(-1.5, 0, 2)] });
    const e = w.spawn('bomber', 0);
    e.pos = v3(1, 1.6, 2);
    e.state = 'bomb';
    e.fireCd = 0.05;
    let dropped = false;
    for (let i = 0; i < 60; i++) {
      w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
      if (w.drain().some((x) => x.type === 'mineDropped')) dropped = true;
      if (w.cargo[0].state === 'lost') break;
    }
    expect(dropped).toBe(true);
    expect(w.cargo[0].state).toBe('lost');
    expect(w.cargo[1].state).toBe('idle');
  });

  it('мину можно сбить в воздухе', () => {
    const w = make();
    w.mines.push({ id: 5, pos: v3(0, 1.4, 3), vy: 0 });
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.mines).toHaveLength(0);
  });
});

describe('баланс зенитки', () => {
  it('скаут умирает не более чем за 4 попадания', () => {
    expect(Math.ceil(ENEMIES.scout.hp / FLAK.damage)).toBeLessThanOrEqual(4);
  });
});

describe('сектор 3', () => {
  it('глушитель отключает ракеты и ЭМИ', () => {
    const w = make({ weapons: { rockets: { ammo: 4 }, emp: { cooldown: 10 } } });
    const e = w.spawn('jammer', 0);
    e.state = 'jam';
    e.fireCd = 0.01;
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.jam).toBeGreaterThan(0);
    expect(w.drain().some((x) => x.type === 'jam')).toBe(true);
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: true });
    expect(w.empState!.cd).toBe(0);
    run(w, JAM.time + 0.2);
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: false });
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: true });
    expect(w.empState!.cd).toBeGreaterThan(0);
  });

  it('ремонтник чинит побитого союзника', () => {
    const w = make();
    const g = w.spawn('grabber', 0);
    g.state = 'orbit';
    g.def = { ...g.def, speed: 0 };
    g.pos = v3(0, 1.4, 4);
    g.hp = 20;
    const r = w.spawn('repair', 0);
    r.state = 'repair';
    r.pos = v3(0, 2.2, 4);
    run(w, 2);
    expect(g.hp).toBeGreaterThan(30);
    expect(r.beamTo).toBe(g.id);
  });

  it('прыгун телепортируется к грузу', () => {
    const w = make({ cargo: [v3(0, 0, 1)] });
    const j = w.spawn('jumper', 0);
    j.state = 'seek';
    j.pos = v3(0, 1.4, 6);
    j.blinkCd = 0.01;
    w.update(0.02, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.drain().some((x) => x.type === 'blink')).toBe(true);
    expect(j.pos.z).toBeLessThan(6 - BLINK.dist + 0.2);
  });

  it('невидимого призрака нельзя выбрать прицелом, ЭМИ его проявляет', () => {
    const w = make({ weapons: { emp: { cooldown: 10 } } });
    const g = w.spawn('ghost', 0);
    g.state = 'seek';
    g.def = { ...g.def, speed: 0 };
    g.pos = v3(0, 1.4, 4);
    run(w, 1.5);
    expect(g.cloak).toBeGreaterThan(0.6);
    expect(w.pick(CAM, v3(0, 0, 1))?.enemy ?? null).toBeNull();
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1), emp: true });
    run(w, 1);
    expect(g.cloak).toBeLessThan(0.6);
    expect(w.pick(CAM, v3(0, 0, 1))?.enemy?.id).toBe(g.id);
  });

  it('разбитый генератор лишает невидимости навсегда', () => {
    const w = make();
    const g = w.spawn('ghost', 0);
    g.state = 'seek';
    g.def = { ...g.def, speed: 0 };
    g.pos = v3(0, 1.4, 4);
    const veil = g.parts.find((p) => p.def.id === 'veil')!;
    veil.hp = 1;
    const at = w.partWorld(g, veil);
    // генератор сверху: целимся чуть выше него
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(at.x, at.y + 0.12 - 1.4, at.z) });
    expect(g.noCloak).toBe(true);
    run(w, 8);
    expect(g.cloak).toBe(0);
  });

  it('босс скрыт, проявляется для залпа и зовёт подмогу через порталы', () => {
    const w = make({ cargo: [v3(1, 0, 1.5)] });
    const b = w.spawn('collector', 0);
    b.state = 'boss';
    let fired = 0;
    let summoned = 0;
    let maxCloak = 0;
    let visibleAtFire = true;
    run(w, (COLLECTOR.hide + COLLECTOR.attack) * 2 + 4, () => null, () => {
      maxCloak = Math.max(maxCloak, b.cloak);
      for (const ev of w.drain()) {
        if (ev.type === 'boltFired') { fired++; if (b.cloak > 0.6) visibleAtFire = false; }
        if (ev.type === 'portalOpen' && ev.kind === 'in') summoned++;
      }
      return false;
    });
    expect(maxCloak).toBeGreaterThan(0.9);
    expect(fired).toBeGreaterThanOrEqual(2);
    expect(visibleAtFire).toBe(true);
    expect(summoned).toBeGreaterThanOrEqual(2);
  });
});

/** Бот «как игрок»: мины, тросы, сгустки, затем приоритетные цели. */
function smartAim(x: World): V3 | null {
  const m = x.mines[0];
  if (m) return m.pos;
  for (const th of x.tethers) {
    const ends = x.tetherEnds(th);
    if (ends) return v3((ends[0].x + ends[1].x) / 2, (ends[0].y + ends[1].y) / 2, (ends[0].z + ends[1].z) / 2);
  }
  const b = x.bolts[0];
  if (b) return b.pos;
  const vis = x.enemies.filter((e) => e.state !== 'emerge' && x.targetable(e));
  const pri = ['sapper', 'repair', 'jammer', 'leviathan', 'node'];
  const t = vis.find((e) => e.cargoId !== null) ?? vis.find((e) => pri.includes(e.def.id)) ?? vis[0];
  return t ? clone3(t.pos) : null;
}
const clone3 = (p: V3) => v3(p.x, p.y, p.z);

describe('сектор 4', () => {
  it('шагающий краб вылезает из портала в полу и ходит по полу', () => {
    const w = make({ cargo: [v3(1, 0, 1.5)] });
    const c = w.spawn('crab', 0);
    const portal = w.portals.find((p) => p.id === c.portal)!;
    expect(portal.floor).toBe(true);
    expect(portal.pos.y).toBeLessThan(0.1);
    run(w, 3);
    expect(c.pos.y).toBeCloseTo(c.def.walk!, 2);
  });

  it('гарпунщик тянет груз тросом; перебитый трос роняет груз', () => {
    const w = make({ cargo: [v3(0, 0, 2)] });
    const h = w.spawn('harpooner', 0);
    h.state = 'harpoon';
    h.pos = v3(0, 2.4, 5);
    h.fireCd = 0.01;
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.tethers).toHaveLength(1);
    expect(h.state).toBe('reel');
    const c = w.cargo[0];
    const z0 = c.pos.z;
    run(w, 1);
    expect(c.pos.z).toBeGreaterThan(z0);
    const th = w.tethers[0];
    th.hp = 1;
    const [a, b] = w.tetherEnds(th)!;
    const mid = v3((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(mid.x - CAM.x, mid.y - CAM.y, mid.z - CAM.z) });
    expect(w.tethers).toHaveLength(0);
    expect(c.state).toBe('falling');
    expect(HARPOON.reel).toBeGreaterThan(0);
  });

  it('рой-матка выпускает жуков, пока целы мешки', () => {
    const w = make();
    const hv = w.spawn('hive', 0);
    hv.state = 'hive';
    hv.fireCd = 0.01;
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.enemies.filter((e) => e.def.id === 'scout').length).toBe(3);
    for (const p of hv.parts) if (p.def.kind === 'sensor') p.alive = false;
    for (const e of w.enemies) if (e.def.id === 'scout') e.dead = true;
    hv.fireCd = 0.01;
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.enemies.filter((e) => e.def.id === 'scout').length).toBe(0);
  });

  it('сапёр взрывом задевает соседей', () => {
    const w = make();
    const sp = w.spawn('sapper', 0);
    sp.state = 'attack';
    sp.pos = v3(0, 1.4, 5);
    const n = w.spawn('scout', 0);
    n.state = 'seek';
    n.pos = v3(0.5, 1.4, 5);
    sp.hp = 1;
    w.update(0.01, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(sp.dead).toBe(true);
    expect(n.dead).toBe(true);
  });

  it('кислотный плевок бьёт по стеклу и оставляет пятно', () => {
    const w = make();
    w.bolts.push({ id: 99, pos: v3(0, 1.4, 0.3), vel: v3(0, 0, -1), life: 5, from: v3(0, 1.4, 3), acid: true });
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(w.player.hull).toBe(95);
    expect(w.drain().some((x) => x.type === 'acidHit')).toBe(true);
  });

  it('левиафан давит груз и трясёт экран; без ног рушится с наградой', () => {
    const w = make({ cargo: [v3(0, 0, 3), v3(-2, 0, -2)] });
    const lv = w.spawn('leviathan', 0);
    lv.state = 'stomp';
    lv.pos = v3(0, lv.def.walk!, 4);
    let shakes = 0;
    run(w, 8, () => null, () => { shakes += w.drain().filter((x) => x.type === 'shake').length; return w.cargo[0].state === 'lost'; });
    expect(w.cargo[0].state).toBe('lost');
    expect(shakes).toBeGreaterThan(0);
    for (const p of lv.parts) if (p.def.kind === 'engine') p.alive = false;
    run(w, 3, () => null, () => lv.dead);
    expect(lv.dead).toBe(true);
    expect(w.killsBy.leviathan).toBe(1);
  });

  it('Жнец во 2-й фазе тянет груз лучом в трюм', () => {
    // волна без врагов в ближайшее время: только Жнец
    const w = make({ cargo: [v3(0, 0, 2), v3(1, 0, 2)], waves: [{ name: 'тест', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const r = w.spawn('reaper', 0);
    r.state = 'reaper';
    r.hp = r.def.hp * 0.5;
    run(w, REAPER.tractor + 1);
    expect(w.tethers.some((t) => t.enemyId === r.id)).toBe(true);
    run(w, 30, () => null, () => w.stats.cargoLost > 0);
    expect(w.stats.cargoLost).toBeGreaterThan(0);
  });

  it('сектор 4 с Жнецом проходим при точной стрельбе', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)], waves: SECTOR4, zone: FAR });
    run(w, 1800, smartAim, () => w.result !== null);
    expect(w.result).toBe('win');
    expect(w.killsBy.reaper).toBe(1);
  });
});

describe('сектор 5', () => {
  it('мотылёк ускоряет остальных воров', () => {
    const w = make({ cargo: [v3(0, 0, 1)], waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const a = w.spawn('scout', 0); a.state = 'seek'; a.pos = v3(0, 1, 6);
    run(w, 1);
    const slow = 6 - a.pos.z;
    const w2 = make({ cargo: [v3(0, 0, 1)], waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const b = w2.spawn('scout', 0); b.state = 'seek'; b.pos = v3(0, 1, 6);
    const m = w2.spawn('moth', 0); m.state = 'seek'; m.pos = v3(3, 2, 8);
    run(w2, 1);
    expect(6 - b.pos.z).toBeGreaterThan(slow * 1.15);
  });

  it('болтун катит груз по полу', () => {
    const w = make({ cargo: [v3(0, 0, 2)], waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const r = w.spawn('roller', 0); r.state = 'seek'; r.pos = v3(0, r.def.walk!, 2.5);
    run(w, 3, () => null, () => w.cargo[0].state === 'carried');
    expect(w.cargo[0].state).toBe('carried');
    run(w, 1);
    expect(w.cargo[0].pos.y).toBe(0);
  });

  it('клещ прилипает и через 5 с исчезает с грузом; сбитый — груз цел', () => {
    const w = make({ cargo: [v3(0, 0, 2)], waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const t = w.spawn('tick', 0); t.state = 'carry'; t.cargoId = 1; w.cargo[0].state = 'carried';
    run(w, 5.5);
    expect(w.cargo[0].state).toBe('lost');
    const w2 = make({ cargo: [v3(0, 0, 2)], waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const t2 = w2.spawn('tick', 0); t2.state = 'carry'; t2.cargoId = 1; w2.cargo[0].state = 'carried';
    run(w2, 1);
    t2.hp = 1;
    w2.update(0.01, { firing: true, camPos: CAM, camDir: v3(t2.pos.x - CAM.x, t2.pos.y - CAM.y, t2.pos.z - CAM.z) });
    expect(t2.dead).toBe(true);
    run(w2, 2);
    expect(w2.cargo[0].state).toBe('idle');
  });

  it('Хор-Ядро неуязвимо, пока живы узлы; без узлов открывается', () => {
    const w = make({ waves: [{ name: 't', hint: '', spawns: [{ t: 999, enemy: 'scout' }] }] });
    const c = w.spawn('nexus', 0); c.state = 'core';
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    const nodes = w.enemies.filter((e) => e.owner === c.id);
    expect(nodes).toHaveLength(CORE.layers[0]);
    expect(c.shielded).toBe(true);
    const hp = c.hp;
    c.pos = v3(0, 1.4, 5);
    w.update(0.05, { firing: true, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(c.hp).toBe(hp);
    for (const n of nodes) n.dead = true;
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    w.update(0.05, { firing: false, camPos: CAM, camDir: v3(0, 0, 1) });
    expect(c.shielded).toBe(false);
    run(w, CORE.open + 0.5);
    expect(c.shielded).toBe(true);
    expect(w.enemies.filter((e) => e.owner === c.id && !e.dead)).toHaveLength(CORE.layers[1]);
  });

  it('сектор 5 с Хор-Ядром проходим при точной стрельбе', () => {
    const w = make({ cargo: [v3(1, 0, 1.5), v3(-1, 0, 1.5), v3(0, 0, -1.8), v3(1.5, 0, -1), v3(-1.5, 0, -1)], waves: SECTOR5, zone: FAR });
    run(w, 2400, smartAim, () => w.result !== null);
    expect(w.result).toBe('win');
    expect(w.killsBy.nexus).toBe(1);
  });
});
