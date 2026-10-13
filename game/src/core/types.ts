import type { V3 } from './vec';

export type PartKind = 'core' | 'armor' | 'engine' | 'weapon' | 'grabber' | 'sensor';
export type Behavior = 'thief' | 'kamikaze' | 'shooter';

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
  /** Масштаб модели и зон попадания (1 — как в описании частей). */
  scale?: number;
}

export interface PartState { def: PartDef; hp: number; alive: boolean }

export type EnemyState = 'emerge' | 'seek' | 'carry' | 'flee' | 'orbit' | 'attack';

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
  dead: boolean;
}

export interface Cargo {
  id: number;
  kind: 'colonist' | 'crystal';
  pos: V3;
  state: 'idle' | 'carried' | 'falling' | 'lost';
  vy: number;
}

export interface Bolt { id: number; pos: V3; vel: V3; life: number; from: V3 }

export interface SpawnDef { t: number; enemy: string; portal?: number }
export interface WaveDef { name: string; hint: string; spawns: SpawnDef[] }

export type GameEvent =
  | { type: 'shot'; origin: V3; end: V3; hit: boolean }
  | { type: 'enemyHit'; enemyId: number; partId: string; point: V3; weak: boolean }
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
  | { type: 'portalWarn'; portal: number }
  | { type: 'waveStart'; index: number; total: number; name: string }
  | { type: 'waveClear'; index: number }
  | { type: 'message'; text: string }
  | { type: 'overheat' }
  | { type: 'cooled' }
  | { type: 'end'; result: 'win' | 'lose'; reason: 'hull' | 'cargo' | 'waves' };
