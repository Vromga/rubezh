import * as THREE from 'three';
const $ = (id) => document.getElementById(id);
const s = $('s'), go = $('go');
if (!navigator.xr) s.textContent = 'navigator.xr нет: WebXR недоступен (нужен Chrome на Android по HTTPS/localhost)';
else navigator.xr.isSessionSupported('immersive-ar').then((ok) => {
  s.textContent = ok ? 'WebXR AR поддерживается ✔' : 'immersive-ar не поддерживается ✘ (поставь «Google Play Services for AR»)';
  go.hidden = !ok;
});
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(devicePixelRatio); renderer.setSize(innerWidth, innerHeight);
renderer.xr.enabled = true;
const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera();
scene.add(new THREE.HemisphereLight(0xffffff, 0x444466, 2));
const reticle = new THREE.Mesh(new THREE.RingGeometry(0.07, 0.1, 32).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x22ddff }));
reticle.matrixAutoUpdate = false; reticle.visible = false; scene.add(reticle);
const cubes = [];
let hitSource = null, session = null;
go.onclick = async () => {
  session = await navigator.xr.requestSession('immersive-ar', {
    requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'],
    domOverlay: { root: $('ov') } });
  document.body.appendChild(renderer.domElement);
  $('ov').style.display = 'block'; $('ui').style.display = 'none';
  await renderer.xr.setSession(session);
  const ref = await session.requestReferenceSpace('viewer');
  hitSource = await session.requestHitTestSource({ space: ref });
  $('hud').textContent = 'DOM Overlay: ' + (session.domOverlayState ? session.domOverlayState.type : 'нет') ;
  session.addEventListener('select', () => {
    if (!reticle.visible) return;
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshStandardMaterial({ color: 0xff8844 }));
    m.position.setFromMatrixPosition(reticle.matrix); m.position.y += 0.05;
    scene.add(m); cubes.push(m);
  });
  session.addEventListener('end', () => location.reload());
};
$('clr').onclick = () => { cubes.forEach((c) => scene.remove(c)); cubes.length = 0; };
renderer.setAnimationLoop((_, frame) => {
  if (frame && hitSource) {
    const hits = frame.getHitTestResults(hitSource);
    if (hits.length) {
      const pose = hits[0].getPose(renderer.xr.getReferenceSpace());
      reticle.visible = true; reticle.matrix.fromArray(pose.transform.matrix);
    } else reticle.visible = false;
  }
  renderer.render(scene, camera);
});
