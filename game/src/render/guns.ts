import * as THREE from 'three';

interface Barrel { slide: THREE.Group; tip: THREE.Object3D; flash: THREE.Mesh; kick: number; flashT: number }

/**
 * Спаренная зенитка, закреплённая за камерой: два ствола снизу по бокам, сходятся к точке прицела.
 * Стреляют по очереди: откат ствола и дульная вспышка.
 */
export class GunRig {
  readonly group = new THREE.Group();
  private barrels: Barrel[] = [];
  private next = 0;

  constructor() {
    const metal = new THREE.MeshStandardMaterial({ color: 0x3a4552, metalness: 0.85, roughness: 0.3 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1a1f26, metalness: 0.6, roughness: 0.5 });
    const glow = new THREE.MeshStandardMaterial({ color: 0x113344, emissive: 0x38e1ff, emissiveIntensity: 1.2 });
    for (const s of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(0.075 * s, -0.062, -0.1);
      pivot.scale.setScalar(0.55);
      pivot.rotation.y = s * 0.035; // сведение стволов к центру
      pivot.rotation.x = 0.06;
      const slide = new THREE.Group();
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.12).translate(0, 0, -0.03), dark);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.011, 0.3, 12).rotateX(Math.PI / 2).translate(0, 0, -0.22), metal);
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.08, 12).rotateX(Math.PI / 2).translate(0, 0, -0.11), metal);
      const brake = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.035, 10).rotateX(Math.PI / 2).translate(0, 0, -0.37), dark);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.09).translate(0, 0.022, -0.03), glow);
      const tip = new THREE.Object3D();
      tip.position.z = -0.39;
      const flash = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xffc060, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      flash.position.z = -0.41;
      flash.scale.set(1, 1, 2);
      flash.visible = false;
      slide.add(housing, barrel, sleeve, brake, strip, tip, flash);
      pivot.add(slide);
      this.group.add(pivot);
      this.barrels.push({ slide, tip, flash, kick: 0, flashT: 0 });
    }
    const light = new THREE.PointLight(0xffaa55, 0, 0.8);
    light.position.set(0, -0.05, -0.4);
    this.group.add(light);
    this.group.userData.light = light;
  }

  follow(cam: THREE.Camera): void {
    cam.getWorldPosition(this.group.position);
    cam.getWorldQuaternion(this.group.quaternion);
    this.group.updateMatrixWorld(true);
  }

  /** Выстрел следующим стволом; возвращает мировую точку дула. */
  fire(): THREE.Vector3 {
    const b = this.barrels[this.next];
    this.next = (this.next + 1) % this.barrels.length;
    b.kick = 1;
    b.flashT = 0.045;
    b.flash.visible = true;
    b.flash.rotation.z = Math.random() * Math.PI;
    (this.group.userData.light as THREE.PointLight).intensity = 0.4;
    return b.tip.getWorldPosition(new THREE.Vector3());
  }

  update(dt: number): void {
    for (const b of this.barrels) {
      b.kick = Math.max(0, b.kick - dt * 14);
      b.slide.position.z = 0.03 * b.kick;
      b.flashT -= dt;
      if (b.flashT <= 0) b.flash.visible = false;
    }
    const l = this.group.userData.light as THREE.PointLight;
    l.intensity = Math.max(0, l.intensity - dt * 30);
  }
}
