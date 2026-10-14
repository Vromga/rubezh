/** Процедурные звуки (Web Audio): без файлов. */
export class Sfx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private lastShot = 0;
  volume = 0.6;
  /** слушатель (камера) для панорамы: позиция и направление взгляда */
  private lis = { x: 0, y: 0, z: 0, dx: 0, dz: 1 };
  private pan = 0;
  private att = 1;

  listen(p: { x: number; y: number; z: number }, d: { x: number; z: number }): void {
    const l = Math.hypot(d.x, d.z) || 1;
    this.lis = { x: p.x, y: p.y, z: p.z, dx: d.x / l, dz: d.z / l };
  }

  /** Следующий звук — из точки pos: слева/справа и тише вдали. */
  at(pos: { x: number; y: number; z: number }): this {
    const L = this.lis;
    const vx = pos.x - L.x, vz = pos.z - L.z;
    const d = Math.hypot(vx, vz, pos.y - L.y) || 1;
    // вектор «вправо» при взгляде (dx, dz): (-dz, dx) — при взгляде на -z это +x, как в three.js
    const rx = -L.dz, rz = L.dx;
    this.pan = Math.max(-1, Math.min(1, (vx * rx + vz * rz) / Math.hypot(vx, vz || 1e-6)));
    this.att = Math.max(0.35, Math.min(1, 3 / d));
    queueMicrotask(() => { this.pan = 0; this.att = 1; });
    return this;
  }

  /** Выход звука: через панораму, если задана точка. */
  private route(g: GainNode): void {
    if (!this.ctx || !this.master) return;
    if (this.pan !== 0 && this.ctx.createStereoPanner) {
      const p = this.ctx.createStereoPanner();
      p.pan.value = this.pan;
      g.connect(p).connect(this.master);
    } else g.connect(this.master);
  }

  setVolume(v: number): void {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  /** Создавать только из жеста пользователя (политика браузера). */
  unlock(): void {
    if (this.ctx) { void this.ctx.resume(); return; }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
    const n = this.ctx.sampleRate;
    this.noiseBuf = this.ctx.createBuffer(1, n, n);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  }

  private noise(dur: number, freq: number, q: number, gain: number, type: BiquadFilterType = 'lowpass', sweepTo?: number): void {
    if (!this.ctx || !this.master || !this.noiseBuf) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain * this.att, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f).connect(g);
    this.route(g);
    src.start(t, Math.random() * 0.5, dur);
  }

  private tone(freq: number, to: number, dur: number, gain: number, type: OscillatorType = 'square'): void {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain * this.att, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    this.route(g);
    o.start(t); o.stop(t + dur);
  }

  shot(): void {
    const now = performance.now();
    if (now - this.lastShot < 60) return;
    this.lastShot = now;
    this.tone(520, 120, 0.07, 0.08);
    this.noise(0.06, 3000, 0.7, 0.12, 'highpass');
  }
  hit(): void { this.tone(900, 500, 0.04, 0.06, 'triangle'); }
  partBreak(): void { this.noise(0.18, 1800, 1, 0.3, 'bandpass'); this.tone(300, 80, 0.15, 0.1, 'sawtooth'); }
  explosion(size: number): void { this.noise(0.5 + size * 0.5, 900, 0.5, 0.5, 'lowpass', 80); this.tone(110, 35, 0.4 + size * 0.2, 0.3, 'sine'); }
  glass(power: number): void {
    this.noise(0.25, 6000, 1, 0.4 * power + 0.15, 'highpass');
    this.tone(2200, 1400, 0.3, 0.07 + power * 0.05, 'triangle');
    this.noise(0.5, 4000, 6, 0.1, 'bandpass');
  }
  alarm(): void { this.tone(700, 500, 0.25, 0.12, 'sawtooth'); }
  portal(kind: 'in' | 'out' = 'in'): void {
    if (kind === 'in') this.tone(90, 260, 0.9, 0.12, 'sine');
    else this.tone(320, 140, 0.7, 0.1, 'sawtooth');
  }
  jam(): void { this.tone(160, 900, 0.5, 0.08, 'square'); this.noise(0.4, 2500, 1, 0.15, 'bandpass'); }
  repair(): void { this.tone(300, 900, 0.6, 0.08, 'sine'); this.tone(450, 1350, 0.6, 0.05, 'triangle'); }
  zap(): void { this.noise(0.35, 3000, 2, 0.25, 'bandpass', 600); this.tone(1800, 200, 0.3, 0.08, 'sawtooth'); }
  pew(): void { this.tone(1400, 900, 0.05, 0.03, 'square'); }
  laserHum(): void { this.tone(220, 240, 0.12, 0.035, 'sawtooth'); }
  blink(): void { this.tone(1200, 300, 0.15, 0.06, 'sine'); }
  portalClose(): void { this.tone(400, 60, 0.35, 0.08, 'sine'); }
  overheat(): void { this.noise(0.5, 2500, 1, 0.2, 'highpass'); this.tone(300, 120, 0.4, 0.1, 'sawtooth'); }
  lock(): void { this.tone(1200, 1200, 0.08, 0.1, 'square'); setTimeout(() => this.tone(1600, 1600, 0.1, 0.1, 'square'), 90); }
  rocket(): void { this.noise(0.6, 1200, 0.8, 0.35, 'bandpass', 300); this.tone(200, 600, 0.4, 0.08, 'sawtooth'); }
  emp(): void { this.tone(60, 900, 0.5, 0.25, 'sine'); this.noise(0.6, 5000, 2, 0.2, 'highpass'); }
  steal(): void { this.tone(500, 900, 0.25, 0.1, 'sine'); }
  lost(): void { this.tone(400, 90, 0.7, 0.2, 'sawtooth'); }
  win(): void { [0, 0.15, 0.3].forEach((d, i) => setTimeout(() => this.tone(440 * 1.25 ** (i * 2), 440 * 1.25 ** (i * 2) * 1.01, 0.4, 0.15, 'triangle'), d * 1000)); }
}
