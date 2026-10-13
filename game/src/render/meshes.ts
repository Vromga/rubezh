import * as THREE from 'three';
import type { EnemyDef } from '../core/types';

export interface EnemyView {
  group: THREE.Group;
  parts: Record<string, THREE.Object3D>;
  mats: { mat: THREE.MeshStandardMaterial; color: THREE.Color; emissive: THREE.Color; ei: number }[];
  anim: (t: number) => void;
  /** подсветка ствола перед выстрелом (0..1) */
  charge?: (k: number) => void;
}

const METAL = 0x39424f;
const DARK = 0x252b34;
const RED = 0xff3b2f;

function mat(color: number, emissive = 0x000000, ei = 0, metal = 0.6): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: ei, metalness: metal, roughness: 0.45 });
}

function track(view: EnemyView, obj: THREE.Object3D): void {
  obj.traverse((o) => {
    const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
    if (m && m.isMeshStandardMaterial) {
      view.mats.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone(), ei: m.emissiveIntensity });
    }
  });
}

function box(w: number, h: number, d: number, m: THREE.Material): THREE.Mesh {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
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
    const body = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), mat(METAL));
    shell.scale.set(1, 0.7, 1.5);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), mat(RED, RED, 2));
    eye.position.set(0, 0.01, 0.14);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 6), mat(DARK));
    tail.rotation.x = -Math.PI / 2; tail.position.set(0, 0, -0.18);
    body.add(shell, eye, tail);
    place('body', body);
    const wingMat = () => mat(0x5ad7ff, 0x22aaff, 0.8, 0.2);
    const wl = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.012, 0.1), wingMat());
    const wr = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.012, 0.1), wingMat());
    place('wingL', wl); place('wingR', wr);
    view.anim = (t) => { const f = Math.sin(t * 40) * 0.5; wl.rotation.z = f; wr.rotation.z = -f; };
  } else if (def.id === 'spark') {
    const core = new THREE.Group();
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 1), mat(0xff7a1a, 0xff5500, 1.6, 0.2));
    core.add(orb);
    for (let i = 0; i < 8; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.1, 5), mat(DARK));
      const d = new THREE.Vector3(Math.sin(i * 2.4), Math.cos(i * 1.7), Math.sin(i * 3.1)).normalize();
      s.position.copy(d.clone().multiplyScalar(0.12));
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
      core.add(s);
    }
    place('body', core);
    const fin = box(0.02, 0.14, 0.1, mat(METAL));
    place('fin', fin);
    view.anim = (t) => { core.rotation.y = t * 3; core.rotation.x = t * 2; (orb.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.2 + Math.sin(t * 14) * 0.6; };
  } else if (def.id === 'grabber') {
    const body = new THREE.Group();
    body.add(box(0.36, 0.16, 0.42, mat(METAL)), box(0.2, 0.06, 0.3, mat(DARK)));
    place('body', body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), mat(RED, RED, 1.4));
    place('head', head);
    const arm = new THREE.Group();
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8), mat(DARK));
    const c1 = box(0.02, 0.12, 0.05, mat(0xaab4c2)); c1.position.set(-0.06, -0.18, 0); c1.rotation.z = 0.35;
    const c2 = box(0.02, 0.12, 0.05, mat(0xaab4c2)); c2.position.set(0.06, -0.18, 0); c2.rotation.z = -0.35;
    arm.add(rod, c1, c2);
    place('arm', arm);
    for (const id of ['thrL', 'thrR']) {
      const th = new THREE.Group();
      th.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.2, 10), mat(DARK)));
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 8), mat(0x66ccff, 0x33aaff, 2, 0));
      flame.position.y = -0.17; flame.rotation.x = Math.PI;
      th.add(flame);
      place(id, th);
    }
    view.anim = (t) => { arm.rotation.z = Math.sin(t * 2.2) * 0.12; };
  } else if (def.id === 'shield') {
    const body = new THREE.Group();
    body.add(box(0.3, 0.26, 0.34, mat(METAL)));
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat(RED, RED, 2));
    eye.position.set(0, 0.04, 0.17);
    body.add(eye);
    place('body', body);
    const shieldMat = new THREE.MeshStandardMaterial({ color: 0x38e1ff, emissive: 0x1aa8ff, emissiveIntensity: 0.9, transparent: true, opacity: 0.45, side: THREE.DoubleSide, metalness: 0.1, roughness: 0.2 });
    const sh = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 12, Math.PI * 0.2, Math.PI * 0.6, Math.PI * 0.2, Math.PI * 0.6), shieldMat);
    sh.rotation.y = -Math.PI / 2;
    sh.position.z = -0.12;
    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.012, 6, 30), mat(0x9ff3ff, 0x38e1ff, 1.5, 0));
    frame.position.z = 0.02;
    const shield = new THREE.Group();
    shield.add(sh, frame);
    place('shield', shield);
    const jet = new THREE.Group();
    jet.add(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.16, 10).rotateX(Math.PI / 2), mat(DARK)));
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 8).rotateX(-Math.PI / 2).translate(0, 0, -0.16), mat(0x66ccff, 0x33aaff, 2, 0));
    jet.add(fl);
    place('jet', jet);
    view.anim = (t) => { shieldMat.opacity = 0.38 + Math.sin(t * 6) * 0.08; fl.scale.z = 0.8 + Math.sin(t * 30) * 0.2; };
  } else if (def.id === 'bomber') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 10), mat(METAL));
    body.scale.set(1, 0.32, 1);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.015, 6, 30).rotateX(Math.PI / 2), mat(0xffb03a, 0xff8800, 1.2, 0));
    const g0 = new THREE.Group();
    g0.add(body, ring);
    place('body', g0);
    const bay = new THREE.Group();
    bay.add(box(0.2, 0.08, 0.2, mat(DARK)));
    for (const x of [-0.05, 0.05]) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mat(0xffb03a, 0xff6600, 1.5, 0));
      m.position.set(x, -0.05, 0);
      bay.add(m);
    }
    place('bay', bay);
    place('eye', new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), mat(RED, RED, 2)));
    for (const id of ['jetL', 'jetR']) {
      const j = new THREE.Group();
      j.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 10), mat(DARK)));
      j.add(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 8).rotateX(Math.PI).translate(0, -0.1, 0), mat(0x66ccff, 0x33aaff, 2, 0)));
      place(id, j);
    }
    view.anim = (t) => { ring.rotation.y = t * 2; };
    view.charge = (k) => { for (const c of bay.children) if ((c as THREE.Mesh).geometry instanceof THREE.SphereGeometry) ((c as THREE.Mesh).material as THREE.MeshStandardMaterial).emissiveIntensity = 1.5 + k * 4; };
  } else if (def.id === 'shooter') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), mat(METAL));
    body.scale.set(1, 0.8, 1);
    place('body', body);
    for (const [id, s] of [['plateL', -1], ['plateR', 1]] as const) {
      const pl = box(0.05, 0.22, 0.34, mat(0x4d5766));
      pl.rotation.z = s * -0.25;
      place(id, pl);
    }
    const gun = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.3, 10), mat(DARK));
    barrel.rotation.x = Math.PI / 2;
    const tipMat = mat(0x330000, RED, 0.2, 0);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), tipMat);
    tip.position.z = 0.16;
    gun.add(barrel, tip);
    place('gun', gun);
    const rotor = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 10), mat(DARK));
    const b1 = box(0.46, 0.01, 0.05, mat(0x8892a0)); const b2 = box(0.05, 0.01, 0.46, mat(0x8892a0));
    rotor.add(disc, b1, b2);
    place('rotor', rotor);
    view.anim = (t) => { rotor.rotation.y = t * 30; };
    view.charge = (k) => { tipMat.emissiveIntensity = 0.2 + k * 3; };
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
varying vec2 vUv; uniform float time; uniform float power;
void main(){
  vec2 p = vUv - 0.5; float r = length(p) * 2.0; if (r > 1.0) discard;
  float a = atan(p.y, p.x);
  float sw = 0.5 + 0.5 * sin(a * 4.0 + time * 3.0 - r * 9.0);
  vec3 c = mix(vec3(0.15, 0.0, 0.35), vec3(0.75, 0.25, 1.0), sw * (1.0 - r * 0.4));
  c += power * vec3(0.5, 0.2, 0.7);
  gl_FragColor = vec4(c, (0.55 + 0.4 * sw) * (1.0 - smoothstep(0.85, 1.0, r)));
}`;

export interface PortalView { group: THREE.Group; shader: THREE.ShaderMaterial }

export function buildPortal(): PortalView {
  const group = new THREE.Group();
  const shader = new THREE.ShaderMaterial({
    vertexShader: PORTAL_VS, fragmentShader: PORTAL_FS, transparent: true, side: THREE.DoubleSide,
    depthWrite: false, uniforms: { time: { value: 0 }, power: { value: 0 } },
  });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.55, 40), shader);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.035, 10, 40), mat(0xb36bff, 0xa040ff, 2, 0));
  group.add(disc, ring);
  return { group, shader };
}
