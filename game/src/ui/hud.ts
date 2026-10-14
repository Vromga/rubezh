export interface Indicator { id: string; x: number; y: number; behind: boolean; danger: boolean }

export interface BattleView {
  wave: number; waves: number; left: number; hull: number; heat: number; overheated: boolean;
  cargo: ('ok' | 'lost')[]; kind: ('colonist' | 'crystal')[]; crystals: number;
}

export interface EndInfo {
  win: boolean; reason: string; kills: number; crystals: number; cores?: number; accuracy: number;
  cargoSaved: number; cargoTotal: number; hullLeft: number;
  stars: number; bonus: number; sector: number; sectorName: string; wave: number; waves: number;
  newEnemies: string[]; canUpgrade: boolean; hasNext: boolean; final?: boolean;
}

export type EndChoice = 'next' | 'hangar' | 'retry' | 'menu' | 'bestiary' | 'ending';

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
  /** зажатые ячейки оружия и однократные нажатия (по id оружия) */
  private held = new Set<string>();
  private pressed = new Set<string>();
  get rocketHeld(): boolean { return this.held.has('rockets'); }
  isHeld(id: string): boolean { return this.held.has(id); }
  onPause?: () => void;
  onResume?: () => void;
  onQuit?: () => void;
  onFloor?: (dy: number) => void;
  onRepair?: () => void;
  private msgT = 0;
  private arrows = new Map<string, HTMLElement>();

  constructor(private root: HTMLElement) {
    root.innerHTML = `
      ${COCKPIT}
      <div class="night"></div>
      <div class="space"></div>
      <div class="dmg"></div>
      <div class="bossbar" style="display:none"><b></b><div class="bar"><i></i></div></div>
      <div class="jammed" style="display:none">ПОМЕХИ · доп. оружие отключено</div>
      <div class="lockbox" data-b><i></i><span></span></div>
      <div class="top" data-b><span class="pill pause tap">‖</span><span class="pill wave"></span><span class="pill enemies"></span>
        <span class="pill cargo"></span><span class="pill gems"></span>
        <div class="bar hull"><i></i></div></div>
      <div class="cross" data-b></div>
      <div class="msg"></div>
      <div class="banner"></div>
      <div class="heat" data-b>ЗЕНИТКА<div class="bar"><i></i></div></div>
      <div class="fire tap" data-b>ОГОНЬ</div>
      <div class="slot tap" data-w="rockets" style="display:none"><svg viewBox="0 0 24 24"><use href="#w-rocket"/></svg><span class="ammo"></span><i class="ring"></i></div>
      <div class="slot tap" data-w="emp" style="display:none"><b>◎</b><span>ЭМИ</span><i class="cd"></i></div>
      <div class="slot tap" data-w="laser" style="display:none"><b>≈</b><span>ЛАЗЕР</span><i class="cd"></i></div>
      <div class="slot tap" data-w="tesla" style="display:none"><b>ϟ</b><span>ТЕСЛА</span><i class="cd"></i></div>
      <div class="slot passive" data-w="drone" style="display:none"><b>✦</b><span>ОСА</span></div>
      <div class="arrows"></div>
      <div class="repairbtn tap" style="display:none">✚ РЕМОНТ <span></span></div>
      <div class="panel tap" data-p style="display:none"></div>
      <div class="end" style="display:none"></div>
      <div class="end pausebox" style="display:none"><div class="card"><h2>ПАУЗА</h2><div class="pinfo"></div>
        <div class="col"><button class="resume">Продолжить</button>
        <div class="row floorrow"><span class="small">Пол съехал?</span><button class="ghost fup">Пол выше</button><button class="ghost fdown">Пол ниже</button></div>
        <button class="ghost quit">Выйти в меню</button></div></div></div>`;
    $(root, '.pause').addEventListener('click', () => this.onPause?.());
    $(root, '.resume').addEventListener('click', () => this.onResume?.());
    $(root, '.quit').addEventListener('click', () => this.onQuit?.());
    $(root, '.fup').addEventListener('click', () => this.onFloor?.(0.05));
    $(root, '.fdown').addEventListener('click', () => this.onFloor?.(-0.05));
    $(root, '.repairbtn').addEventListener('click', () => this.onRepair?.());
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
    for (const el of root.querySelectorAll<HTMLElement>('.slot.tap')) {
      const id = el.dataset.w!;
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); this.held.add(id); this.pressed.add(id); el.classList.add('on'); });
      const off = () => { this.held.delete(id); el.classList.remove('on'); };
      el.addEventListener('pointerup', off);
      el.addEventListener('pointercancel', off);
      el.addEventListener('pointerleave', off);
    }
  }

  private slotEl(id: string): HTMLElement { return $(this.root, `.slot[data-w="${id}"]`); }

  showBattle(on: boolean): void {
    for (const el of this.root.querySelectorAll<HTMLElement>('[data-b], .msg, .arrows')) el.style.display = on ? '' : 'none';
    // слоты доп. оружия — только для взятого в бой
    for (const el of this.root.querySelectorAll<HTMLElement>('.slot')) el.style.display = on && this.slots.includes(el.dataset.w!) ? '' : 'none';
    if (!on) {
      this.firing = false;
      this.setBoss(null);
      this.setRepair(null);
      this.setNight(false);
      this.setSpace(false);
      this.setJam(false);
    }
  }

  // ─ подготовка ─
  showPrep(opts: { count: number; max: number; min: number; floorFound: boolean; cam?: boolean; onStart: () => void; onAuto: () => void }): void {
    const p = $(this.root, '.panel');
    p.style.display = '';
    p.innerHTML = `<p>${opts.cam
      ? `Держи телефон на уровне груди. Наведи оранжевый кружок на пол перед собой и коснись экрана — там встанет груз (${opts.min}–${opts.max}). Поставлено: <b>${opts.count}</b>`
      : opts.floorFound
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

  /** Какое доп. оружие стоит в ячейках 1 и 2 в этом бою. */
  private slots: string[] = [];
  setSlots(ids: string[]): void {
    this.slots = ids;
    for (const el of this.root.querySelectorAll<HTMLElement>('.slot')) {
      const k = ids.indexOf(el.dataset.w!);
      el.style.display = k >= 0 ? '' : 'none';
      el.classList.toggle('s0', k === 0);
      el.classList.toggle('s1', k === 1);
    }
    this.held.clear();
    this.pressed.clear();
  }

  /** Однократное нажатие ячейки (сбрасывается после чтения). */
  takePress(id: string): boolean {
    const p = this.pressed.has(id);
    this.pressed.delete(id);
    return p;
  }
  takeEmp(): boolean { return this.takePress('emp'); }

  /** Кнопка ремкомплекта (между волнами): null — скрыть. */
  setRepair(kits: number | null): void {
    const el = $(this.root, '.repairbtn');
    el.style.display = kits ? '' : 'none';
    if (kits) $(el, 'span').textContent = `×${kits}`;
  }

  /** Полоса здоровья босса (null — скрыть). */
  setBoss(b: { name: string; frac: number; hidden: boolean; shielded?: boolean } | null): void {
    const el = $(this.root, '.bossbar');
    el.style.display = b ? '' : 'none';
    if (!b) return;
    const tag = b.shielded ? ' · ЩИТ: сбей узлы' : b.hidden ? ' · СКРЫТ' : '';
    $(el, 'b').textContent = b.name.toUpperCase() + tag;
    ($(el, 'i')).style.width = `${Math.max(0, b.frac) * 100}%`;
    el.classList.toggle('hidden', b.hidden || !!b.shielded);
  }

  /** Ночной сектор: затемнение краёв. */
  setNight(on: boolean): void { $(this.root, '.night').classList.toggle('on', on); }

  /** Орбита: фиолетовая дымка по краям. */
  setSpace(on: boolean): void { $(this.root, '.space').classList.toggle('on', on); }

  setJam(on: boolean): void {
    $(this.root, '.jammed').style.display = on ? '' : 'none';
    for (const el of this.root.querySelectorAll<HTMLElement>('.slot')) el.classList.toggle('jam', on);
  }

  /** Состояние ячеек: боезапас и захват ракет, перезарядки (0..1), нагрев лазера. */
  updateSlots(v: {
    rockets?: { ammo: number; lock: number; locked: boolean };
    emp?: number; tesla?: number; laser?: { heat: number; over: boolean }; drone?: boolean;
  }): void {
    if (v.rockets && this.slots.includes('rockets')) {
      const el = this.slotEl('rockets');
      $(el, '.ammo').textContent = `×${v.rockets.ammo}`;
      el.classList.toggle('empty', v.rockets.ammo <= 0);
      el.classList.toggle('locked', v.rockets.locked);
      ($(el, '.ring')).style.setProperty('--k', `${Math.round(v.rockets.lock * 100)}%`);
    }
    const cd = (id: string, k: number | undefined) => {
      if (k === undefined || !this.slots.includes(id)) return;
      const el = this.slotEl(id);
      el.classList.toggle('cooling', k > 0);
      ($(el, '.cd')).style.setProperty('--k', `${Math.round(k * 100)}%`);
    };
    cd('emp', v.emp);
    cd('tesla', v.tesla);
    if (v.laser && this.slots.includes('laser')) {
      cd('laser', v.laser.over ? v.laser.heat / 100 : 0);
      this.slotEl('laser').classList.toggle('hotbar', !v.laser.over && v.laser.heat > 60);
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
      ? 'Мара: сбивай сгустки и тараны раньше — и укрепи стекло в Ангаре.'
      : 'Мара: сначала воры с грузом — их видно по лучу. Хваталке бей по руке.';
    e.innerHTML = `<div class="card endcard"><h2 class="${info.win ? 'win' : 'lose'}">${title}</h2>
      <div class="mute">${sub}</div>
      <div class="stars">${'★'.repeat(info.stars)}<span class="off">${'★'.repeat(3 - info.stars)}</span></div>
      <div class="endgrid">
        <table><tr><td>Сбито</td><td><b>${info.kills}</b></td></tr>
        <tr><td>Груз спасён</td><td><b>${info.cargoSaved}/${info.cargoTotal}</b></td></tr>
        <tr><td>Корпус</td><td><b>${info.hullLeft}%</b></td></tr>
        <tr><td>Точность</td><td><b>${info.accuracy}%</b></td></tr></table>
        <div class="col"><div class="reward">◆ ${info.crystals + info.bonus}${info.cores ? ` · ◈ ${info.cores}` : ''}${info.bonus ? `<div class="small mute">из них бонус за сектор ${info.bonus}</div>` : ''}</div>
        ${info.newEnemies.length ? `<button class="ghost" data-c="bestiary">Новые враги: ${info.newEnemies.join(', ')} ›</button>` : ''}</div>
      </div>
      ${advice ? `<div class="advice">${advice}</div>` : ''}
      <div class="row">
        ${info.canUpgrade ? '<button class="gold" data-c="hangar">Можно улучшить ›</button>' : '<button class="ghost" data-c="hangar">Ангар</button>'}
        <span class="grow"></span><button class="ghost" data-c="retry">${info.win ? 'Повторить' : 'Ещё раз'}</button>
        ${info.win && info.final ? '<button class="gold" data-c="ending">Финал ›</button>'
          : `<button data-c="${info.win && info.hasNext ? 'next' : 'menu'}">${info.win && info.hasNext ? 'Дальше ›' : 'В меню'}</button>`}
      </div></div>`;
    for (const b of e.querySelectorAll<HTMLElement>('[data-c]')) b.onclick = () => choose(b.dataset.c as EndChoice);
  }

  hideEnd(): void {
    $(this.root, '.end').style.display = 'none';
    this.showPause(false);
  }
}
