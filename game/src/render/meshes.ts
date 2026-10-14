import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import type { EnemyDef } from '../core/types';

export interface EnemyView {
  group: THREE.Group;
  parts: Record<string, THREE.Object3D>;
  mats: { mat: THREE.MeshStandardMaterial; color: THREE.Color; emissive: THREE.Color; ei: number }[];
  anim: (t: number) => void;
  /** подсветка ствола перед выстрелом (0..1) */
  charge?: (k: number) => void;
}

const METAL = 0x6a7482;
const DARK = 0x1f252d;
const RED = 0xff3b2f;

function mat(color: number, emissive = 0x000000, ei = 0, metal = 0.6, rough = 0.45): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: ei, metalness: metal, roughness: rough });
}
/** Корпус: металл с отражениями окружения. */
const hull = (color = METAL) => mat(color, 0, 0, 0.85, 0.3);
/** Тёмные узлы: шарниры, сопла. */
const dark = () => mat(DARK, 0, 0, 0.6, 0.55);

// Подсветка контура (fresnel): робот читается на фоне любой комнаты.
const RIM = { color: new THREE.Color(0x9fd8ff), k: 0.45 };
function addRim(m: THREE.MeshStandardMaterial): void {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.rimColor = { value: RIM.color };
    sh.uniforms.rimK = { value: RIM.k };
    sh.fragmentShader = 'uniform vec3 rimColor;\nuniform float rimK;\n' + sh.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      float rimF = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5);
      totalEmissiveRadiance += rimColor * rimF * rimK;`,
    );
  };
  m.customProgramCacheKey = () => 'rim';
}

function track(view: EnemyView, obj: THREE.Object3D): void {
  obj.traverse((o) => {
    const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
    if (m && m.isMeshStandardMaterial) {
      addRim(m);
      view.mats.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone(), ei: m.emissiveIntensity });
    }
  });
}

function box(w: number, h: number, d: number, m: THREE.Material, r = 0): THREE.Mesh {
  const rr = Math.min(r || Math.min(w, h, d) * 0.18, Math.min(w, h, d) / 2 - 0.0005);
  return new THREE.Mesh(rr > 0.002 ? new RoundedBoxGeometry(w, h, d, 2, rr) : new THREE.BoxGeometry(w, h, d), m);
}

let glowTex: THREE.Texture | null = null;
function glowTexture(): THREE.Texture {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 64, 64);
  glowTex = new THREE.CanvasTexture(c);
  return glowTex;
}
/** Мягкое свечение (сопла, огни) — видно даже издалека. */
function glow(color: number, size: number, opacity = 0.85): THREE.Sprite {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
  sp.scale.setScalar(size);
  return sp;
}

/** Ходовой огонь: светящаяся точка + ореол; мигает в anim. */
function beacon(color: number, r: number): { obj: THREE.Group; set: (on: number) => void } {
  const obj = new THREE.Group();
  const m = mat(color, color, 2.5, 0, 0.3);
  const halo = glow(color, r * 7, 0.7);
  obj.add(new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), m), halo);
  return { obj, set: (on) => { m.emissiveIntensity = 0.4 + on * 2.6; halo.material.opacity = 0.15 + on * 0.6; } };
}

/** Сопло с пламенем, направленным вниз (-Y) или назад (-Z). */
function thruster(r: number, len: number, back = false): { obj: THREE.Group; flame: THREE.Object3D } {
  const obj = new THREE.Group();
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r, len, 14, 1, true), dark());
  (nozzle.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
  const collar = new THREE.Mesh(new THREE.TorusGeometry(r * 0.95, r * 0.18, 6, 16).rotateX(Math.PI / 2), hull(0x8a95a3));
  collar.position.y = len / 2;
  const flame = new THREE.Group();
  const cone = new THREE.Mesh(new THREE.ConeGeometry(r * 0.75, len * 1.3, 10).rotateX(Math.PI), mat(0x9fe6ff, 0x33aaff, 2.6, 0, 0.3));
  cone.position.y = -len * 0.95;
  const g = glow(0x55bbff, r * 6, 0.9);
  g.position.y = -len * 0.7;
  flame.add(cone, g);
  flame.userData.fx = true; // в обломках пламя гаснет
  obj.add(nozzle, collar, flame);
  if (back) obj.rotation.x = Math.PI / 2;
  return { obj, flame };
}

export function buildEnemy(def: EnemyDef): EnemyView {
  const view: EnemyView = { group: new THREE.Group(), parts: {}, mats: [], anim: () => {} };
  const place = (id: string, obj: THREE.Object3D): THREE.Object3D => {
    const p = def.parts.find((x) => x.id === id)!;
    obj.position.set(p.off.x, p.off.y, p.off.z);
    view.group.add(obj);
    view.parts[id] = obj;
    return obj;
  };

  if (def.id === 'scout') {
    // жук: панцирь из двух створок, глаз-объектив, лапки
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 14), hull());
    shell.scale.set(1, 0.7, 1.5);
    const seam = box(0.006, 0.075, 0.28, dark());
    seam.position.y = 0.035;
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), dark());
    belly.scale.set(1, 0.5, 1.4); belly.position.y = -0.03;
    const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.01, 8, 16), hull(0x9aa5b3));
    lensRing.position.set(0, 0.01, 0.142);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 12, 10), mat(RED, RED, 2.4, 0, 0.2));
    eye.position.set(0, 0.01, 0.14);
    const eyeGlow = glow(RED, 0.16, 0.7);
    eyeGlow.position.set(0, 0.01, 0.17);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 8), dark());
    tail.rotation.x = -Math.PI / 2; tail.position.set(0, 0, -0.18);
    const ant1 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.09, 4), dark());
    ant1.position.set(-0.03, 0.08, 0.08); ant1.rotation.set(0.6, 0, 0.3);
    const ant2 = ant1.clone(); ant2.position.x = 0.03; ant2.rotation.z = -0.3;
    body.add(shell, seam, belly, lensRing, eye, eyeGlow, tail, ant1, ant2);
    const legs: THREE.Mesh[] = [];
    for (const sx of [-1, 1]) for (const z of [-0.06, 0, 0.06]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.003, 0.08, 4), dark());
      leg.position.set(sx * 0.07, -0.05, z); leg.rotation.z = sx * 0.7;
      body.add(leg); legs.push(leg);
    }
    place('body', body);
    const wingMat = () => new THREE.MeshStandardMaterial({ color: 0x7fe3ff, emissive: 0x22aaff, emissiveIntensity: 0.9, metalness: 0.1, roughness: 0.15, transparent: true, opacity: 0.75, side: THREE.DoubleSide });
    const mkWing = (sx: number) => {
      const g = new THREE.Group();
      const w = new THREE.Mesh(new THREE.CircleGeometry(0.1, 16), wingMat());
      w.scale.set(1, 0.45, 1); w.rotation.x = -Math.PI / 2;
      const vein = box(0.16, 0.004, 0.006, dark());
      g.add(w, vein);
      g.position.x = sx * 0.0;
      return g;
    };
    const wl = mkWing(-1), wr = mkWing(1);
    place('wingL', wl); place('wingR', wr);
    view.anim = (t) => {
      const f = Math.sin(t * 40) * 0.5; wl.rotation.z = f; wr.rotation.z = -f;
      legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 6 + i) * 0.25; });
    };
  } else if (def.id === 'spark') {
    // мина-камикадзе: раскалённое ядро в клетке с шипами
    const core = new THREE.Group();
    const orbM = mat(0xff8a2a, 0xff5500, 1.8, 0.2, 0.3);
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.085, 2), orbM);
    const cage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshStandardMaterial({ color: 0x9aa5b3, metalness: 0.9, roughness: 0.3, wireframe: true }));
    const halo = glow(0xff6a10, 0.5, 0.8);
    core.add(orb, cage, halo);
    for (let i = 0; i < 10; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 6), hull(0x8a95a3));
      const d = new THREE.Vector3(Math.sin(i * 2.4), Math.cos(i * 1.7), Math.sin(i * 3.1)).normalize();
      s.position.copy(d.clone().multiplyScalar(0.12));
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
      core.add(s);
    }
    place('body', core);
    const fin = new THREE.Group();
    fin.add(box(0.02, 0.14, 0.1, hull()));
    const t1 = thruster(0.03, 0.06, true);
    t1.obj.position.z = -0.04;
    fin.add(t1.obj);
    place('fin', fin);
    view.anim = (t) => {
      core.rotation.y = t * 3; cage.rotation.x = t * 2;
      const pulse = 0.5 + 0.5 * Math.sin(t * 14);
      orbM.emissiveIntensity = 1.2 + pulse * 1.2;
      halo.material.opacity = 0.45 + pulse * 0.45;
      t1.flame.scale.y = 0.8 + Math.sin(t * 40) * 0.25;
    };
  } else if (def.id === 'grabber') {
    // грузовой дрон: бронекорпус, сенсорная голова, манипулятор, два двигателя
    const body = new THREE.Group();
    body.add(box(0.36, 0.16, 0.42, hull(), 0.04));
    const top = box(0.24, 0.05, 0.3, hull(0x8a1f1a), 0.02); top.position.y = 0.09;
    const stripe = box(0.37, 0.025, 0.06, mat(0xffc12a, 0x553300, 0.3, 0.3, 0.5), 0.008); stripe.position.set(0, 0.02, 0.15);
    const under = box(0.2, 0.05, 0.3, dark()); under.position.y = -0.09;
    const vents: THREE.Mesh[] = [];
    for (const z of [-0.12, -0.06, 0]) {
      const v = box(0.12, 0.008, 0.02, mat(0x331100, 0xff4400, 1.2, 0, 0.5)); v.position.set(0, 0.118, z); vents.push(v);
    }
    const b1 = beacon(0xff2a2a, 0.012); b1.obj.position.set(-0.17, 0.06, -0.2);
    const b2 = beacon(0x2aff6a, 0.012); b2.obj.position.set(0.17, 0.06, -0.2);
    body.add(top, stripe, under, ...vents, b1.obj, b2.obj);
    place('body', body);
    const head = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), hull());
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 10, -0.9, 1.8, 0.9, 1.0), mat(RED, RED, 2.2, 0.1, 0.15));
    visor.scale.setScalar(1.08);
    const vg = glow(RED, 0.3, 0.6); vg.position.z = 0.08;
    head.add(dome, visor, vg);
    place('head', head);
    const arm = new THREE.Group();
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.3, 10), hull(0x8a95a3));
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), dark()); joint.position.y = 0.15;
    const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), dark()); wrist.position.y = -0.15;
    const c1 = box(0.02, 0.12, 0.05, hull(0xb5bfcc)); c1.position.set(-0.06, -0.2, 0); c1.rotation.z = 0.35;
    const c2 = box(0.02, 0.12, 0.05, hull(0xb5bfcc)); c2.position.set(0.06, -0.2, 0); c2.rotation.z = -0.35;
    arm.add(rod, joint, wrist, c1, c2);
    place('arm', arm);
    const flames: THREE.Object3D[] = [];
    for (const id of ['thrL', 'thrR']) {
      const th = thruster(0.075, 0.2);
      flames.push(th.flame);
      place(id, th.obj);
    }
    view.anim = (t) => {
      arm.rotation.z = Math.sin(t * 2.2) * 0.12;
      const k = Math.sin(t * 3) * 0.3; c1.rotation.z = 0.35 + k; c2.rotation.z = -0.35 - k;
      flames.forEach((f, i) => { f.scale.y = 0.85 + Math.sin(t * 35 + i) * 0.2; });
      b1.set(Math.sin(t * 5) > 0.6 ? 1 : 0); b2.set(Math.sin(t * 5 + 2) > 0.6 ? 1 : 0);
    };
  } else if (def.id === 'shield') {
    const body = new THREE.Group();
    body.add(box(0.3, 0.26, 0.34, hull(), 0.05));
    const plate = box(0.32, 0.12, 0.08, hull(0x4a5562), 0.02); plate.position.set(0, -0.04, 0.15);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), mat(RED, RED, 2.4, 0, 0.2));
    eye.position.set(0, 0.05, 0.17);
    const eg = glow(RED, 0.22, 0.7); eg.position.set(0, 0.05, 0.2);
    const gen = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 12), mat(0x113344, 0x38e1ff, 1.8, 0.2, 0.3));
    gen.position.set(0, 0.15, 0);
    body.add(plate, eye, eg, gen);
    place('body', body);
    const shieldMat = new THREE.MeshStandardMaterial({ color: 0x38e1ff, emissive: 0x1aa8ff, emissiveIntensity: 0.9, transparent: true, opacity: 0.45, side: THREE.DoubleSide, metalness: 0.1, roughness: 0.2 });
    const sh = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 14, Math.PI * 0.2, Math.PI * 0.6, Math.PI * 0.2, Math.PI * 0.6), shieldMat);
    sh.rotation.y = -Math.PI / 2;
    sh.position.z = -0.12;
    const hex = new THREE.Mesh(new THREE.SphereGeometry(0.425, 12, 6, Math.PI * 0.2, Math.PI * 0.6, Math.PI * 0.2, Math.PI * 0.6), new THREE.MeshBasicMaterial({ color: 0x9ff3ff, wireframe: true, transparent: true, opacity: 0.35 }));
    hex.rotation.y = -Math.PI / 2; hex.position.z = -0.12;
    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.012, 6, 30), mat(0x9ff3ff, 0x38e1ff, 1.5, 0));
    frame.position.z = 0.02;
    const shield = new THREE.Group();
    shield.add(sh, hex, frame);
    place('shield', shield);
    const jet = thruster(0.09, 0.16, true);
    place('jet', jet.obj);
    view.anim = (t) => { shieldMat.opacity = 0.38 + Math.sin(t * 6) * 0.08; jet.flame.scale.y = 0.8 + Math.sin(t * 30) * 0.2; };
  } else if (def.id === 'bomber') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.32, 28, 14), hull());
    body.scale.set(1, 0.32, 1);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x223040, 0x112233, 0.4, 0.3, 0.1));
    dome.position.y = 0.06;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.015, 6, 36).rotateX(Math.PI / 2), mat(0xffb03a, 0xff8800, 1.4, 0));
    const lights: { set: (on: number) => void }[] = [];
    const g0 = new THREE.Group();
    g0.add(body, dome, ring);
    for (let i = 0; i < 6; i++) {
      const b = beacon(0xffb03a, 0.012);
      const a = (i / 6) * Math.PI * 2;
      b.obj.position.set(Math.sin(a) * 0.31, 0, Math.cos(a) * 0.31);
      g0.add(b.obj); lights.push(b);
    }
    place('body', g0);
    const bay = new THREE.Group();
    bay.add(box(0.2, 0.08, 0.2, dark()));
    const bombs: THREE.MeshStandardMaterial[] = [];
    for (const x of [-0.05, 0.05]) {
      const bm = mat(0xffb03a, 0xff6600, 1.5, 0);
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), bm);
      m.position.set(x, -0.05, 0);
      bay.add(m); bombs.push(bm);
    }
    place('bay', bay);
    const eye = new THREE.Group();
    eye.add(new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), mat(RED, RED, 2.4, 0, 0.2)), glow(RED, 0.25, 0.7));
    place('eye', eye);
    const flames: THREE.Object3D[] = [];
    for (const id of ['jetL', 'jetR']) {
      const j = thruster(0.065, 0.1);
      flames.push(j.flame);
      place(id, j.obj);
    }
    view.anim = (t) => {
      ring.rotation.y = t * 2;
      lights.forEach((l, i) => l.set(Math.max(0, Math.cos(t * 4 - i * 1.05))));
      flames.forEach((f, i) => { f.scale.y = 0.85 + Math.sin(t * 33 + i) * 0.2; });
    };
    view.charge = (k) => { for (const b of bombs) b.emissiveIntensity = 1.5 + k * 4; };
  } else if (def.id === 'shooter') {
    const body = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 14), hull());
    core.scale.set(1, 0.8, 1);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.012, 6, 30).rotateX(Math.PI / 2), dark());
    const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), mat(RED, RED, 2.2, 0, 0.2));
    sensor.position.set(0, 0.09, 0.15);
    const b1 = beacon(0xff2a2a, 0.012); b1.obj.position.set(0, 0.17, -0.05);
    body.add(core, band, sensor, b1.obj);
    place('body', body);
    for (const [id, s] of [['plateL', -1], ['plateR', 1]] as const) {
      const pl = new THREE.Group();
      const slab = box(0.05, 0.22, 0.34, hull(0x56616f), 0.015);
      const rib = box(0.055, 0.03, 0.3, dark()); rib.position.y = 0.05;
      const rib2 = rib.clone(); rib2.position.y = -0.05;
      pl.add(slab, rib, rib2);
      pl.rotation.z = s * -0.25;
      place(id, pl);
    }
    const gun = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.3, 12), dark());
    barrel.rotation.x = Math.PI / 2;
    const coils: THREE.Mesh[] = [];
    for (const z of [-0.06, 0, 0.06]) {
      const c = new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.01, 6, 14), mat(0x552010, 0xff3322, 0.4, 0.3, 0.4));
      c.position.z = z; coils.push(c);
    }
    const tipMat = mat(0x330000, RED, 0.2, 0);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), tipMat);
    tip.position.z = 0.16;
    const tipGlow = glow(RED, 0.3, 0);
    tipGlow.position.z = 0.18;
    gun.add(barrel, ...coils, tip, tipGlow);
    place('gun', gun);
    const rotor = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 12), dark());
    const blur = new THREE.Mesh(new THREE.CircleGeometry(0.24, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xaab4c2, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
    const b1r = box(0.46, 0.01, 0.05, hull(0x8892a0)); const b2r = box(0.05, 0.01, 0.46, hull(0x8892a0));
    rotor.add(disc, blur, b1r, b2r);
    place('rotor', rotor);
    view.anim = (t) => { rotor.rotation.y = t * 30; b1.set(Math.sin(t * 4) > 0.7 ? 1 : 0); };
    view.charge = (k) => {
      tipMat.emissiveIntensity = 0.2 + k * 3;
      tipGlow.material.opacity = k * 0.9;
      for (const c of coils) (c.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4 + k * 2.5;
    };
  } else if (def.id === 'jammer') {
    // глушитель: корпус-«таблетка», тарелка-антенна сверху, импульсные кольца
    const body = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.12, 24), hull());
    const lip = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.015, 6, 28).rotateX(Math.PI / 2), mat(0x5dffa0, 0x22ff77, 1.4, 0));
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), mat(RED, RED, 2.4, 0, 0.2));
    eye.position.set(0, 0, 0.18);
    const eg = glow(RED, 0.18, 0.6); eg.position.set(0, 0, 0.2);
    body.add(disc, lip, eye, eg);
    place('body', body);
    const dish = new THREE.Group();
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.015, 0.1, 6), dark());
    mast.position.y = -0.05;
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2.6), hull(0x9aa5b3));
    (bowl.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
    bowl.rotation.x = Math.PI;
    bowl.position.y = 0.06;
    const feed = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), mat(0x5dffa0, 0x22ff77, 2.4, 0));
    feed.position.y = 0.03;
    const fg = glow(0x5dffa0, 0.2, 0.6); fg.position.y = 0.03;
    dish.add(mast, bowl, feed, fg);
    place('dish', dish);
    const flames: THREE.Object3D[] = [];
    for (const id of ['engL', 'engR']) { const t = thruster(0.055, 0.1); flames.push(t.flame); place(id, t.obj); }
    view.anim = (t) => { dish.rotation.y = t * 1.5; lip.rotation.z = t; flames.forEach((f, i) => { f.scale.y = 0.85 + Math.sin(t * 33 + i) * 0.2; }); };
    view.charge = (k) => { (feed.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.4 + k * 5; fg.material.opacity = 0.6 + k * 0.4; fg.scale.setScalar(0.2 + k * 0.5); };
  } else if (def.id === 'repair') {
    // ремонтник: белый корпус с крестом, винт сверху, излучатель снизу
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.16, 18, 12), hull(0xc9d2dc));
    shell.scale.set(1, 0.8, 1.1);
    const crossM = mat(0x3dff8a, 0x22ff77, 1.6, 0, 0.4);
    const c1 = box(0.1, 0.03, 0.012, crossM, 0.004); c1.position.set(0, 0.02, 0.172);
    const c2 = box(0.03, 0.1, 0.012, crossM, 0.004); c2.position.set(0, 0.02, 0.172);
    const b1 = beacon(0x3dff8a, 0.012); b1.obj.position.set(0, 0.13, -0.05);
    body.add(shell, c1, c2, b1.obj);
    place('body', body);
    const em = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.08, 10).rotateX(Math.PI / 2), dark());
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), mat(0x3dff8a, 0x22ff77, 2.5, 0));
    lens.position.z = 0.045;
    em.add(barrel, lens);
    place('emitter', em);
    const rotor = new THREE.Group();
    rotor.add(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.04, 10), dark()));
    rotor.add(new THREE.Mesh(new THREE.CircleGeometry(0.2, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xaab4c2, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false })));
    for (let i = 0; i < 3; i++) { const bl = box(0.4, 0.008, 0.04, hull(0x8892a0)); bl.rotation.y = (i * Math.PI) / 3; rotor.add(bl); }
    place('rotor', rotor);
    view.anim = (t) => { rotor.rotation.y = t * 28; b1.set(Math.sin(t * 3) > 0.5 ? 1 : 0); };
  } else if (def.id === 'jumper') {
    // прыгун: гранёный корпус, светящееся ядро-кристалл спереди, плавники
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), hull(0x7d6aa8));
    shell.scale.set(1, 0.7, 1.3);
    const keel = box(0.012, 0.06, 0.24, dark()); keel.position.y = -0.07;
    body.add(shell, keel);
    place('body', body);
    const coreM = mat(0xc890ff, 0xa040ff, 2.4, 0, 0.2);
    const core = new THREE.Group();
    core.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.045, 0), coreM), glow(0xb36bff, 0.3, 0.7));
    place('core', core);
    for (const [id, sx] of [['finL', -1], ['finR', 1]] as const) {
      const f = new THREE.Group();
      const blade = box(0.16, 0.012, 0.08, hull(0x5c4f7a), 0.004);
      blade.rotation.z = sx * 0.3;
      const tip = beacon(0xb36bff, 0.01); tip.obj.position.x = sx * 0.08;
      f.add(blade, tip.obj);
      place(id, f);
    }
    view.anim = (t) => { core.rotation.y = t * 4; coreM.emissiveIntensity = 1.8 + Math.sin(t * 9) * 0.8; };
    view.charge = (k) => { coreM.emissiveIntensity = 2 + k * 6; core.scale.setScalar(1 + k * 0.6); };
  } else if (def.id === 'ghost') {
    // призрак: вытянутый «скат» из тёмного стекла, генератор невидимости сверху, клешня
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 12), mat(0x2a3446, 0x0a1830, 0.4, 0.9, 0.18));
    shell.scale.set(1.4, 0.35, 1.1);
    const spine = box(0.04, 0.05, 0.36, hull(0x4a5568), 0.01); spine.position.y = 0.06;
    const eyes: THREE.Mesh[] = [];
    for (const x of [-0.07, 0.07]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), mat(0x7fe3ff, 0x38e1ff, 2.5, 0)); e.position.set(x, 0.02, 0.22); eyes.push(e); }
    body.add(shell, spine, ...eyes);
    place('body', body);
    const veil = new THREE.Group();
    const veilM = mat(0x113344, 0x38e1ff, 2, 0.2, 0.2);
    veil.add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.06, 12), veilM), glow(0x38e1ff, 0.3, 0.6));
    place('veil', veil);
    const claw = new THREE.Group();
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 6), dark());
    const k1 = box(0.015, 0.08, 0.04, hull(0xb5bfcc)); k1.position.set(-0.04, -0.12, 0); k1.rotation.z = 0.4;
    const k2 = box(0.015, 0.08, 0.04, hull(0xb5bfcc)); k2.position.set(0.04, -0.12, 0); k2.rotation.z = -0.4;
    claw.add(rod, k1, k2);
    place('claw', claw);
    const flames: THREE.Object3D[] = [];
    for (const id of ['engL', 'engR']) { const t = thruster(0.05, 0.1, true); flames.push(t.flame); place(id, t.obj); }
    view.anim = (t) => { veilM.emissiveIntensity = 1.5 + Math.sin(t * 7) * 0.8; flames.forEach((f, i) => { f.scale.y = 0.8 + Math.sin(t * 30 + i) * 0.2; }); };
  } else if (def.id === 'collector') {
    // босс «Сборщик»: широкий диск-матка, генератор сверху, две пушки, два двигателя
    const body = new THREE.Group();
    const hullM = hull(0x5a6472);
    const disc = new THREE.Mesh(new THREE.SphereGeometry(0.5, 36, 16), hullM);
    disc.scale.set(1, 0.3, 0.85);
    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.025, 8, 48).rotateX(Math.PI / 2), mat(0x221030, 0xb36bff, 1.2, 0.4, 0.3));
    belt.scale.set(1, 0.85, 1);
    const belly = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.1, 24), dark());
    belly.position.y = -0.14;
    const maw = new THREE.Mesh(new THREE.CircleGeometry(0.16, 24).rotateX(Math.PI / 2), mat(0x1a0830, 0xa040ff, 1.6, 0, 0.3));
    maw.position.y = -0.195;
    const mawGlow = glow(0xa040ff, 0.8, 0.5); mawGlow.position.y = -0.22;
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 10), mat(RED, RED, 2.6, 0, 0.2));
    eye.position.set(0, 0, 0.42);
    const eg = glow(RED, 0.4, 0.7); eg.position.set(0, 0, 0.46);
    const lights: { set: (on: number) => void }[] = [];
    body.add(disc, belt, belly, maw, mawGlow, eye, eg);
    for (let i = 0; i < 10; i++) {
      const b = beacon(0xb36bff, 0.016);
      const a = (i / 10) * Math.PI * 2;
      b.obj.position.set(Math.sin(a) * 0.48, 0.02, Math.cos(a) * 0.41);
      body.add(b.obj); lights.push(b);
    }
    for (const sx of [-1, 1]) { const fin = box(0.04, 0.12, 0.3, hull(0x4a5562), 0.012); fin.position.set(sx * 0.2, 0.12, -0.2); fin.rotation.z = sx * -0.3; body.add(fin); }
    place('body', body);
    const veil = new THREE.Group();
    const veilM = mat(0x113344, 0x38e1ff, 2.2, 0.2, 0.2);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.15, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x223040, 0x0a2040, 0.5, 0.3, 0.08));
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 8, 24).rotateX(Math.PI / 2), veilM);
    coil.position.y = 0.05;
    veil.add(dome, coil, glow(0x38e1ff, 0.5, 0.5));
    place('veil', veil);
    const guns: THREE.MeshStandardMaterial[] = [];
    for (const id of ['gunL', 'gunR']) {
      const g = new THREE.Group();
      g.add(box(0.12, 0.1, 0.16, hull(0x4a5562), 0.02));
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.24, 12).rotateX(Math.PI / 2), dark());
      barrel.position.z = 0.16;
      const tm = mat(0x330000, RED, 0.3, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), tm);
      tip.position.z = 0.28;
      g.add(barrel, tip);
      guns.push(tm);
      place(id, g);
    }
    const flames: THREE.Object3D[] = [];
    for (const id of ['engL', 'engR']) {
      const g = new THREE.Group();
      const pod = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.22, 6, 14).rotateX(Math.PI / 2), hull(0x6a7482));
      const t = thruster(0.09, 0.12, true);
      t.obj.position.z = -0.2;
      flames.push(t.flame);
      g.add(pod, t.obj);
      place(id, g);
    }
    view.anim = (t) => {
      coil.rotation.z = t * 2;
      veilM.emissiveIntensity = 1.8 + Math.sin(t * 6) * 0.8;
      lights.forEach((l, i) => l.set(Math.max(0, Math.cos(t * 3 - i * 0.63))));
      flames.forEach((f, i) => { f.scale.y = 0.85 + Math.sin(t * 28 + i) * 0.2; });
    };
    view.charge = (k) => { for (const g of guns) g.emissiveIntensity = 0.3 + k * 4; };
  } else if (def.id === 'crab') {
    // танк-краб: приплюснутый бронекорпус, панцирь-щит спереди, клешня, лапы
    const body = new THREE.Group();
    const shellM = hull(0x7a5a3a);
    const carapace = new THREE.Mesh(new THREE.SphereGeometry(0.26, 22, 12), shellM);
    carapace.scale.set(1.3, 0.45, 1);
    const ridge = box(0.06, 0.05, 0.4, hull(0x5a4028), 0.015); ridge.position.y = 0.1;
    const eyes: THREE.Object3D[] = [];
    for (const x of [-0.07, 0.07]) {
      const stalk = new THREE.Group();
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.012, 0.08, 6), dark()); st.position.y = 0.04;
      const ey = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), mat(RED, RED, 2.4, 0, 0.2)); ey.position.y = 0.09;
      stalk.add(st, ey); stalk.position.set(x, 0.08, 0.2); body.add(stalk); eyes.push(stalk);
    }
    body.add(carapace, ridge);
    place('body', body);
    const shell = new THREE.Group();
    const plate = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 10, -Math.PI * 0.35, Math.PI * 0.7, Math.PI * 0.25, Math.PI * 0.4), hull(0x9a7448));
    (plate.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
    plate.position.z = -0.2;
    shell.add(plate);
    place('shell', shell);
    const claw = new THREE.Group();
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.18, 8).rotateX(Math.PI / 2), hull(0x7a5a3a));
    const pincer1 = box(0.05, 0.03, 0.12, hull(0x9a7448)); pincer1.position.set(0.03, 0, 0.12); pincer1.rotation.y = -0.3;
    const pincer2 = box(0.05, 0.03, 0.12, hull(0x9a7448)); pincer2.position.set(-0.03, 0, 0.12); pincer2.rotation.y = 0.3;
    claw.add(arm, pincer1, pincer2);
    place('claw', claw);
    const legs: THREE.Group[] = [];
    for (const [id, sx] of [['legL', -1], ['legR', 1]] as const) {
      const g = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const l = new THREE.Group();
        const up = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.18, 6), hull(0x5a4028));
        up.rotation.z = sx * 1.0; up.position.x = sx * 0.07;
        const lo = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.008, 0.16, 6), dark());
        lo.position.set(sx * 0.15, -0.07, 0); lo.rotation.z = sx * -0.4;
        l.add(up, lo); l.position.z = (i - 1) * 0.12; g.add(l); legs.push(l);
      }
      place(id, g);
    }
    view.anim = (t) => {
      legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 8 + i * 1.7) * 0.35; });
      eyes.forEach((e, i) => { e.rotation.z = Math.sin(t * 2 + i) * 0.2; });
      pincer1.rotation.y = -0.3 - Math.sin(t * 3) * 0.15; pincer2.rotation.y = 0.3 + Math.sin(t * 3) * 0.15;
    };
  } else if (def.id === 'harpooner') {
    // гарпунщик: вытянутый корпус, гарпун-пушка снизу с катушкой
    const body = new THREE.Group();
    const hullM = hull(0x5f6b78);
    const core = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.26, 6, 16).rotateX(Math.PI / 2), hullM);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(RED, RED, 2, 0.2, 0.2));
    visor.rotation.x = Math.PI / 2; visor.position.z = 0.24;
    const fin = box(0.02, 0.12, 0.16, hull(0x8a95a3)); fin.position.set(0, 0.14, -0.1);
    const b1 = beacon(0xffb03a, 0.012); b1.obj.position.set(0, 0.2, -0.12);
    body.add(core, visor, fin, b1.obj);
    place('body', body);
    const gun = new THREE.Group();
    const reel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 14).rotateZ(Math.PI / 2), dark());
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.2, 10).rotateX(Math.PI / 2), hull(0x9aa5b3));
    barrel.position.z = 0.1;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.07, 6).rotateX(Math.PI / 2), hull(0xd0d6de));
    tip.position.z = 0.22;
    gun.add(reel, barrel, tip);
    place('gun', gun);
    const flames: THREE.Object3D[] = [];
    for (const id of ['engL', 'engR']) { const t = thruster(0.06, 0.12); flames.push(t.flame); place(id, t.obj); }
    view.anim = (t) => { reel.rotation.x = t * 2; b1.set(Math.sin(t * 4) > 0.6 ? 1 : 0); flames.forEach((f, i) => { f.scale.y = 0.85 + Math.sin(t * 31 + i) * 0.2; }); };
    view.charge = (k) => { tip.scale.setScalar(1 + k * 0.5); };
  } else if (def.id === 'hive') {
    // рой-матка: органический купол с сотами, мешки-инкубаторы снизу, винт сверху
    const body = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 14), mat(0x6a5a2a, 0x332200, 0.3, 0.4, 0.5));
    dome.scale.set(1, 0.75, 1);
    const comb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.305, 1), new THREE.MeshStandardMaterial({ color: 0xffc94a, emissive: 0xff9a1a, emissiveIntensity: 0.5, wireframe: true, metalness: 0.3, roughness: 0.6 }));
    comb.scale.set(1, 0.75, 1);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat(RED, RED, 2.4, 0, 0.2)); eye.position.set(0, 0.02, 0.28);
    body.add(dome, comb, eye);
    place('body', body);
    const sacMs: THREE.MeshStandardMaterial[] = [];
    for (const id of ['sacL', 'sacR']) {
      const m = new THREE.MeshStandardMaterial({ color: 0xffd27a, emissive: 0xff9a1a, emissiveIntensity: 0.8, roughness: 0.3, metalness: 0, transparent: true, opacity: 0.85 });
      const sac = new THREE.Group();
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), m);
      ball.scale.y = 1.25;
      sac.add(ball, glow(0xffaa33, 0.35, 0.5));
      sacMs.push(m);
      place(id, sac);
    }
    const rotor = new THREE.Group();
    rotor.add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.05, 10), dark()));
    rotor.add(new THREE.Mesh(new THREE.CircleGeometry(0.3, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xaab4c2, transparent: true, opacity: 0.15, side: THREE.DoubleSide, depthWrite: false })));
    for (let i = 0; i < 4; i++) { const bl = box(0.58, 0.008, 0.05, hull(0x8892a0)); bl.rotation.y = (i * Math.PI) / 4; rotor.add(bl); }
    place('rotor', rotor);
    view.anim = (t) => { rotor.rotation.y = t * 24; sacMs.forEach((m, i) => { m.emissiveIntensity = 0.6 + Math.sin(t * 3 + i) * 0.3; }); };
    view.charge = (k) => { for (const m of sacMs) m.emissiveIntensity = 0.8 + k * 3; };
  } else if (def.id === 'sapper') {
    // сапёр: бочка-заряд с мигающим таймером спереди
    const body = new THREE.Group();
    const keg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.42, 20).rotateX(Math.PI / 2), hull(0x6a7a3a));
    const bands: THREE.Mesh[] = [];
    for (const z of [-0.14, 0, 0.14]) { const b = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.015, 6, 24), mat(0xffc12a, 0x553300, 0.4, 0.3, 0.5)); b.position.z = z; bands.push(b); }
    const warn = box(0.12, 0.05, 0.005, mat(0x111111, 0, 0, 0, 0.6)); warn.position.set(0, 0.12, 0.215);
    body.add(keg, ...bands, warn);
    place('body', body);
    const chargeM = mat(0xff3300, 0xff2200, 2, 0, 0.3);
    const charge = new THREE.Group();
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), chargeM);
    cap.rotation.x = Math.PI / 2;
    const cg = glow(0xff3300, 0.5, 0.6);
    charge.add(cap, cg);
    place('charge', charge);
    const flames: THREE.Object3D[] = [];
    for (const id of ['jetL', 'jetR']) { const t = thruster(0.05, 0.1, true); flames.push(t.flame); place(id, t.obj); }
    view.anim = (t) => {
      const on = Math.sin(t * 10) > 0 ? 1 : 0;
      chargeM.emissiveIntensity = 0.8 + on * 2.5; cg.material.opacity = 0.2 + on * 0.6;
      flames.forEach((f, i) => { f.scale.y = 0.8 + Math.sin(t * 30 + i) * 0.2; });
    };
  } else if (def.id === 'spitter') {
    // кислотник: «жаба» с зелёным мешком кислоты и пастью
    const body = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 12), hull(0x4a5a48));
    torso.scale.set(1.1, 0.8, 1.2);
    const bladderM = new THREE.MeshStandardMaterial({ color: 0x8aff3a, emissive: 0x44cc00, emissiveIntensity: 0.9, roughness: 0.25, metalness: 0, transparent: true, opacity: 0.85 });
    const bladder = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), bladderM);
    bladder.position.set(0, 0.1, -0.08);
    const bg = glow(0x8aff3a, 0.45, 0.45); bg.position.copy(bladder.position);
    const eyes = [-0.08, 0.08].map((x) => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), mat(0xc8ff5d, 0x8aff3a, 2.4, 0)); e.position.set(x, 0.07, 0.2); return e; });
    body.add(torso, bladder, bg, ...eyes);
    place('body', body);
    const mouth = new THREE.Group();
    const jaw = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.02, 8, 16), hull(0x2a3426));
    const drip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), mat(0x8aff3a, 0x44cc00, 2, 0));
    mouth.add(jaw, drip);
    place('mouth', mouth);
    const wings: THREE.Object3D[] = [];
    for (const [id, sx] of [['wingL', -1], ['wingR', 1]] as const) {
      const w = new THREE.Mesh(new THREE.CircleGeometry(0.14, 14), new THREE.MeshStandardMaterial({ color: 0x9ad070, emissive: 0x335522, emissiveIntensity: 0.6, transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
      w.scale.set(1, 0.5, 1); w.rotation.x = -Math.PI / 2; w.position.x = sx * 0.02;
      const g = new THREE.Group(); g.add(w); wings.push(g);
      place(id, g);
    }
    view.anim = (t) => {
      bladder.scale.setScalar(1 + Math.sin(t * 2.5) * 0.08);
      wings.forEach((w, i) => { w.rotation.z = Math.sin(t * 34 + i * Math.PI) * 0.5; });
    };
    view.charge = (k) => { bladderM.emissiveIntensity = 0.9 + k * 2.5; drip.scale.setScalar(1 + k); };
  } else if (def.id === 'leviathan') {
    // левиафан: массивный корпус на четырёх суставчатых ногах, голова с прожектором
    const body = new THREE.Group();
    const torso = box(0.8, 0.3, 0.7, hull(0x505a66), 0.08);
    const back = box(0.5, 0.12, 0.45, hull(0x3a424c), 0.04); back.position.y = 0.2;
    const vents: THREE.Mesh[] = [];
    for (const x of [-0.15, 0, 0.15]) { const v = box(0.08, 0.01, 0.3, mat(0x331100, 0xff4400, 1.4, 0, 0.5)); v.position.set(x, 0.265, 0); vents.push(v); }
    const lights: { set: (on: number) => void }[] = [];
    for (const [x, z] of [[-0.38, 0.33], [0.38, 0.33], [-0.38, -0.33], [0.38, -0.33]]) { const b = beacon(0xff4a3a, 0.018); b.obj.position.set(x, 0.12, z); body.add(b.obj); lights.push(b); }
    body.add(torso, back, ...vents);
    place('body', body);
    const head = new THREE.Group();
    const skull = box(0.26, 0.18, 0.22, hull(0x606a76), 0.04);
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.06, 16), mat(0xfff2c0, 0xffe080, 3, 0));
    lamp.position.z = 0.112;
    const lg = glow(0xffe080, 0.6, 0.7); lg.position.z = 0.14;
    head.add(skull, lamp, lg);
    place('head', head);
    const legs: THREE.Group[] = [];
    for (const id of ['legFL', 'legFR', 'legBL', 'legBR']) {
      const sx = id.endsWith('L') ? -1 : 1;
      const g = new THREE.Group();
      const hip = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), dark());
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.3, 8), hull(0x6a7482));
      thigh.position.set(sx * 0.1, 0.05, 0); thigh.rotation.z = sx * -0.8;
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.025, 0.36, 8), hull(0x4a5562));
      shin.position.set(sx * 0.22, -0.16, 0); shin.rotation.z = sx * 0.25;
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.03, 10), dark());
      foot.position.set(sx * 0.26, -0.33, 0);
      g.add(hip, thigh, shin, foot);
      legs.push(g);
      place(id, g);
    }
    view.anim = (t) => {
      legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 2.8 + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI : 0)) * 0.25; });
      body.position.y = Math.abs(Math.sin(t * 2.8)) * 0.02;
      lights.forEach((l, i) => l.set(Math.sin(t * 3 + i) > 0.5 ? 1 : 0));
    };
  } else if (def.id === 'reaper') {
    // Жнец: корабль-тягач с открытым трюмом, двумя пушками и двигателями
    const body = new THREE.Group();
    const hullM = hull(0x4a525e);
    const deck = box(1.2, 0.26, 0.9, hullM, 0.08);
    const bridge = box(0.4, 0.18, 0.3, hull(0x5a6472), 0.05); bridge.position.set(0, 0.2, 0.2);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.06, 0.02), mat(0x220000, RED, 2, 0.2, 0.1));
    glass.position.set(0, 0.22, 0.355);
    const prow = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.4, 4).rotateX(Math.PI / 2).rotateZ(Math.PI / 4), hullM);
    prow.scale.set(1.6, 0.6, 1); prow.position.z = 0.6;
    const ribs: THREE.Mesh[] = [];
    for (const z of [-0.3, -0.1, 0.1]) { const r = box(1.24, 0.04, 0.05, hull(0x6a7482)); r.position.set(0, 0.13, z); ribs.push(r); }
    const lights: { set: (on: number) => void }[] = [];
    for (let i = 0; i < 8; i++) { const b = beacon(0xff4a3a, 0.02); b.obj.position.set(-0.58 + (i % 4) * 0.39, -0.02, i < 4 ? 0.46 : -0.46); body.add(b.obj); lights.push(b); }
    body.add(deck, bridge, glass, prow, ...ribs);
    place('body', body);
    const hold = new THREE.Group();
    const bay = box(0.42, 0.1, 0.42, dark());
    const beamM = mat(0x0a2a40, 0x38e1ff, 1.5, 0, 0.3);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.16, 24).rotateX(Math.PI / 2), beamM);
    lens.position.y = -0.051;
    const hg = glow(0x38e1ff, 0.9, 0.45); hg.position.y = -0.1;
    hold.add(bay, lens, hg);
    place('hold', hold);
    const guns: THREE.MeshStandardMaterial[] = [];
    for (const id of ['gunL', 'gunR']) {
      const g = new THREE.Group();
      g.add(box(0.16, 0.12, 0.2, hull(0x3a424c), 0.03));
      for (const x of [-0.035, 0.035]) {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.3, 10).rotateX(Math.PI / 2), dark());
        b.position.set(x, 0, 0.2); g.add(b);
      }
      const tm = mat(0x330000, RED, 0.3, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), tm); tip.position.z = 0.36;
      g.add(tip); guns.push(tm);
      place(id, g);
    }
    const flames: THREE.Object3D[] = [];
    for (const id of ['engL', 'engR']) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.4, 16).rotateX(Math.PI / 2), hull(0x5a6472)));
      const t = thruster(0.13, 0.16, true); t.obj.position.z = -0.25;
      flames.push(t.flame); g.add(t.obj);
      place(id, g);
    }
    view.anim = (t) => {
      lights.forEach((l, i) => l.set(Math.max(0, Math.cos(t * 3 - i * 0.8))));
      flames.forEach((f, i) => { f.scale.y = 0.9 + Math.sin(t * 26 + i) * 0.2; });
      beamM.emissiveIntensity = 1.2 + Math.sin(t * 5) * 0.5;
    };
    view.charge = (k) => { for (const g of guns) g.emissiveIntensity = 0.3 + k * 4; };
  } else if (def.id === 'spider') {
    // паук: брюшко, головогрудь с глазами, по четыре лапы с каждой стороны
    const body = new THREE.Group();
    const abdomen = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), hull(0x3a3f48));
    abdomen.scale.set(1, 0.75, 1.25); abdomen.position.z = -0.08;
    const mark = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), mat(RED, RED, 1.8, 0)); mark.scale.set(1, 0.4, 1.4); mark.position.set(0, 0.06, -0.08);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 10), hull(0x4a505a)); head.position.z = 0.05;
    const eyes = [-0.025, 0, 0.025].map((x) => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.01, 6, 4), mat(RED, RED, 2.5, 0)); e.position.set(x, 0.025, 0.1); return e; });
    body.add(abdomen, mark, head, ...eyes);
    place('body', body);
    const legs: THREE.Group[] = [];
    for (const [id, sx] of [['legL', -1], ['legR', 1]] as const) {
      const g = new THREE.Group();
      for (let i = 0; i < 4; i++) {
        const l = new THREE.Group();
        const up = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.1, 5), hull(0x5a606a));
        up.rotation.z = sx * 1.1; up.position.set(sx * 0.04, 0.025, 0);
        const lo = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.003, 0.11, 5), dark());
        lo.position.set(sx * 0.09, -0.02, 0); lo.rotation.z = sx * -0.35;
        l.add(up, lo); l.position.z = 0.06 - i * 0.045; l.rotation.y = sx * (0.5 - i * 0.33);
        g.add(l); legs.push(l);
      }
      place(id, g);
    }
    view.anim = (t) => { legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 16 + i * 1.3) * 0.3; }); };
  } else if (def.id === 'moth') {
    // мотылёк: пушистое тельце, большие светящиеся крылья-«глаза»
    const body = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.025, 0.1, 4, 10).rotateX(Math.PI / 2), mat(0x6a5a7a, 0, 0, 0.2, 0.8));
    const ants = [-1, 1].map((sx) => { const a = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.07, 4), dark()); a.position.set(sx * 0.015, 0.03, 0.08); a.rotation.set(0.7, 0, sx * -0.4); return a; });
    body.add(torso, ...ants);
    place('body', body);
    const wings: THREE.Group[] = [];
    for (const [id, sx] of [['wingL', -1], ['wingR', 1]] as const) {
      const g = new THREE.Group();
      const wm = new THREE.MeshStandardMaterial({ color: 0xd0b8ff, emissive: 0x8a5aff, emissiveIntensity: 0.9, transparent: true, opacity: 0.8, side: THREE.DoubleSide, roughness: 0.6 });
      const w = new THREE.Mesh(new THREE.CircleGeometry(0.11, 18), wm);
      w.scale.set(1, 0.75, 1); w.rotation.x = -Math.PI / 2; w.position.x = sx * 0.02;
      const eye = new THREE.Mesh(new THREE.CircleGeometry(0.03, 12), mat(0xffe08a, 0xffb03a, 2, 0));
      (eye.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
      eye.rotation.x = -Math.PI / 2; eye.position.set(sx * 0.03, 0.002, 0);
      g.add(w, eye);
      wings.push(g);
      place(id, g);
    }
    const halo = glow(0xb38aff, 0.5, 0.4);
    body.add(halo);
    view.anim = (t) => { wings.forEach((w, i) => { w.rotation.z = Math.sin(t * 22 + i * Math.PI) * 0.8; }); halo.material.opacity = 0.3 + Math.sin(t * 5) * 0.15; };
  } else if (def.id === 'roller') {
    // болтун: бронированный шар-колесо с люком сверху
    const body = new THREE.Group();
    const ball = new THREE.Group();
    const shellM = hull(0x6a5040);
    ball.add(new THREE.Mesh(new THREE.SphereGeometry(0.12, 20, 14), shellM));
    for (let i = 0; i < 3; i++) { const band = new THREE.Mesh(new THREE.TorusGeometry(0.122, 0.008, 6, 28), mat(0xffb03a, 0x553300, 0.6, 0.3, 0.4)); band.rotation.y = (i * Math.PI) / 3; ball.add(band); }
    body.add(ball);
    place('body', body);
    const hatch = new THREE.Group();
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.025, 14), hull(0x8a95a3));
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), mat(RED, RED, 2.4, 0)); eye.position.y = 0.015;
    hatch.add(lid, eye);
    place('hatch', hatch);
    for (const id of ['sideL', 'sideR']) {
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 14).rotateZ(Math.PI / 2), hull(0x4a5562));
      place(id, hub);
    }
    view.anim = (t) => { ball.rotation.x = t * 6; };
  } else if (def.id === 'tick') {
    // клещ: плоское панцирное тельце, хоботок, короткие сильные лапки
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 10), mat(0x5a2a2a, 0x200808, 0.3, 0.5, 0.35));
    shell.scale.set(1, 0.5, 1.2);
    const plate = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), hull(0x7a3a3a));
    plate.scale.set(1, 0.5, 1.1); plate.position.y = 0.02;
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.015, 0.06, 6).rotateX(Math.PI / 2), dark()); beak.position.z = 0.1;
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 4), mat(0xff8a2a, 0xff6a00, 2.5, 0)); eye.position.set(0, 0.03, 0.07);
    body.add(shell, plate, beak, eye);
    place('body', body);
    const legs = new THREE.Group();
    const parts: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const sx = i < 3 ? -1 : 1;
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.004, 0.08, 5), dark());
      l.position.set(sx * 0.07, 0, 0.04 - (i % 3) * 0.04); l.rotation.z = sx * 1.1;
      legs.add(l); parts.push(l);
    }
    place('legs', legs);
    view.anim = (t) => { parts.forEach((l, i) => { l.rotation.x = Math.sin(t * 12 + i) * 0.4; }); };
    view.charge = (k) => { (eye.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.5 + k * 5; body.scale.setScalar(1 + k * 0.15); };
  } else if (def.id === 'hunter') {
    // охотник: двуногий шагоход с кабиной-головой и манипулятором
    const body = new THREE.Group();
    const torso = box(0.22, 0.18, 0.18, hull(0x5a6472), 0.04);
    const pack = box(0.16, 0.14, 0.08, hull(0x3a424c), 0.02); pack.position.z = -0.12;
    const b1 = beacon(0xff4a3a, 0.012); b1.obj.position.set(0, 0.06, -0.17);
    body.add(torso, pack, b1.obj);
    place('body', body);
    const head = new THREE.Group();
    const dome = box(0.12, 0.08, 0.1, hull(0x6a7482), 0.03);
    const visor = box(0.1, 0.025, 0.01, mat(RED, RED, 2.2, 0.2, 0.2), 0.005); visor.position.z = 0.052;
    head.add(dome, visor);
    place('head', head);
    const arm = new THREE.Group();
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16, 8), hull(0x8a95a3)); a.position.y = -0.06;
    const claw = box(0.05, 0.04, 0.05, hull(0xb5bfcc)); claw.position.y = -0.15;
    arm.add(a, claw);
    place('arm', arm);
    const legs: THREE.Group[] = [];
    for (const id of ['legL', 'legR']) {
      const g = new THREE.Group();
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.16, 8), hull(0x6a7482)); thigh.position.y = 0.06; thigh.rotation.x = 0.3;
      const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.17, 8), hull(0x4a5562)); shin.position.set(0, -0.08, 0.02); shin.rotation.x = -0.3;
      const foot = box(0.06, 0.02, 0.1, dark()); foot.position.set(0, -0.16, 0.03);
      g.add(thigh, shin, foot);
      legs.push(g);
      place(id, g);
    }
    view.anim = (t) => { legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 5 + i * Math.PI) * 0.4; }); body.position.y = Math.abs(Math.sin(t * 5)) * 0.015; b1.set(Math.sin(t * 4) > 0.5 ? 1 : 0); };
  } else if (def.id === 'node') {
    // узел щита: кристалл-пилон в кольцах, питает Ядро лучом
    const body = new THREE.Group();
    const cm = mat(0xc890ff, 0xa040ff, 1.8, 0.1, 0.15);
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), cm);
    crystal.scale.set(0.8, 1.5, 0.8);
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 2; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.17 + i * 0.04, 0.01, 6, 28), hull(0x9aa5b3)); rings.push(r); body.add(r); }
    body.add(crystal, glow(0xb36bff, 0.7, 0.5));
    place('body', body);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), mat(RED, RED, 2.5, 0));
    place('eye', eye);
    view.anim = (t) => { crystal.rotation.y = t * 1.5; rings[0].rotation.x = t * 1.2; rings[1].rotation.y = t * 0.9; cm.emissiveIntensity = 1.5 + Math.sin(t * 4) * 0.5; };
    view.charge = (k) => { (eye.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.5 + k * 5; };
  } else if (def.id === 'nexus') {
    // Хор-Ядро: пульсирующая сфера-«мозг» в вращающихся кольцах с шипами
    const body = new THREE.Group();
    const coreM = mat(0xff5ad0, 0xb02aff, 1.6, 0.2, 0.25);
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 3), coreM);
    const cage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.47, 1), new THREE.MeshStandardMaterial({ color: 0x9aa5b3, metalness: 0.9, roughness: 0.3, wireframe: true }));
    const rings: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(new THREE.TorusGeometry(0.62 + i * 0.1, 0.02, 8, 64), hull(0x5a6472)));
      for (let k = 0; k < 8; k++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 6), hull(0x8a95a3));
        const a = (k / 8) * Math.PI * 2;
        spike.position.set(Math.cos(a) * (0.62 + i * 0.1), Math.sin(a) * (0.62 + i * 0.1), 0);
        spike.rotation.z = a - Math.PI / 2;
        g.add(spike);
      }
      g.rotation.set(i * 1.1, i * 0.7, 0);
      rings.push(g); body.add(g);
    }
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), mat(RED, RED, 3, 0)); eye.position.z = 0.38;
    body.add(core, cage, eye, glow(0xd070ff, 2.2, 0.45));
    place('body', body);
    view.anim = (t) => {
      rings.forEach((r, i) => { r.rotation.x += 0.004 * (i + 1); r.rotation.y += 0.006 * (3 - i); });
      cage.rotation.y = -t * 0.3;
      const pulse = 1 + Math.sin(t * 3) * 0.04;
      core.scale.setScalar(pulse);
      coreM.emissiveIntensity = 1.3 + Math.sin(t * 3) * 0.5;
    };
  }
  track(view, view.group);
  return view;
}

/** Дрон «Оса» игрока: квадрокоптер с голубыми огнями. */
export function buildDrone(): THREE.Group {
  const g = new THREE.Group();
  const body = box(0.09, 0.03, 0.09, hull(0xd8e0e8), 0.012);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), mat(0x38e1ff, 0x38e1ff, 2.5, 0)); eye.position.z = 0.05;
  const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.05, 6).rotateX(Math.PI / 2), dark()); gun.position.set(0, -0.02, 0.04);
  g.add(body, eye, gun, glow(0x38e1ff, 0.12, 0.6));
  const props: THREE.Mesh[] = [];
  for (const [x, z] of [[-0.07, -0.07], [0.07, -0.07], [-0.07, 0.07], [0.07, 0.07]]) {
    const arm = box(0.07, 0.008, 0.012, dark()); arm.position.set(x / 2, 0, z / 2); arm.rotation.y = Math.atan2(z, x);
    const prop = new THREE.Mesh(new THREE.CircleGeometry(0.035, 16).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xaab4c2, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
    prop.position.set(x, 0.012, z);
    g.add(arm, prop); props.push(prop);
  }
  g.userData.anim = (t: number) => { props.forEach((p, i) => { p.rotation.y = t * 40 + i; }); g.position.y += 0; };
  return g;
}

export function buildRocket(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.24, 10).rotateX(Math.PI / 2), mat(0xc8d2de, 0x000000, 0, 0.5));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.07, 10).rotateX(Math.PI / 2).translate(0, 0, 0.155), mat(0xff5a3a, 0xff3300, 0.6, 0.2));
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.027, 0.027, 0.02, 10).rotateX(Math.PI / 2).translate(0, 0, 0.04), mat(0x113344, 0x38e1ff, 1.5, 0));
  g.add(body, nose, band);
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.05, 0.05), mat(0x7b8794));
    fin.position.set(0, 0, -0.1);
    fin.rotation.z = (i * Math.PI) / 2;
    fin.translateY(0.035);
    g.add(fin);
  }
  return g;
}

/** Груз: колонист в скафандре на платформе или друза энергокристаллов. */
export function buildCargo(kind: 'colonist' | 'crystal'): THREE.Group {
  const g = new THREE.Group();
  // платформа-маяк: видно, где груз, даже издалека
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.025, 28), mat(0x2a3440, 0, 0, 0.8, 0.35));
  pad.position.y = 0.012;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.008, 8, 32).rotateX(Math.PI / 2), mat(0x44e0ff, 0x22ccff, 2, 0));
  ring.position.y = 0.026;
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.24, 32).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x38e1ff, transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.position.y = 0.004;
  g.add(pad, ring, halo);
  const hold = new THREE.Group();
  hold.position.y = 0.026;
  if (kind === 'colonist') {
    const suit = mat(0xe8edf2, 0, 0, 0.1, 0.55);
    const trim = mat(0xff8a2a, 0x331100, 0.2, 0.2, 0.5);
    const darkM = mat(0x2a3038, 0, 0, 0.4, 0.6);
    const fig = new THREE.Group();
    // ноги и ботинки
    for (const x of [-0.028, 0.028]) {
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.1, 4, 10), suit);
      leg.position.set(x, 0.085, 0);
      const boot = box(0.04, 0.03, 0.06, darkM, 0.01); boot.position.set(x, 0.015, 0.008);
      fig.add(leg, boot);
    }
    const torso = box(0.1, 0.12, 0.06, suit, 0.022); torso.position.y = 0.21;
    const belt = box(0.104, 0.015, 0.064, trim, 0.005); belt.position.y = 0.155;
    const chest = box(0.04, 0.025, 0.006, mat(0x38e1ff, 0x22ccff, 1.6, 0), 0.004); chest.position.set(0, 0.235, 0.032);
    const pack = box(0.08, 0.1, 0.04, mat(0xb8c2cc, 0, 0, 0.4, 0.45), 0.012); pack.position.set(0, 0.22, -0.048);
    const packLight = new THREE.Mesh(new THREE.SphereGeometry(0.006, 6, 4), mat(0x5dffa0, 0x5dffa0, 2.5, 0)); packLight.position.set(0.025, 0.25, -0.07);
    const arms: THREE.Group[] = [];
    for (const sx of [-1, 1]) {
      const arm = new THREE.Group();
      const a = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.09, 4, 8), suit);
      a.position.y = -0.055;
      const glove = new THREE.Mesh(new THREE.SphereGeometry(0.019, 8, 6), darkM); glove.position.y = -0.115;
      arm.add(a, glove);
      arm.position.set(sx * 0.066, 0.26, 0);
      arm.rotation.z = sx * 0.12;
      fig.add(arm); arms.push(arm);
    }
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.048, 18, 14), suit); helmet.position.y = 0.315;
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.042, 16, 10, -1.0, 2.0, 1.0, 1.0), mat(0xffc040, 0x553300, 0.4, 1, 0.08));
    visor.position.set(0, 0.315, 0.012);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.05, 4), darkM); ant.position.set(0.03, 0.36, -0.02);
    fig.add(torso, belt, chest, pack, packLight, helmet, visor, ant);
    hold.add(fig);
    // руки: спокойно стоит, а когда несут — машет, зовёт на помощь
    g.userData.arms = arms;
  } else {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.09, 0), mat(0x3a3f46, 0, 0, 0.2, 0.9));
    rock.scale.set(1.3, 0.45, 1.1); rock.position.y = 0.03;
    hold.add(rock);
    const cm = mat(0x5dffa0, 0x22ff77, 1.3, 0.1, 0.12);
    const shards: [number, number, number, number, number][] = [
      [0, 0, 0.2, 0, 0], [0.04, 0.02, 0.13, 0.35, 0.2], [-0.045, 0.01, 0.15, -0.4, -0.1], [0.01, -0.045, 0.11, 0.1, -0.45], [-0.02, 0.045, 0.1, -0.2, 0.4],
    ];
    for (const [x, z, h, rz, rx] of shards) {
      const sh = new THREE.Group();
      const prism = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, h, 6), cm);
      prism.position.y = h / 2;
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.04, 6), cm);
      tip.position.y = h + 0.02;
      sh.add(prism, tip);
      sh.position.set(x, 0.04, z);
      sh.rotation.set(rx, 0, rz);
      hold.add(sh);
    }
    const gl = glow(0x5dffa0, 0.45, 0.55); gl.position.y = 0.14;
    hold.add(gl);
    g.userData.spin = true;
  }
  g.add(hold);
  g.userData.hold = hold;
  return g;
}

const PORTAL_VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }';
const PORTAL_FS = `
varying vec2 vUv; uniform float time; uniform float power; uniform vec3 cDark; uniform vec3 cLight; uniform float dir;
void main(){
  vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
  float a = atan(p.y, p.x);
  float sw = 0.5 + 0.5 * sin(a * 5.0 + dir * time * 4.0 - r * 11.0);
  float sw2 = 0.5 + 0.5 * sin(a * 3.0 - dir * time * 2.5 + r * 7.0);
  vec3 c = mix(cDark, cLight, sw * (1.0 - r * 0.35));
  c = mix(c, cLight * 1.4, sw2 * 0.25);
  // яркий ободок и тёмный «зрачок» в центре
  c += cLight * smoothstep(0.7, 0.98, r) * 0.9;
  c *= 0.35 + 0.65 * smoothstep(0.0, 0.45, r);
  c += power * cLight * 0.7;
  float alpha = (0.65 + 0.35 * sw) * (1.0 - smoothstep(0.9, 1.0, r));
  gl_FragColor = vec4(c, alpha);
}`;

export interface PortalView { group: THREE.Group; spin: THREE.Group; shader: THREE.ShaderMaterial }

/** Портал вторжения — фиолетовый, портал ухода — красно-оранжевый. */
export function buildPortal(kind: 'in' | 'out' = 'in'): PortalView {
  const col = kind === 'in'
    ? { dark: new THREE.Color(0.12, 0.0, 0.3), light: new THREE.Color(0.72, 0.3, 1.0), ring: 0xb36bff, glow: 0xa040ff }
    : { dark: new THREE.Color(0.3, 0.03, 0.0), light: new THREE.Color(1.0, 0.42, 0.12), ring: 0xff6a2a, glow: 0xff3a10 };
  const group = new THREE.Group();
  const shader = new THREE.ShaderMaterial({
    vertexShader: PORTAL_VS, fragmentShader: PORTAL_FS, transparent: true, side: THREE.DoubleSide, depthWrite: false,
    uniforms: { time: { value: 0 }, power: { value: 0 }, cDark: { value: col.dark }, cLight: { value: col.light }, dir: { value: kind === 'in' ? 1 : -1 } },
  });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.55, 48), shader);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.035, 10, 48), mat(col.ring, col.glow, 2.2, 0));
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(0.58, 0.8, 48),
    new THREE.MeshBasicMaterial({ color: col.glow, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  // вращающиеся «зубцы» обода
  const spin = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.018, 6, 10, Math.PI / 6), mat(col.ring, col.glow, 2.5, 0));
    seg.rotation.z = (i * Math.PI) / 3;
    spin.add(seg);
  }
  group.add(disc, ring, halo, spin);
  return { group, spin, shader };
}
