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
  }
  track(view, view.group);
  return view;
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

export function buildCargo(kind: 'colonist' | 'crystal'): THREE.Group {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 8, 24), mat(0x44e0ff, 0x22ccff, 1.5, 0));
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.01;
  g.add(ring);
  const hold = new THREE.Group();
  if (kind === 'colonist') {
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.08, 4, 10), mat(0x9fe8ff, 0x44ccff, 0.7, 0.1));
    body.position.y = 0.11;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 8), mat(0xffe2c8, 0xffcc99, 0.4, 0));
    head.position.y = 0.22;
    hold.add(body, head);
  } else {
    const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.075), mat(0x5dffa0, 0x22ff77, 1.2, 0.1));
    c.scale.y = 1.5; c.position.y = 0.16;
    hold.add(c);
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
