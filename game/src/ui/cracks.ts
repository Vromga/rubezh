interface Seg { x1: number; y1: number; x2: number; y2: number; w: number }
interface Chip { pts: [number, number][]; dark: boolean }
interface Crack { cx: number; cy: number; r: number; segs: Seg[]; chips: Chip[] }

/**
 * Трещины «стекла»: процедурно от точки удара — лучи с ветвлением и кольцевые «паутинки».
 * Хранятся векторами, поэтому перерисовываются при смене размера.
 */
export class CrackLayer {
  private ctx: CanvasRenderingContext2D;
  private cracks: Crack[] = [];
  private hull = 1;
  /** 0..1 — сила эффекта (настройка доступности). */
  strength = 1;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    addEventListener('resize', () => this.resize());
  }

  private resize(): void {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(innerWidth * dpr);
    this.canvas.height = Math.floor(innerHeight * dpr);
    this.redraw();
  }

  reset(): void {
    this.cracks = [];
    this.hull = 1;
    this.canvas.classList.remove('shatter');
    this.redraw();
  }

  /** nx, ny — точка удара в долях экрана (0..1); power 0..1 — размер трещины. */
  hit(nx: number, ny: number, power: number): void {
    const W = this.canvas.width, H = this.canvas.height;
    const cx = nx * W, cy = ny * H;
    const R = Math.min(W, H) * (0.11 + 0.17 * power);
    const rays = 5 + Math.floor(Math.random() * 5);
    const base = Math.random() * Math.PI * 2;
    const dpr = W / innerWidth;
    const segs: Seg[] = [];
    const pts: [number, number][][] = [];
    for (let i = 0; i < rays; i++) {
      let a = base + (i / rays) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      let x = cx, y = cy;
      const steps = 5 + Math.floor(Math.random() * 3);
      const step = (R / steps) * (0.8 + Math.random() * 0.5);
      const line: [number, number][] = [[x, y]];
      for (let k = 0; k < steps; k++) {
        a += (Math.random() - 0.5) * 0.5;
        const nx2 = x + Math.cos(a) * step, ny2 = y + Math.sin(a) * step;
        const w = (2.2 - (k / steps) * 1.4) * dpr;
        segs.push({ x1: x, y1: y, x2: nx2, y2: ny2, w });
        x = nx2; y = ny2;
        line.push([x, y]);
        if (k >= 1 && Math.random() < 0.3) {
          let ba = a + (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.5);
          let bx = x, by = y;
          for (let j = 0; j < 2 + Math.floor(Math.random() * 2); j++) {
            ba += (Math.random() - 0.5) * 0.4;
            const ex = bx + Math.cos(ba) * step * 0.55, ey = by + Math.sin(ba) * step * 0.55;
            segs.push({ x1: bx, y1: by, x2: ex, y2: ey, w: 0.9 * dpr });
            bx = ex; by = ey;
          }
        }
      }
      pts.push(line);
    }
    const chips: Chip[] = [];
    const ringAt = power > 0.6 ? [2, 3, 5] : [2, 4];
    for (const idx of ringAt) {
      for (let i = 0; i < rays; i++) {
        if (Math.random() < 0.2) continue;
        const A = pts[i][Math.min(idx, pts[i].length - 1)];
        const B = pts[(i + 1) % rays][Math.min(idx, pts[(i + 1) % rays].length - 1)];
        segs.push({ x1: A[0], y1: A[1], x2: B[0], y2: B[1], w: 1 * dpr });
        if (idx === 4 || idx === 5) chips.push({ pts: [[cx, cy], A, B], dark: Math.random() < 0.5 });
      }
    }
    this.cracks.push({ cx, cy, r: R, segs, chips });
    if (this.cracks.length > 18) this.cracks.shift();
    this.redraw();
  }

  setHull(frac: number): void {
    this.hull = frac;
    this.redraw();
  }

  /** Полный раскол: экран покрывается трещинами и осыпается. */
  shatter(): void {
    for (let i = 0; i < 7; i++) this.hit(0.1 + Math.random() * 0.8, 0.15 + Math.random() * 0.7, 1);
    this.canvas.classList.add('shatter');
  }

  private redraw(): void {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.strength <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.strength;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const c of this.cracks) {
      const g = ctx.createRadialGradient(c.cx, c.cy, 0, c.cx, c.cy, c.r * 0.35);
      g.addColorStop(0, 'rgba(255,255,255,0.4)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(c.cx, c.cy, c.r * 0.35, 0, Math.PI * 2); ctx.fill();
      if (this.hull < 0.67) {
        for (const ch of c.chips) {
          ctx.beginPath();
          ctx.moveTo(ch.pts[0][0], ch.pts[0][1]);
          ctx.lineTo(ch.pts[1][0], ch.pts[1][1]);
          ctx.lineTo(ch.pts[2][0], ch.pts[2][1]);
          ctx.closePath();
          ctx.fillStyle = ch.dark && this.hull < 0.34 ? 'rgba(0,0,0,0.38)' : 'rgba(255,255,255,0.07)';
          ctx.fill();
        }
      }
      for (const [color, off, extra] of [['rgba(0,0,0,0.55)', 1.5, 1.5], ['rgba(255,255,255,0.9)', 0, 0]] as const) {
        ctx.strokeStyle = color;
        for (const s of c.segs) {
          ctx.lineWidth = s.w + extra;
          ctx.beginPath(); ctx.moveTo(s.x1 + off, s.y1 + off); ctx.lineTo(s.x2 + off, s.y2 + off); ctx.stroke();
        }
      }
    }
    ctx.restore();
  }
}
