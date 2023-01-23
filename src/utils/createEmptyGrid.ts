import { Grid } from '../shared/types';

export const createEmptyGrid = (size: number): Grid => Array.from(Array(size)).map(row => Array.from(Array(size)).map(cell => null));
