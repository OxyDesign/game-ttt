import { Grid } from '../shared/types';
import { createEmptyGrid } from '../utils';

export interface DefaultState {
    v: number;
    size: 3 | 4 | 5 | 6;
    grid: Grid,
}

export const defaultState: DefaultState = {
    v: 1,
    size: 3,
    grid: createEmptyGrid(3)
};
