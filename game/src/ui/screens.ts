import { ENEMIES } from '../data/enemies';
import { BESTIARY, SECTORS, UPGRADES, WEAPONS, type SectorDef } from '../meta/catalog';
import {
  buyUpgrade, buyWeapon, defaultSave, level, nextCost, storeSave, upgradeValue, type SaveData,
} from '../meta/save';

export type ScreenName = 'splash' | 'menu' | 'campaign' | 'briefing' | 'arsenal' | 'hangar' | 'bestiary' | 'settings' | 'ending';

export interface ScreenHooks {
  startAR(sector: number): void;
  startDemo(sector: number): void;
  onSettings(): void;
}

const MARA_LINES = [
  'Разломы стабилизируются. Хор вернётся — будь готов.',
  'Хваталки любят кристаллы. Береги их.',
  'Стрелки бьют по стеклу. Сгустки можно сбить зениткой.',
  'Чем больше груза спасёшь, тем больше звёзд.',
  'Ангар открыт. Улучшения не помешают.',
];

const ICON_IDS: Record<string, string> = { scout: 'e-scout', spark: 'e-spark', grabber: 'e-grabber', shooter: 'e-shooter', shield: 'e-shield', bomber: 'e-bomber',
  jammer: 'e-jammer', repair: 'e-repair', jumper: 'e-jumper', ghost: 'e-ghost', collector: 'e-collector',
  crab: 'e-crab', harpooner: 'e-harpooner', hive: 'e-hive', sapper: 'e-sapper', spitter: 'e-spitter', leviathan: 'e-leviathan', reaper: 'e-reaper',
  spider: 'e-spider', moth: 'e-moth', roller: 'e-roller', tick: 'e-tick', hunter: 'e-hunter', nexus: 'e-nexus', node: 'e-nexus' };
const icon = (id: string | undefined, cls = 'eicon') => `<svg class="${cls}" viewBox="0 0 60 40"><use href="#${id ? ICON_IDS[id] ?? 'e-unknown' : 'e-unknown'}"/></svg>`;
const wIcon = (w: { id: string; icon: string }) => (w.id === 'rockets'
  ? '<svg class="wicon" viewBox="0 0 24 24"><use href="#w-rocket"/></svg>'
  : `<span class="wicon">${w.icon}</span>`);
const stars = (n: number) => `<span class="stars">${'★'.repeat(n)}<span class="off">${'★'.repeat(3 - n)}</span></span>`;
const pips = (l: number, max: number) => `<span class="pips">${'●'.repeat(l)}<span class="o">${'●'.repeat(max - l)}</span></span>`;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

/** Экраны вне боя: меню, кампания, брифинг, арсенал, ангар, бестиарий, настройки. */
export class Screens {
  arStatus = 'Проверяю AR…';
  arOk = false;
  private cur: ScreenName = 'menu';
  private sector = 1;
  private sel = '';
  private tab: 'flak' | 'hull' | 'weap' = 'flak';
  private mara = MARA_LINES[Math.floor(Math.random() * MARA_LINES.length)];

  constructor(private root: HTMLElement, public save: SaveData, private hooks: ScreenHooks) {
    root.addEventListener('click', (e) => this.onClick(e));
    root.addEventListener('input', (e) => this.onInput(e));
  }

  show(name: ScreenName = this.cur, arg?: string | number): void {
    this.cur = name;
    if (name === 'briefing' && typeof arg === 'number') this.sector = arg;
    if ((name === 'arsenal' || name === 'bestiary') && typeof arg === 'string') this.sel = arg;
    this.root.style.display = '';
    this.root.innerHTML = this.render();
    this.root.scrollTop = 0;
  }

  hide(): void { this.root.style.display = 'none'; }

  private persist(): void { storeSave(this.save); }

  private nextSector(): SectorDef {
    const open = SECTORS.filter((x) => x.waves && x.id <= this.save.unlocked);
    return open.find((x) => !(this.save.sectors[x.id]?.stars)) ?? open[open.length - 1];
  }

  private top(title: string, back: ScreenName | null, extra = ''): string {
    return `<div class="s-top">${back ? `<button class="pill" data-go="${back}">‹ Назад</button>` : ''}<span class="s-title">${title}</span>${extra}
      <span class="grow"></span><span class="pill gem">${this.save.crystals}</span><span class="pill core">${this.save.cores}</span></div>`;
  }

  private render(): string {
    switch (this.cur) {
      case 'splash': return this.splash();
      case 'menu': return this.menu();
      case 'campaign': return this.campaign();
      case 'briefing': return this.briefing();
      case 'arsenal': return this.arsenal();
      case 'hangar': return this.hangar();
      case 'bestiary': return this.bestiary();
      case 'ending': return this.ending();
      case 'settings': return this.settings();
    }
  }

  private splash(): string {
    setTimeout(() => { if (this.cur === 'splash') this.show('menu'); }, 2600);
    return `<div class="splash" data-go="menu">
      <svg class="splash-crack" viewBox="0 0 200 90" preserveAspectRatio="none"><g stroke="#fff" stroke-width=".35" fill="none" opacity=".85"><path d="M100 45 L88 30 L80 12 M100 45 L118 36 L140 30 L160 18 M100 45 L110 60 L108 80 M100 45 L82 52 L60 58 L40 70 M100 45 L96 62 L88 75"/><path d="M92 38 L108 40 L106 52 L94 51Z" stroke-width=".2"/></g></svg>
      <div class="splash-glow"></div>
      <svg class="splash-bug" viewBox="0 0 60 40"><use href="#e-scout"/></svg>
      <div class="logo splash-logo">ПОСЛЕДНИЙ РУБЕЖ</div>
      <div class="mute splash-tap">коснись, чтобы продолжить</div>
    </div>`;
  }

  private menu(): string {
    const n = this.nextSector();
    return `<div class="s-bg menu-bg"><div class="portal-deco"></div></div>
      <div class="s-top"><span class="grow"></span><span class="pill gem">${this.save.crystals}</span><span class="pill core">${this.save.cores}</span><button class="pill" data-go="settings">⚙</button></div>
      <div class="menu-main">
        <div class="logo">ПОСЛЕДНИЙ<br>РУБЕЖ</div>
        <div class="mute">Оператор-7 · пройдено секторов: ${Object.values(this.save.sectors).filter((x) => x.stars > 0).length} из 5</div>
        <button class="btn big" data-go="briefing" data-arg="${n.id}">▶ В БОЙ · Сектор ${n.id} «${n.name}»</button>
        <div class="row wrap">
          <button class="btn ghost" data-go="campaign">Кампания</button>
          <button class="btn ghost" data-go="arsenal">Арсенал</button>
          <button class="btn ghost" data-go="hangar">Ангар</button>
          <button class="btn ghost" data-go="bestiary">Бестиарий</button>
          ${this.save.sectors[5]?.stars ? '<button class="btn ghost" data-go="ending">Финал</button>' : ''}
        </div>
        <div class="small mute">${esc(this.arStatus)}</div>
      </div>
      <div class="mara-line card"><div class="mara"></div><div><b class="accent">Мара</b><br>«${this.mara}»</div></div>`;
  }

  private campaign(): string {
    const cards = SECTORS.map((x) => {
      const open = x.id <= this.save.unlocked && x.waves;
      const st = this.save.sectors[x.id];
      const cur = open && x.id === this.nextSector().id;
      return `<div class="card sector ${open ? '' : 'locked'} ${cur ? 'current' : ''}" ${open ? `data-go="briefing" data-arg="${x.id}"` : ''}>
        <div class="${cur ? 'accent' : 'mute'}">Сектор ${x.id}${cur ? ' · сейчас' : ''}</div>
        <b class="sname">${x.name}</b><div class="mute small">«${x.title}»${x.boss ? ' · босс' : ''}</div>
        <div class="sector-pic">${open ? '<div class="portal-mini"></div>' : '<svg class="lockic" viewBox="0 0 24 24"><use href="#i-lock"/></svg>'}</div>
        ${open ? `${stars(st?.stars ?? 0)}<div class="mute small">${st ? `рекорд: волна ${st.bestWave}/${x.waves!.length}` : `${x.waves!.length} волн`}</div>`
          : `<div class="mute small">${x.waves ? `пройди сектор ${x.id - 1}` : 'в разработке'}</div>`}
      </div>`;
    }).join('');
    return `<div class="s-bg"></div>${this.top('КАМПАНИЯ', 'menu')}<div class="sectors">${cards}</div>`;
  }

  private briefing(): string {
    const sec = SECTORS.find((x) => x.id === this.sector)!;
    const ids = [...new Set(sec.waves!.flatMap((w) => w.spawns.map((s) => s.enemy)))];
    const threats = ids.map((id) => {
      const b = BESTIARY.find((x) => x.enemyId === id);
      return `<div class="threat">${icon(id)}<div><span class="tag ${b?.cls ?? 'L'}">${b?.cls ?? ''}</span> ${ENEMIES[id].name}</div></div>`;
    }).join('');
    const ready = WEAPONS.filter((w) => w.id !== 'flak' && this.save.owned.includes(w.id) && w.ready);
    const slot = (i: number) => {
      const id = this.save.loadout[i];
      const w = WEAPONS.find((x) => x.id === id);
      if (w) return `<div class="card wrow on" data-act="slot" data-arg="${i}">${wIcon(w)}<div class="grow"><b>${w.name}</b><div class="mute small">слот ${i + 1} · коснись, чтобы сменить</div></div></div>`;
      return `<div class="card wrow dashed" ${ready.length ? `data-act="slot" data-arg="${i}"` : 'data-go="arsenal"'}><span class="wicon mute">+</span><div class="grow mute">${ready.length ? 'Пустой слот — выбрать' : 'Доп. оружие — купи в Арсенале'}</div><span class="mute small">слот ${i + 1}</span></div>`;
    };
    const rec = sec.recommend ? WEAPONS.find((w) => w.id === sec.recommend) : null;
    return `<div class="s-bg brief-bg"></div>${this.top(`СЕКТОР ${sec.id} · ${sec.name.toUpperCase()}`, 'campaign')}
      <div class="brief">
        <div class="card pad col">
          <div class="row top"><div class="mara"></div><div><b class="accent">Мара</b><p>«${sec.briefing}»</p></div></div>
          <div class="mute">Угрозы сектора</div><div class="threats">${threats}</div>
          <div class="mute small push">${sec.waves!.length} волн · груз: 3–5 · за первое прохождение <span class="gem">${60 * sec.id}</span></div>
        </div>
        <div class="card pad col">
          <b>Вооружение</b>
          <div class="card wrow">${wIcon(WEAPONS[0])}<div class="grow"><b>Зенитка</b><div class="mute small">урон ${upgradeValue(this.save, 'flak.damage')} · ${upgradeValue(this.save, 'flak.rate')} выстр/с</div></div></div>
          ${slot(0)}${slot(1)}
          ${rec && !this.save.owned.includes(rec.id) ? `<div class="small ok">Мара советует: ${rec.name}${rec.ready ? '' : ' (скоро)'}</div>` : ''}
          <button class="btn big push" data-act="ar" ${this.arOk ? '' : 'disabled'}>Подготовить комнату ›</button>
          <button class="btn ghost" data-act="demo">Тест без камеры</button>
        </div>
      </div>`;
  }

  private arsenal(): string {
    const sel = WEAPONS.find((w) => w.id === this.sel) ?? WEAPONS[1];
    const list = WEAPONS.map((w) => {
      const own = this.save.owned.includes(w.id);
      const locked = w.unlockSector && this.save.unlocked < w.unlockSector;
      const right = w.id === 'flak' ? `<span class="ok">ур. ${level(this.save, 'flak.damage') + 1}</span>`
        : own ? '<span class="ok">куплено</span>' : locked ? `<span class="mute">сектор ${w.unlockSector}</span>` : `<span class="gem">${w.price}</span>`;
      return `<div class="card wrow ${w.id === sel.id ? 'on' : ''} ${locked ? 'locked' : ''}" data-go="arsenal" data-arg="${w.id}">${wIcon(w)}<b class="grow">${w.name}</b>${right}</div>`;
    }).join('');
    const own = this.save.owned.includes(sel.id);
    const locked = sel.unlockSector && this.save.unlocked < sel.unlockSector;
    const btn = own ? (sel.id === 'flak' ? '<button class="btn" data-go="hangar">Улучшить в Ангаре ›</button>' : '<button class="btn" disabled>Куплено</button>')
      : locked ? `<button class="btn" disabled>Откроется в секторе ${sel.unlockSector}</button>`
        : `<button class="btn big" data-act="buyw" data-arg="${sel.id}" ${this.save.crystals < sel.price ? 'disabled' : ''}>Купить · ◆ ${sel.price}</button>`;
    return `<div class="s-bg"></div>${this.top('АРСЕНАЛ', 'menu')}
      <div class="split"><div class="col list">${list}</div>
        <div class="card pad col">
          <div class="row"><span class="wbig">${wIcon(sel)}</span><div><b class="sname">${sel.name}</b>${sel.ready ? '' : '<div class="tag M">скоро в бою</div>'}</div></div>
          <div class="mute">${sel.desc}</div>
          <div>Лучше против: <b>${sel.best}</b></div>
          <div class="push">${btn}</div>
        </div></div>`;
  }

  private hangar(): string {
    const avail = UPGRADES.filter((u) => u.group === this.tab && (!u.requires || this.save.owned.includes(u.requires)));
    const rows = (avail.length ? '' : '<div class="card pad mute">Купи ракеты или ЭМИ в Арсенале — здесь появятся их улучшения.</div>') + avail.map((u) => {
      const l = level(this.save, u.key);
      const max = u.costs.length;
      const cost = nextCost(this.save, u.key);
      const now = u.values[l];
      const nxt = cost !== null ? u.values[l + 1] : null;
      return `<div class="card urow"><div class="grow"><b>${u.name}</b><div class="mute small">${u.fmt(now)}${nxt !== null ? ` → ${u.fmt(nxt)}` : ''}</div></div>
        ${pips(l, max)}${cost === null ? '<button class="btn" disabled>МАКС</button>' : `<button class="btn" data-act="buyu" data-arg="${u.key}" ${this.save.crystals < cost ? 'disabled' : ''}>◆ ${cost}</button>`}</div>`;
    }).join('');
    const tabs = `<div class="tabs"><span class="${this.tab === 'flak' ? 'on' : ''}" data-act="tab" data-arg="flak">Зенитка</span><span class="${this.tab === 'weap' ? 'on' : ''}" data-act="tab" data-arg="weap">Оружие</span><span class="${this.tab === 'hull' ? 'on' : ''}" data-act="tab" data-arg="hull">Корпус</span></div>`;
    const preview = this.tab === 'weap'
      ? `<svg viewBox="0 0 24 24" class="hpic" style="max-width:40%"><use href="#w-rocket"/></svg><div class="mute">ДОП. ОРУЖИЕ</div>`
      : this.tab === 'flak'
      ? `<svg viewBox="0 0 120 80" class="hpic"><g fill="#2a323c" stroke="#5a6878" stroke-width=".6"><rect x="20" y="44" width="80" height="16" rx="3"/><rect x="34" y="34" width="20" height="12" rx="2"/><rect x="66" y="34" width="20" height="12" rx="2"/></g><g fill="#7b8794"><rect x="41" y="8" width="5" height="28" rx="2"/><rect x="74" y="8" width="5" height="28" rx="2"/></g><rect x="30" y="50" width="60" height="2" fill="#38e1ff"/></svg><div class="mute">ЗЕНИТКА</div>`
      : `<svg viewBox="0 0 120 80" class="hpic"><path d="M10 10 H110 V70 H10Z" fill="#9ef1" stroke="#38e1ff" stroke-width="1.5"/><path d="M60 40 L48 26 M60 40 L76 30 M60 40 L66 58 M60 40 L44 50" stroke="#fff8" stroke-width=".8"/></svg><div class="mute">БРОНЯ СТЕКЛА · корпус ${upgradeValue(this.save, 'hull.armor')}</div>`;
    return `<div class="s-bg"></div>${this.top('АНГАР', 'menu', tabs)}
      <div class="split"><div class="card pad center col">${preview}</div><div class="col list">${rows}</div></div>`;
  }

  /** Финал: Мара предлагает выбор; от него зависят только последние слова. */
  private ending(): string {
    const e = this.save.ending;
    const body = !e
      ? `<p>«Ядро разбито. Флот Хора ослеп — без него Разломы держатся на честном слове. Я могу сделать одно из двух, Оператор.»</p>
         <p>«Схлопнуть все Разломы разом. Хор никогда не найдёт дорогу обратно — и я тоже: часть меня останется по ту сторону.»</p>
         <p>«Или оставить один Разлом открытым и забрать технологию Ядра. С ней Земля перестанет быть чьим-то складом. Но дверь будет открыта в обе стороны.»</p>
         <div class="row wrap"><button class="btn big" data-act="ending" data-arg="close">Закрыть Разломы</button>
         <button class="btn big ghost" data-act="ending" data-arg="take">Забрать технологию</button></div>`
      : e === 'close'
        ? `<p>«Разломы закрываются один за другим. В комнатах снова тихо — просто комнаты.»</p>
           <p>«Колонисты возвращаются домой. Я… остаюсь с той стороны. Не грусти, Оператор-7. Ты сделал то, ради чего тебя звали Рубежом.»</p>
           <p class="accent">Связь потеряна. Земля свободна.</p>`
        : `<p>«Технология Ядра у нас. Энергия, щиты, порталы — всё, чем Хор нас „инвентаризировал“.»</p>
           <p>«Один Разлом остаётся открытым. Пусть Хор знает: теперь за ним следят с этой стороны. Я рядом, Оператор-7. Мы только начали.»</p>
           <p class="accent">Рубеж стоит. Разлом под охраной.</p>`;
    return `<div class="s-bg menu-bg"><div class="portal-deco"></div></div>${this.top('ФИНАЛ', 'menu')}
      <div class="card pad col" style="max-width:44em;margin:0 auto">
        <div class="row top"><div class="mara"></div><div><b class="accent">Мара</b>${body}</div></div>
        ${e ? `<div class="mute small">Спасибо за игру! Сектора можно перепройти на три звезды, а в Бестиарии — открыть всех ${BESTIARY.length}.</div>
        <div class="row wrap"><button class="btn" data-go="menu">В меню</button><button class="btn ghost" data-act="ending" data-arg="">Выбрать заново</button></div>` : ''}
      </div>`;
  }

  private bestiary(): string {
    const open = (b: typeof BESTIARY[number]) => !!(b.enemyId && this.save.seen[b.enemyId]);
    const cnt = BESTIARY.filter(open).length;
    const sel = BESTIARY.find((b) => String(b.n) === this.sel) ?? BESTIARY.find(open) ?? BESTIARY[0];
    const cells = BESTIARY.map((b) => `<div class="card cell ${String(b.n) === String(sel.n) ? 'on' : ''}" data-go="bestiary" data-arg="${b.n}">
      ${icon(open(b) ? b.enemyId : undefined)}<span class="tag ${b.cls}">${open(b) ? b.name : b.cls}</span></div>`).join('');
    const isOpen = open(sel);
    const info = isOpen
      ? `<div class="pic">${icon(sel.enemyId, 'eicon big')}</div>
         <div class="row"><b class="sname">${sel.name}</b><span class="tag ${sel.cls}">${{ L: 'лёгкий', M: 'средний', H: 'тяжёлый', B: 'босс' }[sel.cls]}</span></div>
         <div class="mute">${sel.desc}</div><div><span class="warn">Слабое место:</span> ${sel.weak}</div>
         <div class="mute small push">Сбито: <b>${this.save.seen[sel.enemyId!].kills}</b> · впервые: ${this.save.seen[sel.enemyId!].first}</div>`
      : `<div class="pic">${icon(undefined, 'eicon big')}</div><b class="sname">???</b><div class="mute">Ещё не встречен. Класс: <span class="tag ${sel.cls}">${sel.cls}</span></div>`;
    return `<div class="s-bg"></div>${this.top('БЕСТИАРИЙ', 'menu', `<span class="mute">открыто ${cnt} / 24</span>`)}
      <div class="split wide"><div class="grid24">${cells}</div><div class="card pad col">${info}</div></div>`;
  }

  private settings(): string {
    const s = this.save.settings;
    const tog = (k: string, v: boolean, label: string) => `<label class="row"><span class="grow">${label}</span><input type="checkbox" data-set="${k}" ${v ? 'checked' : ''}></label>`;
    const rng = (k: string, v: number, label: string) => `<label class="col">${label}<input type="range" min="0" max="100" value="${Math.round(v * 100)}" data-set="${k}"></label>`;
    return `<div class="s-bg"></div>${this.top('НАСТРОЙКИ', 'menu')}
      <div class="cols3">
        <div class="card pad col"><b class="accent">Управление</b>${tog('lefty', s.lefty, 'Левша (кнопки слева)')}${tog('vibration', s.vibration, 'Вибрация')}</div>
        <div class="card pad col"><b class="accent">Звук</b>${rng('volume', s.volume, 'Громкость')}</div>
        <div class="card pad col"><b class="accent">Экран</b>${rng('cracks', s.cracks, 'Сила трещин')}${tog('cockpit', s.cockpit, 'Каркас кабины')}
          <button class="btn ghost danger push" data-act="reset">Сбросить прогресс</button></div>
      </div>`;
  }

  private onClick(e: Event): void {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-go],[data-act]');
    if (!t || (t as HTMLButtonElement).disabled) return;
    const arg = t.dataset.arg;
    if (t.dataset.go) {
      const name = t.dataset.go as ScreenName;
      this.show(name, name === 'briefing' && arg ? Number(arg) : arg);
      return;
    }
    switch (t.dataset.act) {
      case 'ar': this.hooks.startAR(this.sector); break;
      case 'demo': this.hooks.startDemo(this.sector); break;
      case 'buyw': if (arg && buyWeapon(this.save, arg)) { this.persist(); this.show(); } break;
      case 'buyu': if (arg && buyUpgrade(this.save, arg)) { this.persist(); this.show(); } break;
      case 'tab': this.tab = arg as 'flak' | 'hull' | 'weap'; this.show(); break;
      case 'ending':
        this.save.ending = arg === 'close' || arg === 'take' ? arg : undefined;
        this.persist();
        this.show();
        break;
      case 'slot': {
        const i = Number(arg);
        const ready = WEAPONS.filter((w) => w.id !== 'flak' && w.ready && this.save.owned.includes(w.id)).map((w) => w.id);
        const opts: (string | null)[] = [null, ...ready.filter((id) => !this.save.loadout.includes(id) || this.save.loadout[i] === id)];
        const cur = opts.indexOf(this.save.loadout[i]);
        this.save.loadout[i] = opts[(cur + 1) % opts.length];
        this.persist();
        this.show();
        break;
      }
      case 'reset':
        if (confirm('Сбросить весь прогресс? Кристаллы, улучшения и сектора пропадут.')) {
          const keep = this.save.settings;
          this.save = { ...defaultSave(), settings: keep };
          this.persist();
          this.show('menu');
        }
        break;
      default: break;
    }
  }

  private onInput(e: Event): void {
    const el = e.target as HTMLInputElement;
    const k = el.dataset.set as keyof SaveData['settings'] | undefined;
    if (!k) return;
    const s = this.save.settings as unknown as Record<string, number | boolean>;
    s[k] = el.type === 'checkbox' ? el.checked : Number(el.value) / 100;
    this.persist();
    this.hooks.onSettings();
  }
}
