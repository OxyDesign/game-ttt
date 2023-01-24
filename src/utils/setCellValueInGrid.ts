import { Grid, Cell } from '../shared/types';

export const setCellValueInGrid = (
  grid: Grid,
  value: Cell,
  rowIndex: number,
  cellIndex: number,
): Grid => {
  const row = grid[rowIndex];

  return [
    ...grid.slice(0, rowIndex),
    [...row.slice(0, cellIndex), value, ...row.slice(cellIndex + 1)],
    ...grid.slice(rowIndex + 1),
  ];
};
