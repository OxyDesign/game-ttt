import { createEmptyGrid } from '.';
import { Grid } from '../shared/types';

describe('Create empty grid', () => {
  const tests: { size: number; grid: Grid }[] = [
    {
      size: 3,
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    },
    {
      size: 4,
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ],
    },
    {
      size: 5,
      grid: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ],
    },
    {
      size: 6,
      grid: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
    },
  ];

  tests.forEach(({ size, grid }) => {
    test(`of size ${size}`, () => {
      expect(createEmptyGrid(size)).toEqual(grid);
    });
  });
});
