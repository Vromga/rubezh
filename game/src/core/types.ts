import type { V3 } from './vec';

export type PartKind = 'core' | 'armor' | 'engine' | 'weapon' | 'grabber' | 'sensor' | 'shield';
export type Behavior = 'thief' | 'kamikaze' | 'shooter' | 'bomber' | 'jammer' | 'repair' | 'boss'
  | 'harpoon' | 'hive' | 'acid' | 'stomper' | 'reaper' | 'core' | 'node';

export interface PartDef { id: string; kind: PartKind; hp: number; off: V3; r: number }

export interface EnemyDef {
  id: string;
  name: string;
  cls: 'L' | 'M' | 'H' | 'B';
  hp: number;
  speed: number;
  /** Радиус зоны попадания (м). */
  radius: number;
  behavior: Behavior;
  reward: number;
  parts: PartDef[];
  /** урон при таране (камикадзе) */
  contactDamage?: number;
  /** Масштаб модели и зон попадания (1 — как в описании частей). */
  scale?: number;
  /** прыгун: мерцает и телепортируется к цели */
  blink?: boolean;
  /** невидимость циклами: сколько секунд скрыт / виден */
  cloak?: { hidden: number; shown: number };
  /** ходит по полу: высота корпуса над полом, м (порталы — на полу) */
  walk?: number;
  /** взрыв при гибели: радиус и урон по соседям */
  blast?: { r: number; dmg: number };
  /** размах зигзага в полёте (мотылёк) */
  zigzag?: number;
  /** прилипает к грузу на N секунд и исчезает с ним (клещ) */
  latch?: number;
  /** катит груз по полу перед собой (болтун) */
  push?: boolean;
  /** пока жив — остальные воры быстрее на эту долю (мотылёк) */
  buff?: number;
  /** параметры прыжков, если отличаются от прыгуна */
  hop?: { period: number; dist: number };
}

export interface PartState { def: PartDef; hp: number; alive: boolean }

export type EnemyState = 'emerge' | 'seek' | 'carry' | 'flee' | 'orbit' | 'attack' | 'bomb' | 'jam' | 'repair' | 'boss'
  | 'harpoon' | 'reel' | 'hive' | 'acid' | 'stomp' | 'reaper' | 'core' | 'node';

export interface Enemy {
  id: number;
  def: EnemyDef;
  pos: V3;
  vel: V3;
  yaw: number;
  hp: number;
  parts: PartState[];
  state: EnemyState;
  t: number;
  portal: number;
  cargoId: number | null;
  targetCargo: number | null;
  fireCd: number;
  orbitAng: number;
  falling: boolean;
  /** оглушение ЭМИ, сек */
  stun: number;
  dead: boolean;
  /** портал ухода, открытый для этого врага */
  exitId: number | null;
  /** невидимость 0 (виден) … 1 (невидим); при > 0.6 в него нельзя прицелиться */
  cloak: number;
  /** ЭМИ временно снимает невидимость, с */
  reveal: number;
  /** генератор невидимости разбит */
  noCloak: boolean;
  /** до следующего прыжка (прыгун), с */
  blinkCd: number;
  /** кого чинит ремонтник */
  beamTo: number | null;
  /** таймер фаз (невидимость, босс) */
  phaseT: number;
  /** номер цикла босса */
  cycle: number;
  /** под щитом: урон не проходит (Хор-Ядро, пока живы узлы) */
  shielded: boolean;
  /** кому принадлежит (узел → ядро) */
  owner: number | null;
  /** элита: золотая подсветка, ×2 здоровья, ×3 награда, ядро ◈ */
  elite: boolean;
}

/** Портал: 'in' — вторжение (открывается заранее), 'out' — уход (открывается перед бегством). */
export interface Portal {
  id: number;
  pos: V3;
  kind: 'in' | 'out';
  state: 'opening' | 'open' | 'closing';
  /** время в текущем состоянии, с */
  t: number;
  /** для 'out' — враг, который в него уходит */
  owner: number | null;
  /** для 'in' — когда закрыться (время мира) */
  closeAt: number;
  /** лежит на полу (для шагающих) */
  floor?: boolean;
}

/** Трос гарпуна / луч захвата: тянет груз к врагу; перебивается стрельбой. */
export interface Tether { id: number; enemyId: number; cargoId: number; hp: number }

export interface Cargo {
  id: number;
  kind: 'colonist' | 'crystal';
  pos: V3;
  state: 'idle' | 'carried' | 'falling' | 'lost';
  vy: number;
}

export interface Rocket { id: number; pos: V3; vel: V3; target: number | null; life: number }

export interface Mine { id: number; pos: V3; vy: number }

export interface Bolt { id: number; pos: V3; vel: V3; life: number; from: V3; acid?: boolean }

export interface SpawnDef { t: number; enemy: string; portal?: number }
export interface WaveDef { name: string; hint: string; spawns: SpawnDef[] }

export type GameEvent =
  | { type: 'shot'; origin: V3; end: V3; hit: boolean }
  | { type: 'enemyHit'; enemyId: number; partId: string; point: V3; weak: boolean; quiet?: boolean }
  | { type: 'partDestroyed'; enemyId: number; partId: string; point: V3 }
  | { type: 'enemyKilled'; enemyId: number; pos: V3; reward: number; defId: string; byPlayer: boolean }
  | { type: 'enemyEscaped'; enemyId: number }
  | { type: 'explosion'; pos: V3; size: number }
  | { type: 'playerHit'; from: V3; dmg: number; hull: number }
  | { type: 'boltFired'; from: V3 }
  | { type: 'boltShot'; pos: V3 }
  | { type: 'telegraph'; enemyId: number; pos: V3 }
  | { type: 'cargoGrabbed'; cargoId: number; pos: V3 }
  | { type: 'cargoDropped'; cargoId: number; pos: V3 }
  | { type: 'cargoLost'; cargoId: number; pos: V3 }
  | { type: 'portalOpen'; id: number; pos: V3; kind: 'in' | 'out' }
  | { type: 'portalClose'; id: number; kind: 'in' | 'out' }
  | { type: 'jam'; pos: V3 }
  | { type: 'blink'; enemyId: number; from: V3; to: V3 }
  | { type: 'cloakBroken'; enemyId: number }
  | { type: 'tether'; enemyId: number; cargoId: number }
  | { type: 'tetherCut'; pos: V3 }
  | { type: 'acidHit' }
  | { type: 'shake'; power: number }
  | { type: 'brood'; pos: V3; n: number }
  | { type: 'tesla'; points: V3[] }
  | { type: 'droneShot'; from: V3; to: V3 }
  | { type: 'waveStart'; index: number; total: number; name: string }
  | { type: 'waveClear'; index: number }
  | { type: 'message'; text: string }
  | { type: 'overheat' }
  | { type: 'cooled' }
  | { type: 'lockOn'; enemyId: number }
  | { type: 'mineDropped'; pos: V3 }
  | { type: 'mineBlast'; pos: V3; destroyed: number }
  | { type: 'rocketFired'; from: V3 }
  | { type: 'emp'; pos: V3; stunned: number }
  | { type: 'end'; result: 'win' | 'lose'; reason: 'hull' | 'cargo' | 'waves' };
