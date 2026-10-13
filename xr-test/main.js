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
renderer.setClearColor(0x000000, 0);
const log = (t) => { $('hud').textContent = t; };
let frames = 0, hitsN = 0, lastErr = '';
addEventListener('error', (e) => { lastErr = String(e.message); });
addEventListener('unhandledrejection', (e) => { lastErr = String(e.reason); });
const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera();
scene.add(new THREE.HemisphereLight(0xffffff, 0x444466, 2));
const reticle = new THREE.Mesh(new THREE.RingGeometry(0.07, 0.1, 32).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x22ddff }));
reticle.matrixAutoUpdate = false; reticle.visible = false; scene.add(reticle);
const cubes = [];
let hitSource = null, session = null;
go.onclick = async () => {
  try {
    session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay', 'local-floor'],
      domOverlay: { root: $('ov') } });
    document.body.style.background = 'transparent';
    document.documentElement.style.background = 'transparent';
    document.body.appendChild(renderer.domElement);
    $('ov').style.display = 'block'; $('ui').style.display = 'none';
    log('сессия создана, настраиваю…');
    await renderer.xr.setSession(session);
    const ref = await session.requestReferenceSpace('viewer');
    hitSource = await session.requestHitTestSource({ space: ref });
    session.addEventListener('select', () => {
      if (!reticle.visible) return;
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshStandardMaterial({ color: 0xff8844 }));
      m.position.setFromMatrixPosition(reticle.matrix); m.position.y += 0.05;
      scene.add(m); cubes.push(m);
    });
    session.addEventListener('end', () => location.reload());
  } catch (e) { lastErr = String(e); log('ОШИБКА: ' + lastErr); $('ov').style.display = 'block'; }
};
setInterval(() => {
  if (!session) return;
  $('hud').textContent = `кадров: ${frames} | hit: ${hitsN} | overlay: ${session.domOverlayState ? session.domOverlayState.type : 'нет'} | blend: ${session.environmentBlendMode} | src: ${hitSource ? 'ok' : 'нет'}` + (lastErr ? ` | ${lastErr}` : '');
}, 500);
$('clr').onclick = () => { cubes.forEach((c) => scene.remove(c)); cubes.length = 0; };
renderer.setAnimationLoop((_, frame) => {
  if (frame) frames++;
  if (frame && hitSource) {
    const hits = frame.getHitTestResults(hitSource);
    if (hits.length) {
      hitsN++;
      const pose = hits[0].getPose(renderer.xr.getReferenceSpace());
      reticle.visible = true; reticle.matrix.fromArray(pose.transform.matrix);
    } else reticle.visible = false;
  }
  renderer.render(scene, camera);
});
