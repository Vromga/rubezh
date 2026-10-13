import './style.css';
import * as THREE from 'three';
import { makePortals } from './core/portals';
import { makeRng } from './core/rng';
import type { GameEvent } from './core/types';
import { World } from './core/world';
import { v3, type V3 } from './core/vec';
import { ENEMIES } from './data/enemies';
import { SECTOR1 } from './data/sector1';
import { Sfx } from './audio/sfx';
import { buildCargo } from './render/meshes';
import { GunRig } from './render/guns';
import { Stage } from './render/stage';
import { CrackLayer } from './ui/cracks';
import { Hud, type Indicator } from './ui/hud';

const $ = (id: string) => document.getElementById(id)!;
const MIN_CARGO = 3, MAX_CARGO = 5;
const DEMO_EYE = 1.4;
/** ?fast=N — ускорение симуляции для автопроверки (по умолчанию 1). */
const FAST = Math.max(1, Math.min(10, Number(new URLSearchParams(location.search).get('fast')) || 1));

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.xr.enabled = true;
const scene = new THREE.Scene();
const demoCam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 60);
demoCam.position.set(0, DEMO_EYE, 0);

const ov = $('ov');
const hud = new Hud($('hud'));
const cracks = new CrackLayer($('cracks') as HTMLCanvasElement);
const sfx = new Sfx();

type Mode = 'ar' | 'demo';
type Phase = 'menu' | 'prep' | 'battle' | 'end';
let mode: Mode = 'demo';
let phase: Phase = 'menu';
let session: XRSession | null = null;
let hitSource: XRHitTestSource | null = null;
let world: World | null = null;
let stage: Stage | null = null;
const guns = new GunRig();
let last = 0;
let demoYaw = 0, demoPitch = 0;
let spaceDown = false;
let frames = 0, lastErr = '', hitCount = 0;
const DEBUG = new URLSearchParams(location.search).has('debug');
addEventListener('error', (e) => { lastErr = String(e.message); });
addEventListener('unhandledrejection', (e) => { lastErr = String(e.reason); });

// ───── подготовка комнаты (AR) ─────
const reticle = new THREE.Mesh(
  new THREE.RingGeometry(0.08, 0.11, 32).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x38e1ff }),
);
reticle.matrixAutoUpdate = false;
reticle.visible = false;
const prepLight = new THREE.HemisphereLight(0xffffff, 0x445066, 2.2);
const prepCargo: { pos: V3; obj: THREE.Group }[] = [];
let lastHit: V3 | null = null;
let prepShown = '';

function refreshPrep(): void {
  const key = `${prepCargo.length}|${reticle.visible || lastHit !== null}`;
  if (key === prepShown) return;
  prepShown = key;
  hud.showPrep({
    count: prepCargo.length, max: MAX_CARGO, min: MIN_CARGO, floorFound: lastHit !== null,
    onStart: () => startBattle(), onAuto: () => autoPlace(),
  });
}

function addPrepCargo(p: V3): void {
  if (prepCargo.length >= MAX_CARGO) return;
  const obj = buildCargo(prepCargo.length % 2 === 0 ? 'colonist' : 'crystal');
  obj.position.set(p.x, p.y, p.z);
  scene.add(obj);
  prepCargo.push({ pos: p, obj });
}

/** Пол «на глаз»: телефон держат примерно на 1,3 м выше пола. */
const EYE_ABOVE_FLOOR = 1.3;
function guessFloor(c: CamInfo, yawOffset: number): V3 | null {
  const dir = c.dir.clone();
  if (yawOffset !== 0) dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), yawOffset);
  if (dir.y > -0.15) return null;
  const t = (-EYE_ABOVE_FLOOR) / dir.y;
  if (t < 0.8 || t > 6) return null;
  return v3(c.pos.x + dir.x * t, c.pos.y - EYE_ABOVE_FLOOR, c.pos.z + dir.z * t);
}

function autoPlace(): void {
  if (!reticle.visible && !lastHit) {
    // пол не найден: ставим перед собой на предполагаемый уровень пола
    const c = getCam();
    const flat = new THREE.Vector3(c.dir.x, 0, c.dir.z).normalize();
    const need = Math.max(0, MIN_CARGO - prepCargo.length);
    for (let i = 0; i < need; i++) {
      const a = (i - (need - 1) / 2) * 0.6;
      const d = flat.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), a).multiplyScalar(1.8);
      addPrepCargo(v3(c.pos.x + d.x, c.pos.y - EYE_ABOVE_FLOOR, c.pos.z + d.z));
    }
    prepShown = '';
    return;
  }
  const base = reticle.visible ? v3(...new THREE.Vector3().setFromMatrixPosition(reticle.matrix).toArray() as [number, number, number]) : lastHit;
  if (!base) return;
  const need = Math.max(0, MIN_CARGO - prepCargo.length);
  for (let i = 0; i < need; i++) {
    const a = (i / Math.max(1, need)) * Math.PI * 2 + 0.5;
    addPrepCargo(v3(base.x + Math.cos(a) * 0.6, base.y, base.z + Math.sin(a) * 0.6));
  }
  prepShown = '';
}

// ───── камера ─────
interface CamInfo { pos: THREE.Vector3; dir: THREE.Vector3; view: THREE.Camera }

function getCam(): CamInfo {
  if (mode === 'ar' && renderer.xr.isPresenting) {
    const xc = renderer.xr.getCamera();
    const pos = new THREE.Vector3(), dir = new THREE.Vector3();
    xc.getWorldPosition(pos);
    xc.getWorldDirection(dir);
    return { pos, dir, view: xc.cameras[0] ?? xc };
  }
  demoCam.rotation.set(demoPitch, demoYaw, 0, 'YXZ');
  demoCam.updateMatrixWorld(true);
  const dir = new THREE.Vector3();
  demoCam.getWorldDirection(dir);
  return { pos: demoCam.position.clone(), dir, view: demoCam };
}

/** Экранные координаты точки мира: x,y в [-1..1]; behind — позади камеры. */
function toScreen(view: THREE.Camera, p: V3): { x: number; y: number; behind: boolean } {
  const vs = new THREE.Vector3(p.x, p.y, p.z).applyMatrix4(view.matrixWorldInverse);
  if (vs.z >= 0) return { x: vs.x, y: vs.y, behind: true };
  const n = vs.applyMatrix4(view.projectionMatrix);
  return { x: n.x, y: n.y, behind: false };
}

// ───── запуск ─────
async function startAR(): Promise<void> {
  sfx.unlock();
  try {
    session = await navigator.xr!.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay', 'local-floor'],
      domOverlay: { root: ov },
    } as XRSessionInit);
  } catch (e) {
    $('status').textContent = `Не удалось запустить AR: ${String(e)}`;
    return;
  }
  mode = 'ar';
  document.documentElement.classList.add('ar');
  document.body.style.background = 'transparent';
  document.documentElement.style.background = 'transparent';
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);
  $('menu').style.display = 'none';
  ov.classList.add('on');
  await renderer.xr.setSession(session);
  const ref = await session.requestReferenceSpace('viewer');
  hitSource = (await session.requestHitTestSource!({ space: ref, entityTypes: ['plane', 'point'] })) ?? null;
  session.addEventListener('end', () => location.reload());
  session.addEventListener('select', () => {
    if (phase !== 'prep') return;
    if (reticle.visible) {
      addPrepCargo(v3(...new THREE.Vector3().setFromMatrixPosition(reticle.matrix).toArray() as [number, number, number]));
    } else {
      const c = getCam();
      const p = guessFloor(c, 0);
      if (p) addPrepCargo(p);
    }
  });
  scene.add(reticle, prepLight);
  hud.showBattle(false);
  phase = 'prep';
  prepShown = '';
  refreshPrep();
}

function startDemo(): void {
  sfx.unlock();
  mode = 'demo';
  document.body.classList.add('demo');
  $('menu').style.display = 'none';
  document.body.appendChild(renderer.domElement);
  renderer.setSize(innerWidth, innerHeight);
  document.body.style.background = 'radial-gradient(ellipse at 50% 80%, #2b3a4d, #0a0e14 75%)';
  const grid = new THREE.GridHelper(12, 24, 0x38e1ff, 0x1c4a5c);
  scene.add(grid);
  ov.classList.add('on');
  const cv = renderer.domElement;
  let drag: { x: number; y: number } | null = null;
  cv.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY }; });
  addEventListener('pointerup', () => { drag = null; });
  addEventListener('pointermove', (e) => {
    if (!drag) return;
    demoYaw -= (e.clientX - drag.x) * 0.006;
    demoPitch = Math.max(-1.2, Math.min(1.2, demoPitch - (e.clientY - drag.y) * 0.006));
    drag = { x: e.clientX, y: e.clientY };
  });
  addEventListener('keydown', (e) => { if (e.code === 'Space') spaceDown = true; });
  addEventListener('keyup', (e) => { if (e.code === 'Space') spaceDown = false; });
  addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    demoCam.aspect = innerWidth / innerHeight;
    demoCam.updateProjectionMatrix();
  });
  const ring: [number, number][] = [[0, 2], [2, 0.6], [-2, 0.6], [1.3, -1.6], [-1.3, -1.6]];
  for (const [x, z] of ring) addPrepCargo(v3(x, 0, z));
  scene.add(prepLight);
  startBattle();
}

function startBattle(): void {
  const cam = getCam();
  const cargoPos = prepCargo.map((c) => c.pos);
  const floorY = cargoPos.reduce((s, p) => s + p.y, 0) / cargoPos.length;
  const maxR = Math.max(...cargoPos.map((p) => Math.hypot(p.x - cam.pos.x, p.z - cam.pos.z)));
  const radius = Math.min(12, Math.max(9, maxR + 6));
  const yaw0 = Math.atan2(cam.dir.x, cam.dir.z);
  const seed = Date.now() & 0xffff;
  const portals = makePortals(v3(cam.pos.x, cam.pos.y, cam.pos.z), yaw0, radius, floorY, makeRng(seed));
  world = new World({
    seed, floorY, player: v3(cam.pos.x, cam.pos.y, cam.pos.z), cargo: cargoPos, portals,
    waves: SECTOR1, enemyDefs: ENEMIES, front: yaw0,
  });
  for (const c of prepCargo) scene.remove(c.obj);
  prepCargo.length = 0;
  scene.remove(reticle, prepLight);
  stage = new Stage(world);
  scene.add(stage.root);
  scene.add(guns.group);
  cracks.reset();
  hud.hidePrep();
  hud.showBattle(true);
  phase = 'battle';
  hud.say('Мара: порталы открываются со всех сторон. Следи за стрелками по краям.', 6000);
}

// ───── события боя → интерфейс ─────
const transient: { id: string; pos: V3; ttl: number; danger: boolean }[] = [];
let ended = false;

function onEvents(events: GameEvent[], cam: CamInfo): void {
  const w = world!;
  for (const ev of events) {
    switch (ev.type) {
      case 'shot': {
        sfx.shot();
        stage!.fx.tracer(guns.fire(), new THREE.Vector3(ev.end.x, ev.end.y, ev.end.z));
        break;
      }
      case 'enemyHit': hud.hitMarker(ev.weak); sfx.hit(); break;
      case 'partDestroyed': sfx.partBreak(); break;
      case 'explosion': sfx.explosion(ev.size); break;
      case 'playerHit': {
        const power = Math.min(1, ev.dmg / 12);
        const s = toScreen(cam.view, ev.from);
        let nx = (s.x + 1) / 2, ny = (1 - s.y) / 2;
        if (s.behind) { nx = 0.15 + Math.random() * 0.7; ny = 0.85; }
        nx = Math.min(0.9, Math.max(0.1, nx + (Math.random() - 0.5) * 0.08));
        ny = Math.min(0.9, Math.max(0.12, ny + (Math.random() - 0.5) * 0.08));
        cracks.hit(nx, ny, power);
        cracks.setHull(ev.hull / 100);
        hud.damageFlash();
        sfx.glass(power);
        navigator.vibrate?.(power > 0.8 ? [60, 30, 90] : 40);
        if (ev.hull <= 0) cracks.shatter();
        break;
      }
      case 'boltFired':
        sfx.alarm();
        transient.push({ id: `b${Math.random()}`, pos: ev.from, ttl: 1.2, danger: true });
        break;
      case 'telegraph':
        sfx.alarm();
        transient.push({ id: `t${ev.enemyId}`, pos: ev.pos, ttl: 0.9, danger: true });
        break;
      case 'portalWarn':
        sfx.portal();
        transient.push({ id: `p${ev.portal}`, pos: w.portals[ev.portal], ttl: 2.5, danger: false });
        break;
      case 'cargoGrabbed': sfx.steal(); hud.say('Груз похищают! Сбей вора!', 2500); break;
      case 'cargoDropped': hud.say('Груз упал — цел.', 2000); break;
      case 'cargoLost': sfx.lost(); hud.say('Груз потерян!', 2500); break;
      case 'waveStart': hud.banner(`ВОЛНА ${ev.index + 1} — ${ev.name.toUpperCase()}`); break;
      case 'waveClear': hud.say('Волна отбита. Передышка.', 3000); break;
      case 'message': hud.say(ev.text, 6000); break;
      case 'overheat': sfx.overheat(); hud.say('Перегрев зенитки!', 1800); break;
      case 'end': finish(ev); break;
      default: break;
    }
  }
}

function finish(ev: Extract<GameEvent, { type: 'end' }>): void {
  if (ended) return;
  ended = true;
  const w = world!;
  const win = ev.result === 'win';
  if (win) sfx.win();
  try {
    const total = Number(localStorage.getItem('rubezh.crystals') ?? 0) + w.stats.crystals;
    localStorage.setItem('rubezh.crystals', String(total));
  } catch { /* хранилище может быть недоступно */ }
  setTimeout(() => {
    phase = 'end';
    hud.showBattle(false);
    hud.showEnd({
      win, reason: ev.reason, kills: w.stats.kills, crystals: w.stats.crystals,
      accuracy: w.stats.shots ? Math.round((w.stats.hits / w.stats.shots) * 100) : 0,
      cargoSaved: w.cargo.filter((c) => c.state !== 'lost').length, cargoTotal: w.stats.cargoTotal,
      hullLeft: Math.round(w.player.hull),
    }, () => (session ? void session.end() : location.reload()));
  }, win ? 800 : 3000);
}

// ───── главный цикл ─────
function diag(): void {
  const el = $('diag');
  if (mode !== 'ar' || (phase === 'battle' && !DEBUG && !lastErr)) { el.textContent = ''; return; }
  el.textContent = `AR кадров:${frames} hit:${hitCount} blend:${session?.environmentBlendMode ?? '-'} overlay:${session?.domOverlayState?.type ?? 'нет'}${lastErr ? ` ОШИБКА:${lastErr}` : ''}`;
}

renderer.setAnimationLoop((t, frame) => {
  if (frame) frames++;
  if (frames % 15 === 0) diag();
  const dt = Math.min(0.05, last ? (t - last) / 1000 : 0.016);
  last = t;

  if (phase === 'prep' && frame && hitSource) {
    const hits = frame.getHitTestResults(hitSource);
    if (hits.length) {
      hitCount++;
      const pose = hits[0].getPose(renderer.xr.getReferenceSpace()!);
      // пол: нормаль поверхности (ось Y позы) смотрит вверх; стены игнорируем
      if (pose && pose.transform.matrix[5] > 0.7) {
        reticle.visible = true;
        reticle.matrix.fromArray(pose.transform.matrix);
        lastHit = v3(...new THREE.Vector3().setFromMatrixPosition(reticle.matrix).toArray() as [number, number, number]);
      } else reticle.visible = false;
    } else reticle.visible = false;
    refreshPrep();
  }

  if (phase === 'battle' && world && stage) {
    const cam = getCam();
    const firing = hud.firing || spaceDown;
    guns.follow(cam.view);
    guns.update(dt);
    for (let k = 0; k < FAST; k++) {
      world.update(dt, {
        firing, camPos: v3(cam.pos.x, cam.pos.y, cam.pos.z), camDir: v3(cam.dir.x, cam.dir.y, cam.dir.z),
      });
      const events = world.drain();
      stage.handle(events);
      onEvents(events, cam);
    }
    stage.sync(dt);
    stage.fx.setPixelScale(innerHeight * Math.min(devicePixelRatio, 2) * 0.5 * cam.view.projectionMatrix.elements[5]);

    const list: Indicator[] = [];
    for (const tr of transient) tr.ttl -= dt;
    for (let i = transient.length - 1; i >= 0; i--) if (transient[i].ttl <= 0) transient.splice(i, 1);
    for (const tr of transient) {
      const s = toScreen(cam.view, tr.pos);
      if (!s.behind && Math.abs(s.x) < 0.85 && Math.abs(s.y) < 0.8) continue;
      list.push({ id: tr.id, x: s.x, y: s.y, behind: s.behind, danger: tr.danger });
    }
    hud.setIndicators(list);

    // прицел: враг на линии огня → крестик красный, рамка с дальностью
    const aim = world.pick(v3(cam.pos.x, cam.pos.y, cam.pos.z), v3(cam.dir.x, cam.dir.y, cam.dir.z));
    if (aim?.enemy) {
      const e = aim.enemy;
      const s = toScreen(cam.view, e.pos);
      const d = cam.pos.distanceTo(new THREE.Vector3(e.pos.x, e.pos.y, e.pos.z));
      const px = (e.def.radius * (e.def.scale ?? 1) * 2 / d) * innerHeight * 0.5 * cam.view.projectionMatrix.elements[5];
      hud.setLock({ x: (s.x + 1) / 2, y: (1 - s.y) / 2, size: px * 1.3, label: `${e.def.name} · ${d.toFixed(1)} м` });
    } else hud.setLock(null);
    hud.update({
      wave: world.waveIdx, waves: world.waveCount, left: world.enemies.length,
      hull: world.player.hull, heat: world.weapon.heat, overheated: world.weapon.overheated,
      cargo: world.cargo.map((c) => (c.state === 'lost' ? 'lost' : 'ok')),
      kind: world.cargo.map((c) => c.kind), crystals: world.stats.crystals,
    }, dt * 1000);
  }

  const cam = mode === 'ar' && renderer.xr.isPresenting ? null : demoCam;
  renderer.render(scene, cam ?? demoCam);
});

// ───── меню ─────
const status = $('status');
const btnAr = $('btn-ar') as HTMLButtonElement;
btnAr.onclick = () => void startAR();
$('btn-demo').onclick = startDemo;

if (!navigator.xr) {
  status.textContent = 'AR недоступен: нужен Chrome на Android по HTTPS. Можно проверить игру без камеры.';
} else {
  navigator.xr.isSessionSupported('immersive-ar').then((ok) => {
    status.textContent = ok ? 'AR готов. Встань посреди комнаты и держи телефон перед собой.' : 'AR не поддерживается (нужны «Google Play Services for AR»). Доступен тест без камеры.';
    btnAr.hidden = !ok;
  }).catch(() => { status.textContent = 'Не удалось проверить AR.'; });
}

// для отладки и автотестов в браузере
(window as unknown as { __rubezh: unknown }).__rubezh = {
  get world() { return world; },
  startDemo,
  /** отладка: навести демо-камеру на точку и держать огонь */
  aimAt(p: V3 | null) {
    spaceDown = p !== null;
    if (!p) return;
    const dx = p.x - 0, dy = p.y - DEMO_EYE, dz = p.z - 0;
    demoYaw = Math.atan2(-dx, -dz);
    demoPitch = Math.atan2(dy, Math.hypot(dx, dz));
  },
};
