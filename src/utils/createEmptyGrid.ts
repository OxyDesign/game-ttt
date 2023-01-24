import { Grid } from '../shared/types';

export const createEmptyGrid = (size: number): Grid =>
  Array.from(Array(size)).map(() => Array.from(Array(size)).map(() => null));
