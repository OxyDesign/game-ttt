import { gameSizes } from './constants';

export interface AppState {
  v: number;
  size: (typeof gameSizes)[number];
  grid: Grid;
  player: 'x' | 'o';
}

export type Cell = null | 'x' | 'o';
export type Grid = Cell[][];

export type ValidationCell = boolean;
export type ValidationGrid = ValidationCell[][];
