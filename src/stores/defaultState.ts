import { AppState } from '../shared/types';
import { gameSizes } from '../shared/constants';
import { createEmptyGrid } from '../utils';

const smallestSize = gameSizes[0];

export const defaultState: AppState = {
  v: 3,
  size: smallestSize,
  player: 'x',
  grid: createEmptyGrid(smallestSize),
};
