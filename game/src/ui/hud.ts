export interface Indicator { id: string; x: number; y: number; behind: boolean; danger: boolean }

export interface BattleView {
  wave: number; waves: number; left: number; hull: number; heat: number; overheated: boolean;
  cargo: ('ok' | 'lost')[]; kind: ('colonist' | 'crystal')[]; crystals: number;
}

export interface EndInfo {
  win: boolean; reason: string; kills: number; crystals: number; accuracy: number;
  cargoSaved: number; cargoTotal: number; hullLeft: number;
  stars: number; bonus: number; sector: number; sectorName: string; wave: number; waves: number;
  newEnemies: string[]; canUpgrade: boolean; hasNext: boolean;
}

export type EndChoice = 'next' | 'hangar' | 'retry' | 'menu' | 'bestiary';

/** Каркас кабины: стойки фонаря, верхняя дуга, приборная панель. Растягивается на весь экран. */
const COCKPIT = `
<svg class="cockpit" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="ck-m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f3b49"/><stop offset="1" stop-color="#121820"/></linearGradient>
    <linearGradient id="ck-s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10151c"/><stop offset=".7" stop-color="#2b3644"/><stop offset="1" stop-color="#3e4c5d"/></linearGradient>
    <linearGradient id="ck-s2" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#10151c"/><stop offset=".7" stop-color="#2b3644"/><stop offset="1" stop-color="#3e4c5d"/></linearGradient>
    <linearGradient id="ck-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="#9ef" stop-opacity=".04"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#ck-g)"/>
  <path d="M0 0H1600V46C1200 92 400 92 0 46Z" fill="url(#ck-m)" stroke="#55677b" stroke-width="2"/>
  <path d="M0 0H70L170 900H0Z" fill="url(#ck-s)" stroke="#55677b" stroke-width="2"/>
  <path d="M1600 0H1530L1430 900H1600Z" fill="url(#ck-s2)" stroke="#55677b" stroke-width="2"/>
  <path d="M0 735C380 772 600 790 800 790S1220 772 1600 735V900H0Z" fill="url(#ck-m)" stroke="#55677b" stroke-width="2"/>
  <path d="M560 790C620 760 980 760 1040 790L1060 900H540Z" fill="#0d1218" stroke="#38e1ff55" stroke-width="2"/>
  <g fill="#38e1ff"><circle cx="640" cy="830" r="5"/><circle cx="670" cy="830" r="5" fill="#5dffa0"/><circle cx="930" cy="830" r="5" fill="#ffb03a"/><circle cx="960" cy="830" r="5" class="blink"/></g>
  <g stroke="#38e1ff66" stroke-width="2" fill="none"><path d="M700 860H900"/><path d="M720 875H880"/></g>
  <g fill="#6a7c90"><circle cx="40" cy="120" r="4"/><circle cx="62" cy="330" r="4"/><circle cx="85" cy="540" r="4"/><circle cx="1560" cy="120" r="4"/><circle cx="1538" cy="330" r="4"/><circle cx="1515" cy="540" r="4"/></g>
</svg>`;

const $ = <T extends HTMLElement>(root: HTMLElement, sel: string): T => root.querySelector(sel) as T;

/** DOM-интерфейс поверх AR. Кнопки гасят beforexrselect, чтобы касание не считалось выбором в AR. */
export class Hud {
  firing = false;
  rocketHeld = false;
  private empPressed = false;
  onPause?: () => void;
  onResume?: () => void;
  onQuit?: () => void;
  private msgT = 0;
  private arrows = new Map<string, HTMLElement>();

  constructor(private root: HTMLElement) {
    root.innerHTML = `
      ${COCKPIT}
      <div class="dmg"></div>
      <div class="lockbox" data-b><i></i><span></span></div>
      <div class="top" data-b><span class="pill pause tap">‖</span><span class="pill wave"></span><span class="pill enemies"></span>
        <span class="pill cargo"></span><span class="pill gems"></span>
        <div class="bar hull"><i></i></div></div>
      <div class="cross" data-b></div>
      <div class="msg"></div>
      <div class="banner"></div>
      <div class="heat" data-b>ЗЕНИТКА<div class="bar"><i></i></div></div>
      <div class="fire tap" data-b>ОГОНЬ</div>
      <div class="slot rocket tap" data-b style="display:none"><svg viewBox="0 0 24 24"><use href="#w-rocket"/></svg><span class="ammo"></span><i class="ring"></i></div>
      <div class="slot emp tap" data-b style="display:none"><b>ϟ</b><span>ЭМИ</span><i class="cd"></i></div>
      <div class="arrows"></div>
      <div class="panel tap" data-p style="display:none"></div>
      <div class="end" style="display:none"></div>
      <div class="end pausebox" style="display:none"><div class="card"><h2>ПАУЗА</h2><div class="pinfo"></div>
        <div class="col"><button class="resume">Продолжить</button><button class="ghost quit">Выйти в меню</button></div></div></div>`;
    $(root, '.pause').addEventListener('click', () => this.onPause?.());
    $(root, '.resume').addEventListener('click', () => this.onResume?.());
    $(root, '.quit').addEventListener('click', () => this.onQuit?.());
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
    const rk = $(root, '.rocket');
    rk.addEventListener('pointerdown', (e) => { e.preventDefault(); this.rocketHeld = true; rk.classList.add('on'); });
    const rkUp = () => { this.rocketHeld = false; rk.classList.remove('on'); };
    rk.addEventListener('pointerup', rkUp);
    rk.addEventListener('pointercancel', rkUp);
    rk.addEventListener('pointerleave', rkUp);
    $(root, '.emp').addEventListener('pointerdown', (e) => { e.preventDefault(); this.empPressed = true; });
  }

  showBattle(on: boolean): void {
    for (const el of this.root.querySelectorAll<HTMLElement>('[data-b], .msg, .arrows')) el.style.display = on ? '' : 'none';
    // слоты доп. оружия — только для взятого в бой
    $(this.root, '.rocket').style.display = on && this.slots.rockets ? '' : 'none';
    $(this.root, '.emp').style.display = on && this.slots.emp ? '' : 'none';
    if (!on) this.firing = false;
  }

  // ─ подготовка ─
  showPrep(opts: { count: number; max: number; min: number; floorFound: boolean; onStart: () => void; onAuto: () => void }): void {
    const p = $(this.root, '.panel');
    p.style.display = '';
    p.innerHTML = `<p>${opts.floorFound
      ? `Фиолетовый веер — сектор порталов. Ставь груз в нём, касаясь пола (${opts.min}–${opts.max}). Поставлено: <b>${opts.count}</b>`
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

  /** Рамка вокруг врага на линии огня; null — цели нет. */
  setLock(lock: { x: number; y: number; size: number; label: string; weak?: boolean; state?: 'locking' | 'locked' } | null): void {
    const box = $(this.root, '.lockbox');
    const cross = $(this.root, '.cross');
    cross.classList.toggle('lock', lock !== null);
    if (!lock) { box.classList.remove('on'); return; }
    const s = Math.max(36, Math.min(260, lock.size));
    box.classList.add('on');
    box.classList.toggle('locking', lock.state === 'locking');
    box.classList.toggle('locked', lock.state === 'locked');
    box.style.left = `${lock.x * 100}%`;
    box.style.top = `${lock.y * 100}%`;
    box.style.width = box.style.height = `${s}px`;
    $(box, 'span').textContent = lock.label;
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

  /** Какие слоты доп. оружия показывать в этом бою. */
  private slots = { rockets: false, emp: false };
  setSlots(s: { rockets: boolean; emp: boolean }): void {
    this.slots = s;
    $(this.root, '.rocket').style.display = s.rockets ? '' : 'none';
    $(this.root, '.emp').style.display = s.emp ? '' : 'none';
    this.rocketHeld = false;
    this.empPressed = false;
  }

  /** Однократное нажатие ЭМИ (сбрасывается после чтения). */
  takeEmp(): boolean {
    const p = this.empPressed;
    this.empPressed = false;
    return p;
  }

  updateSlots(r: { ammo: number; lock: number; locked: boolean } | null, empCd: number | null): void {
    if (r && this.slots.rockets) {
      const el = $(this.root, '.rocket');
      $(el, '.ammo').textContent = `×${r.ammo}`;
      el.classList.toggle('empty', r.ammo <= 0);
      el.classList.toggle('locked', r.locked);
      ($(el, '.ring')).style.setProperty('--k', `${Math.round(r.lock * 100)}%`);
    }
    if (empCd !== null && this.slots.emp) {
      const el = $(this.root, '.emp');
      el.classList.toggle('cooling', empCd > 0);
      ($(el, '.cd')).style.setProperty('--k', `${Math.round(empCd * 100)}%`);
    }
  }

  showPause(on: boolean, info = ''): void {
    const p = $(this.root, '.pausebox');
    p.style.display = on ? '' : 'none';
    $(p, '.pinfo').textContent = info;
    if (on) this.firing = false;
  }

  setCockpit(on: boolean): void {
    $(this.root, '.cockpit').style.display = on ? '' : 'none';
  }

  showEnd(info: EndInfo, choose: (c: EndChoice) => void): void {
    this.firing = false;
    const e = $(this.root, '.end');
    e.style.display = '';
    const title = info.win ? 'СЕКТОР ОЧИЩЕН' : info.reason === 'hull' ? 'СВЯЗЬ ПОТЕРЯНА' : 'ГРУЗ УТАЩИЛИ';
    const sub = info.win ? `Сектор ${info.sector} · ${info.sectorName}` : `Сектор ${info.sector} · дошёл до волны ${info.wave}/${info.waves}`;
    const advice = info.win ? '' : info.reason === 'hull'
      ? 'Мара: сбивай сгустки и искры раньше — и укрепи стекло в Ангаре.'
      : 'Мара: сначала воры с грузом — их видно по лучу. Хваталке бей по руке.';
    e.innerHTML = `<div class="card endcard"><h2 class="${info.win ? 'win' : 'lose'}">${title}</h2>
      <div class="mute">${sub}</div>
      <div class="stars">${'★'.repeat(info.stars)}<span class="off">${'★'.repeat(3 - info.stars)}</span></div>
      <div class="endgrid">
        <table><tr><td>Сбито</td><td><b>${info.kills}</b></td></tr>
        <tr><td>Груз спасён</td><td><b>${info.cargoSaved}/${info.cargoTotal}</b></td></tr>
        <tr><td>Корпус</td><td><b>${info.hullLeft}%</b></td></tr>
        <tr><td>Точность</td><td><b>${info.accuracy}%</b></td></tr></table>
        <div class="col"><div class="reward">◆ ${info.crystals + info.bonus}${info.bonus ? `<div class="small mute">из них бонус за сектор ${info.bonus}</div>` : ''}</div>
        ${info.newEnemies.length ? `<button class="ghost" data-c="bestiary">Новые враги: ${info.newEnemies.join(', ')} ›</button>` : ''}</div>
      </div>
      ${advice ? `<div class="advice">${advice}</div>` : ''}
      <div class="row">
        ${info.canUpgrade ? '<button class="gold" data-c="hangar">Можно улучшить ›</button>' : '<button class="ghost" data-c="hangar">Ангар</button>'}
        <span class="grow"></span><button class="ghost" data-c="retry">${info.win ? 'Повторить' : 'Ещё раз'}</button>
        <button data-c="${info.win && info.hasNext ? 'next' : 'menu'}">${info.win && info.hasNext ? 'Дальше ›' : 'В меню'}</button>
      </div></div>`;
    for (const b of e.querySelectorAll<HTMLElement>('[data-c]')) b.onclick = () => choose(b.dataset.c as EndChoice);
  }

  hideEnd(): void {
    $(this.root, '.end').style.display = 'none';
    this.showPause(false);
  }
}
