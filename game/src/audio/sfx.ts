/** Процедурные звуки (Web Audio): без файлов. */
export class Sfx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private lastShot = 0;
  volume = 0.6;

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
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f).connect(g).connect(this.master);
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
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(this.master);
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
  portalClose(): void { this.tone(400, 60, 0.35, 0.08, 'sine'); }
  overheat(): void { this.noise(0.5, 2500, 1, 0.2, 'highpass'); this.tone(300, 120, 0.4, 0.1, 'sawtooth'); }
  lock(): void { this.tone(1200, 1200, 0.08, 0.1, 'square'); setTimeout(() => this.tone(1600, 1600, 0.1, 0.1, 'square'), 90); }
  rocket(): void { this.noise(0.6, 1200, 0.8, 0.35, 'bandpass', 300); this.tone(200, 600, 0.4, 0.08, 'sawtooth'); }
  emp(): void { this.tone(60, 900, 0.5, 0.25, 'sine'); this.noise(0.6, 5000, 2, 0.2, 'highpass'); }
  steal(): void { this.tone(500, 900, 0.25, 0.1, 'sine'); }
  lost(): void { this.tone(400, 90, 0.7, 0.2, 'sawtooth'); }
  win(): void { [0, 0.15, 0.3].forEach((d, i) => setTimeout(() => this.tone(440 * 1.25 ** (i * 2), 440 * 1.25 ** (i * 2) * 1.01, 0.4, 0.15, 'triangle'), d * 1000)); }
}
