import * as THREE from 'three';

const VS = `
attribute float size; attribute vec4 col; varying vec4 vCol; uniform float scale;
void main(){ vCol = col; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; }`;
const FS = `
varying vec4 vCol;
void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vCol.rgb, vCol.a * smoothstep(0.5, 0.1, d)); }`;

/** Пул точечных частиц: искры, дым, огонь. Один draw call на пул. */
class PointPool {
  readonly points: THREE.Points;
  private n: number;
  private pos: Float32Array; private col: Float32Array; private size: Float32Array;
  private vel: Float32Array; private life: Float32Array; private maxLife: Float32Array;
  private size0: Float32Array; private grow: Float32Array; private grav: Float32Array;
  private base: Float32Array;
  private next = 0;

  constructor(n: number, additive: boolean) {
    this.n = n;
    this.pos = new Float32Array(n * 3); this.col = new Float32Array(n * 4); this.size = new Float32Array(n);
    this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.maxLife = new Float32Array(n).fill(1);
    this.size0 = new Float32Array(n); this.grow = new Float32Array(n); this.grav = new Float32Array(n);
    this.base = new Float32Array(n * 4);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('col', new THREE.BufferAttribute(this.col, 4));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    const m = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { scale: { value: 900 } },
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
  }

  spawn(p: THREE.Vector3, v: THREE.Vector3, life: number, rgba: [number, number, number, number], size: number, grow = 0, grav = 0): void {
    const i = this.next;
    this.next = (this.next + 1) % this.n;
    this.pos.set([p.x, p.y, p.z], i * 3);
    this.vel.set([v.x, v.y, v.z], i * 3);
    this.life[i] = life; this.maxLife[i] = life;
    this.base.set(rgba, i * 4);
    this.size0[i] = size; this.grow[i] = grow; this.grav[i] = grav;
  }

  update(dt: number): void {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.size[i] = 0; continue; }
      this.life[i] -= dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      for (let a = 0; a < 3; a++) this.pos[i * 3 + a] += this.vel[i * 3 + a] * dt;
      this.size0[i] += this.grow[i] * dt;
      this.size[i] = this.life[i] > 0 ? this.size0[i] : 0;
      this.col[i * 4] = this.base[i * 4]; this.col[i * 4 + 1] = this.base[i * 4 + 1]; this.col[i * 4 + 2] = this.base[i * 4 + 2];
      this.col[i * 4 + 3] = this.base[i * 4 + 3] * k;
    }
    const g = this.points.geometry;
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('col') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('size') as THREE.BufferAttribute).needsUpdate = true;
  }
}

/** Обломок: падает до пола, отскакивает, лежит REST секунд и уходит в пол. */
interface Debris { obj: THREE.Object3D; vel: THREE.Vector3; spin: THREE.Vector3; life: number; landed: boolean; bounces: number; rest: number; half: number }
const DEBRIS = { gravity: 9.8, rest: 4, sink: 1, maxFall: 8, max: 70 };
interface Flash { mesh: THREE.Mesh; life: number; max: number; size: number }
interface Tracer { mesh: THREE.Mesh; life: number }

const rnd = (a = 1) => (Math.random() - 0.5) * 2 * a;
const tmpV = new THREE.Vector3();

export class Fx {
  readonly root = new THREE.Group();
  private glow = new PointPool(500, true);
  private smoke = new PointPool(300, false);
  private debris: Debris[] = [];
  private flashes: Flash[] = [];
  private tracers: Tracer[] = [];
  private flashGeo = new THREE.SphereGeometry(1, 12, 8);

  constructor() {
    this.root.add(this.smoke.points, this.glow.points);
    const geo = new THREE.CylinderGeometry(0.004, 0.004, 1, 5).rotateX(Math.PI / 2).translate(0, 0, 0.5);
    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: 0x99ffee, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      mesh.visible = false;
      this.root.add(mesh);
      this.tracers.push({ mesh, life: 0 });
    }
  }

  setPixelScale(s: number): void {
    (this.glow.points.material as THREE.ShaderMaterial).uniforms.scale.value = s;
    (this.smoke.points.material as THREE.ShaderMaterial).uniforms.scale.value = s;
  }

  private arcs: { line: THREE.Line; life: number }[] = [];

  /** Молния: ломаная через точки, с дрожью; гаснет за 0,3 с. */
  arc(points: THREE.Vector3[], color = 0x9fe8ff): void {
    for (let k = 0; k < 2; k++) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i], b = points[i + 1];
        const n = 7;
        for (let j = 0; j < n; j++) {
          const p = a.clone().lerp(b, j / n);
          if (j > 0) p.add(new THREE.Vector3(rnd(0.12), rnd(0.12), rnd(0.12)));
          pts.push(p);
        }
      }
      pts.push(points[points.length - 1].clone());
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: k ? 0xffffff : color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
      this.root.add(line);
      this.arcs.push({ line, life: 0.3 });
    }
    for (const p of points.slice(1)) this.sparks(p, 6, [0.6, 0.9, 1]);
  }

  tracer(from: THREE.Vector3, to: THREE.Vector3): void {
    const t = this.tracers.find((x) => x.life <= 0) ?? this.tracers[0];
    t.life = 0.09;
    t.mesh.visible = true;
    t.mesh.position.copy(from);
    t.mesh.lookAt(to);
    t.mesh.scale.set(1, 1, from.distanceTo(to));
  }

  /** 0..1: «слабые эффекты» уменьшают число частиц. */
  intensity = 1;

  sparks(p: THREE.Vector3, n = 6, color: [number, number, number] = [1, 0.75, 0.3]): void {
    n = Math.max(1, Math.round(n * this.intensity));
    for (let i = 0; i < n; i++) {
      this.glow.spawn(p, tmpV.set(rnd(1.4), rnd(1.4) + 0.4, rnd(1.4)), 0.35 + Math.random() * 0.3, [...color, 1], 0.03, 0, 3);
    }
  }

  smokePuff(p: THREE.Vector3, size = 0.12): void {
    if (this.intensity < 1 && Math.random() > this.intensity) return;
    this.smoke.spawn(p, tmpV.set(rnd(0.1), 0.25 + Math.random() * 0.2, rnd(0.1)), 1.2, [0.18, 0.18, 0.2, 0.55], size, 0.12);
  }

  fire(p: THREE.Vector3): void {
    this.glow.spawn(p, tmpV.set(rnd(0.15), 0.35, rnd(0.15)), 0.5, [1, 0.45 + Math.random() * 0.3, 0.1, 0.9], 0.09, -0.08);
  }

  explosion(p: THREE.Vector3, size: number): void {
    const n = Math.floor(24 * size) + 8;
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(rnd(1), rnd(1), rnd(1)).normalize().multiplyScalar((0.8 + Math.random() * 1.8) * size);
      this.glow.spawn(p, v, 0.5 + Math.random() * 0.5, [1, 0.5 + Math.random() * 0.4, 0.1, 1], 0.1 * size + 0.04, 0, 1);
    }
    for (let i = 0; i < 8 * size + 3; i++) {
      this.smoke.spawn(p, tmpV.set(rnd(0.6), rnd(0.6) + 0.2, rnd(0.6)).multiplyScalar(size), 1.6, [0.15, 0.15, 0.16, 0.6], 0.2 * size + 0.1, 0.25);
    }
    const mesh = new THREE.Mesh(this.flashGeo, new THREE.MeshBasicMaterial({
      color: 0xffcc66, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    mesh.position.copy(p);
    this.root.add(mesh);
    this.flashes.push({ mesh, life: 0.25, max: 0.25, size: 0.25 * size + 0.1 });
  }

  /** Волна ЭМИ: расширяющаяся голубая сфера вокруг игрока. */
  empWave(p: THREE.Vector3, color = 0x66ddff, size = 9): void {
    const mesh = new THREE.Mesh(this.flashGeo, new THREE.MeshBasicMaterial({
      color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, wireframe: true,
    }));
    mesh.position.copy(p);
    this.root.add(mesh);
    this.flashes.push({ mesh, life: 0.7, max: 0.7, size });
  }

  /** Превратить объект сцены (часть врага) в летящий обломок. */
  detach(obj: THREE.Object3D, outward: THREE.Vector3, power = 1): void {
    const piece = obj.clone(true);
    obj.getWorldPosition(piece.position);
    obj.getWorldQuaternion(piece.quaternion);
    obj.getWorldScale(piece.scale);
    // обгоревший металл: темнее, без свечения; огни, ореолы и пламя сопел гаснут
    piece.traverse((o) => {
      if ((o as THREE.Sprite).isSprite || o.userData.fx) { o.visible = false; return; }
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (!m || !m.isMeshStandardMaterial) return;
      const burnt = m.clone();
      burnt.color.multiplyScalar(0.45);
      burnt.emissive.setRGB(0.25, 0.08, 0);
      burnt.emissiveIntensity = 0.35;
      burnt.transparent = false;
      burnt.opacity = 1;
      (o as THREE.Mesh).material = burnt;
    });
    this.root.add(piece);
    // ложится на самую тонкую сторону — столько и держим над полом
    const size = new THREE.Box3().setFromObject(piece).getSize(new THREE.Vector3());
    const half = Math.max(0.01, Math.min(size.x, size.y, size.z) / 2);
    if (this.debris.length >= DEBRIS.max) this.removeDebris(this.debris.shift()!);
    this.debris.push({
      obj: piece,
      vel: outward.clone().multiplyScalar(1.1 * power).add(new THREE.Vector3(rnd(0.6), 0.4 + Math.random() * 0.8, rnd(0.6))),
      spin: new THREE.Vector3(rnd(7), rnd(7), rnd(7)),
      life: DEBRIS.maxFall, landed: false, bounces: 0, rest: DEBRIS.rest + Math.random() * 2, half,
    });
    obj.visible = false;
  }

  private removeDebris(d: Debris): void {
    this.root.remove(d.obj);
    d.obj.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.Material | undefined;
      if (m && (o as THREE.Mesh).isMesh) m.dispose();
    });
  }

  update(dt: number, floorY: number): void {
    this.glow.update(dt);
    this.smoke.update(dt);
    for (const d of this.debris) {
      if (d.landed) {
        // лежит на полу, потом медленно «тонет» в нём
        d.rest -= dt;
        if (d.rest < 0) d.obj.position.y -= dt * (d.half * 2 + 0.02) / DEBRIS.sink;
        if (d.rest > 0 && Math.random() < dt * 1.5) this.smokePuff(d.obj.position, 0.05);
        continue;
      }
      d.life -= dt;
      d.vel.y -= DEBRIS.gravity * dt;
      d.obj.position.addScaledVector(d.vel, dt);
      d.obj.rotation.x += d.spin.x * dt; d.obj.rotation.y += d.spin.y * dt; d.obj.rotation.z += d.spin.z * dt;
      if (Math.random() < dt * 14) this.smokePuff(d.obj.position, 0.07);
      if (d.obj.position.y <= floorY + d.half) {
        d.obj.position.y = floorY + d.half;
        if (d.bounces === 0) this.sparks(d.obj.position, 4, [1, 0.7, 0.3]);
        d.bounces++;
        if (d.bounces >= 3 || Math.abs(d.vel.y) < 0.6) {
          d.landed = true;
          d.spin.set(0, 0, 0);
        } else {
          d.vel.set(d.vel.x * 0.4, Math.abs(d.vel.y) * 0.3, d.vel.z * 0.4);
          d.spin.multiplyScalar(0.4);
        }
      }
    }
    this.debris = this.debris.filter((d) => {
      const gone = d.life <= 0 || (d.landed && d.rest < -DEBRIS.sink);
      if (gone) this.removeDebris(d);
      return !gone;
    });
    for (const f of this.flashes) {
      f.life -= dt;
      const k = 1 - f.life / f.max;
      f.mesh.scale.setScalar(f.size * (0.3 + k * 1.4));
      (f.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - k);
    }
    this.flashes = this.flashes.filter((f) => {
      if (f.life > 0) return true;
      this.root.remove(f.mesh);
      (f.mesh.material as THREE.Material).dispose();
      return false;
    });
    for (const a of this.arcs) {
      a.life -= dt;
      (a.line.material as THREE.LineBasicMaterial).opacity = Math.max(0, a.life / 0.3);
    }
    this.arcs = this.arcs.filter((a) => {
      if (a.life > 0) return true;
      this.root.remove(a.line);
      a.line.geometry.dispose();
      (a.line.material as THREE.Material).dispose();
      return false;
    });
    for (const t of this.tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      (t.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, t.life / 0.09);
      if (t.life <= 0) t.mesh.visible = false;
    }
  }
}
