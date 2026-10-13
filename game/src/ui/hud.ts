export interface Indicator { id: string; x: number; y: number; behind: boolean; danger: boolean }

export interface BattleView {
  wave: number; waves: number; left: number; hull: number; heat: number; overheated: boolean;
  cargo: ('ok' | 'lost')[]; kind: ('colonist' | 'crystal')[]; crystals: number;
}

export interface EndInfo {
  win: boolean; reason: string; kills: number; crystals: number; accuracy: number;
  cargoSaved: number; cargoTotal: number; hullLeft: number;
}

const $ = <T extends HTMLElement>(root: HTMLElement, sel: string): T => root.querySelector(sel) as T;

/** DOM-интерфейс поверх AR. Кнопки гасят beforexrselect, чтобы касание не считалось выбором в AR. */
export class Hud {
  firing = false;
  private msgT = 0;
  private arrows = new Map<string, HTMLElement>();

  constructor(private root: HTMLElement) {
    root.innerHTML = `
      <div class="dmg"></div>
      <div class="top" data-b><span class="pill wave"></span><span class="pill enemies"></span>
        <span class="pill cargo"></span><span class="pill gems"></span>
        <div class="bar hull"><i></i></div></div>
      <div class="cross" data-b></div>
      <div class="msg"></div>
      <div class="banner"></div>
      <div class="heat" data-b>ЗЕНИТКА<div class="bar"><i></i></div></div>
      <div class="fire tap" data-b>ОГОНЬ</div>
      <div class="arrows"></div>
      <div class="panel tap" data-p style="display:none"></div>
      <div class="end" style="display:none"></div>`;
    for (const el of root.querySelectorAll<HTMLElement>('.tap, .panel, .end')) {
      el.addEventListener('beforexrselect', (e) => e.preventDefault());
    }
    const fire = $(root, '.fire');
    const down = (e: Event) => { e.preventDefault(); this.firing = true; fire.classList.add('on'); };
    const up = () => { this.firing = false; fire.classList.remove('on'); };
    fire.addEventListener('pointerdown', down);
    fire.addEventListener('pointerup', up);
    fire.addEventListener('pointercancel', up);
    fire.addEventListener('pointerleave', up);
    fire.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  showBattle(on: boolean): void {
    for (const el of this.root.querySelectorAll<HTMLElement>('[data-b], .msg, .arrows')) el.style.display = on ? '' : 'none';
    if (!on) this.firing = false;
  }

  // ─ подготовка ─
  showPrep(opts: { count: number; max: number; min: number; floorFound: boolean; onStart: () => void; onAuto: () => void }): void {
    const p = $(this.root, '.panel');
    p.style.display = '';
    p.innerHTML = `<p>${opts.floorFound
      ? `Коснись пола перед собой, чтобы поставить груз (${opts.min}–${opts.max}). Поставлено: <b>${opts.count}</b>`
      : 'Наведи камеру на пол в 1–2 м и слегка поводи. Не нашёл? Коснись экрана или нажми «Авто» — поставлю на глаз.'}</p>
      <div class="row"><button class="ghost auto">Авто</button><button class="go" ${opts.count < opts.min ? 'disabled' : ''}>В БОЙ</button></div>`;
    $(p, '.auto').onclick = opts.onAuto;
    $(p, '.go').onclick = opts.onStart;
  }
  hidePrep(): void { $(this.root, '.panel').style.display = 'none'; }

  // ─ бой ─
  update(v: BattleView, dtMs: number): void {
    const r = this.root;
    $(r, '.wave').textContent = `ВОЛНА ${Math.max(1, v.wave + 1)}/${v.waves}`;
    $(r, '.enemies').textContent = `врагов: ${v.left}`;
    $(r, '.cargo').innerHTML = v.cargo.map((s, i) => `<span class="ic ${v.kind[i]} ${s === 'lost' ? 'lost' : ''}"></span>`).join('');
    $(r, '.gems').textContent = `◆ ${v.crystals}`;
    const hull = $(r, '.hull');
    ($(hull, 'i')).style.width = `${v.hull}%`;
    hull.classList.toggle('low', v.hull < 34);
    $(r, '.dmg').classList.toggle('danger', v.hull < 34 && v.hull > 0);
    ($(r, '.heat i')).style.width = `${v.heat}%`;
    $(r, '.heat .bar').classList.toggle('over', v.overheated);
    $(r, '.fire').classList.toggle('hot', v.overheated);
    $(r, '.fire').textContent = v.overheated ? 'ОСТЫВАЕТ' : 'ОГОНЬ';
    if (this.msgT > 0) {
      this.msgT -= dtMs;
      if (this.msgT <= 0) $(r, '.msg').classList.remove('on');
    }
  }

  say(text: string, ms = 5000): void {
    const m = $(this.root, '.msg');
    m.textContent = text;
    m.classList.add('on');
    this.msgT = ms;
  }

  banner(text: string): void {
    const b = $(this.root, '.banner');
    b.textContent = text;
    b.classList.remove('on');
    void b.offsetWidth;
    b.classList.add('on');
  }

  hitMarker(weak: boolean): void {
    const c = $(this.root, '.cross');
    c.classList.add('hit');
    c.classList.toggle('weak', weak);
    setTimeout(() => c.classList.remove('hit'), 80);
  }

  damageFlash(): void {
    const d = $(this.root, '.dmg');
    d.classList.add('on');
    setTimeout(() => d.classList.remove('on'), 120);
  }

  setIndicators(list: Indicator[]): void {
    const holder = $(this.root, '.arrows');
    const seen = new Set<string>();
    for (const it of list) {
      seen.add(it.id);
      let el = this.arrows.get(it.id);
      if (!el) { el = document.createElement('div'); el.className = 'arrow'; el.style.position = 'absolute'; holder.appendChild(el); this.arrows.set(it.id, el); }
      el.classList.toggle('danger', it.danger);
      // к краю экрана по направлению от центра
      let dx = it.x, dy = it.y;
      if (it.behind) { dx = -dx; dy = -dy; if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) dy = -1; }
      const k = Math.max(Math.abs(dx) / 0.9, Math.abs(dy) / 0.8, 0.0001);
      const sx = dx / k, sy = dy / k;
      el.style.left = `${(0.5 + sx * 0.5) * 100}%`;
      el.style.top = `${(0.5 - sy * 0.5) * 100}%`;
      el.style.transform = `rotate(${Math.atan2(dx, dy) * 180 / Math.PI}deg)`;
    }
    for (const [id, el] of this.arrows) {
      if (!seen.has(id)) { el.remove(); this.arrows.delete(id); }
    }
  }

  showEnd(info: EndInfo, onAgain: () => void): void {
    this.firing = false;
    const e = $(this.root, '.end');
    e.style.display = '';
    const saved = info.cargoSaved / Math.max(1, info.cargoTotal);
    const stars = info.win ? 1 + (saved >= 1 ? 1 : 0) + (info.hullLeft >= 60 ? 1 : 0) : 0;
    const reason = info.win ? 'Сектор очищен' : info.reason === 'hull' ? 'СВЯЗЬ ПОТЕРЯНА' : 'Весь груз утащили';
    e.innerHTML = `<div class="card"><h2 class="${info.win ? 'win' : 'lose'}">${info.win ? 'ПОБЕДА' : 'ПОРАЖЕНИЕ'}</h2>
      <div>${reason}</div><div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <table><tr><td>Сбито</td><td><b>${info.kills}</b></td></tr>
      <tr><td>Груз спасён</td><td><b>${info.cargoSaved}/${info.cargoTotal}</b></td></tr>
      <tr><td>Корпус</td><td><b>${info.hullLeft}%</b></td></tr>
      <tr><td>Точность</td><td><b>${info.accuracy}%</b></td></tr>
      <tr><td>Кристаллы</td><td><b>◆ ${info.crystals}</b></td></tr></table>
      <button class="again">Ещё раз</button></div>`;
    $(e, '.again').onclick = onAgain;
  }
}
