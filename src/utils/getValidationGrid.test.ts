import { getValidationGrid } from '.';
import { Grid, ValidationGrid } from '../shared/types';

describe('Grid validation', () => {
  const tests: { name: string; grid: Grid; validationGrid: ValidationGrid }[] = [
    {
      name: 'Size 3: 0 line (all null)',
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      validationGrid: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
    },
    {
      name: 'Size 3: 0 line (x and o)',
      grid: [
        ['x', 'o', 'x'],
        ['o', 'o', 'x'],
        ['o', 'x', 'o'],
      ],
      validationGrid: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
    },
    {
      name: 'Size 3: 1 horizontal line of x',
      grid: [
        ['x', 'x', 'x'],
        [null, 'o', null],
        [null, null, 'o'],
      ],
      validationGrid: [
        [true, true, true],
        [false, false, false],
        [false, false, false],
      ],
    },
    {
      name: 'Size 3: 2 horizontal lines of o',
      grid: [
        ['x', null, null],
        ['o', 'o', 'o'],
        ['o', 'o', 'o'],
      ],
      validationGrid: [
        [false, false, false],
        [true, true, true],
        [true, true, true],
      ],
    },
    {
      name: 'Size 3: 1 vertical line of o',
      grid: [
        [null, 'o', null],
        [null, 'o', 'x'],
        ['x', 'o', null],
      ],
      validationGrid: [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ],
    },
    {
      name: 'Size 3: 2 vertical lines of x',
      grid: [
        ['o', 'x', 'x'],
        [null, 'x', 'x'],
        ['o', 'x', 'x'],
      ],
      validationGrid: [
        [false, true, true],
        [false, true, true],
        [false, true, true],
      ],
    },
    {
      name: 'Size 3: 1 descending diagonal of x',
      grid: [
        ['x', 'o', 'x'],
        [null, 'x', null],
        ['o', 'x', 'x'],
      ],
      validationGrid: [
        [true, false, false],
        [false, true, false],
        [false, false, true],
      ],
    },
    {
      name: 'Size 3: 1 ascending diagonal of o',
      grid: [
        ['x', 'o', 'o'],
        [null, 'o', null],
        ['o', 'x', 'x'],
      ],
      validationGrid: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
      ],
    },
    {
      name: 'Size 3: 2 diagonals of o',
      grid: [
        ['o', 'x', 'o'],
        [null, 'o', null],
        ['o', 'x', 'o'],
      ],
      validationGrid: [
        [true, false, true],
        [false, true, false],
        [true, false, true],
      ],
    },
    {
      name: 'Size 3: 1 descending diagonal & 1 horizontal line of o',
      grid: [
        ['o', 'o', 'o'],
        [null, 'o', null],
        ['x', 'x', 'o'],
      ],
      validationGrid: [
        [true, true, true],
        [false, true, false],
        [false, false, true],
      ],
    },
    {
      name: 'Size 3: 1 ascending diagonal & 1 vertical line of x',
      grid: [
        [null, 'x', 'x'],
        ['o', 'x', null],
        ['x', 'x', 'o'],
      ],
      validationGrid: [
        [false, true, true],
        [false, true, false],
        [true, true, false],
      ],
    },
    {
      name: 'Size 3: All x',
      grid: [
        ['x', 'x', 'x'],
        ['x', 'x', 'x'],
        ['x', 'x', 'x'],
      ],
      validationGrid: [
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ],
    },
    {
      name: 'Size 6: 0 line (all null)',
      grid: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      validationGrid: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: 0 line (x and o)',
      grid: [
        ['x', 'o', 'x', 'x', 'o', 'x'],
        ['o', 'o', 'x', 'o', 'o', 'x'],
        ['o', 'x', 'o', 'o', 'x', 'o'],
        ['x', 'o', 'x', 'x', 'o', 'x'],
        ['o', 'o', 'x', 'o', 'o', 'x'],
        ['o', 'x', 'o', 'o', 'x', 'o'],
      ],
      validationGrid: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: 1 horizontal line of x',
      grid: [
        [null, 'o', null, null, 'o', null],
        ['x', 'x', 'x', 'x', 'x', 'x'],
        [null, 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', null, 'o', 'o', 'o'],
        [null, 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', null, 'o', 'o', 'o'],
      ],
      validationGrid: [
        [false, false, false, false, false, false],
        [true, true, true, true, true, true],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: 2 horizontal lines of o',
      grid: [
        ['x', null, null, 'x', null, null],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['x', 'x', null, 'x', 'x', null],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['x', null, null, 'x', null, null],
        [null, 'x', null, 'x', null, null],
      ],
      validationGrid: [
        [false, false, false, false, false, false],
        [true, true, true, true, true, true],
        [false, false, false, false, false, false],
        [true, true, true, true, true, true],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: 1 vertical line of o',
      grid: [
        [null, null, 'o', null, null, 'o'],
        [null, null, 'o', 'x', 'o', 'x'],
        ['x', 'o', 'o', null, 'o', null],
        ['o', 'o', 'o', null, 'x', null],
        ['x', null, 'o', 'o', 'x', null],
        ['x', 'x', 'o', null, 'x', 'o'],
      ],
      validationGrid: [
        [false, false, true, false, false, false],
        [false, false, true, false, false, false],
        [false, false, true, false, false, false],
        [false, false, true, false, false, false],
        [false, false, true, false, false, false],
        [false, false, true, false, false, false],
      ],
    },
    {
      name: 'Size 6: 3 vertical lines of x',
      grid: [
        ['o', 'x', null, 'x', null, 'x'],
        [null, 'x', 'o', 'x', 'o', 'x'],
        ['o', 'x', 'x', 'x', 'x', 'x'],
        ['o', 'x', null, 'x', null, 'x'],
        [null, 'x', 'o', 'x', null, 'x'],
        ['x', 'x', 'x', 'x', null, 'x'],
      ],
      validationGrid: [
        [false, true, false, true, false, true],
        [false, true, false, true, false, true],
        [false, true, false, true, false, true],
        [false, true, false, true, false, true],
        [false, true, false, true, false, true],
        [false, true, false, true, false, true],
      ],
    },
    {
      name: 'Size 6: 1 descending diagonal of x',
      grid: [
        ['x', 'o', 'x', null, null, 'o'],
        [null, 'x', 'o', 'o', 'o', null],
        ['o', 'x', 'x', null, 'x', null],
        ['o', 'x', 'x', 'x', null, null],
        ['o', 'x', 'x', null, 'x', null],
        ['o', 'x', 'x', null, null, 'x'],
      ],
      validationGrid: [
        [true, false, false, false, false, false],
        [false, true, false, false, false, false],
        [false, false, true, false, false, false],
        [false, false, false, true, false, false],
        [false, false, false, false, true, false],
        [false, false, false, false, false, true],
      ],
    },
    {
      name: 'Size 6: 1 ascending diagonal of o',
      grid: [
        ['x', 'o', 'o', 'x', 'o', 'o'],
        ['x', 'o', 'o', 'x', 'o', null],
        ['x', 'o', 'o', 'o', 'o', null],
        ['x', 'o', 'o', 'x', null, 'x'],
        [null, 'o', null, 'x', 'o', null],
        ['o', 'x', 'x', 'x', 'o', null],
      ],
      validationGrid: [
        [false, false, false, false, false, true],
        [false, false, false, false, true, false],
        [false, false, false, true, false, false],
        [false, false, true, false, false, false],
        [false, true, false, false, false, false],
        [true, false, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: 2 diagonals of x',
      grid: [
        ['x', 'x', 'o', 'o', 'x', 'x'],
        [null, 'x', null, 'o', 'x', 'o'],
        ['o', 'o', 'x', 'x', 'o', null],
        ['o', 'x', 'x', 'x', 'x', 'o'],
        [null, 'x', null, 'o', 'x', 'o'],
        ['x', 'x', 'o', null, 'o', 'x'],
      ],
      validationGrid: [
        [true, false, false, false, false, true],
        [false, true, false, false, true, false],
        [false, false, true, true, false, false],
        [false, false, true, true, false, false],
        [false, true, false, false, true, false],
        [true, false, false, false, false, true],
      ],
    },
    {
      name: 'Size 6: 1 descending diagonal & 1 horizontal line of o',
      grid: [
        ['o', 'x', 'x', 'x', 'x', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        [null, 'x', 'o', 'x', 'x', null],
        ['x', 'x', 'o', 'o', 'x', 'o'],
        ['x', null, 'x', 'o', 'o', 'x'],
        ['x', 'x', null, 'o', null, 'o'],
      ],
      validationGrid: [
        [true, false, false, false, false, false],
        [true, true, true, true, true, true],
        [false, false, true, false, false, false],
        [false, false, false, true, false, false],
        [false, false, false, false, true, false],
        [false, false, false, false, false, true],
      ],
    },
    {
      name: 'Size 6: 1 ascending diagonal & 1 vertical line of x',
      grid: [
        [null, 'x', 'x', null, 'o', 'x'],
        ['o', 'x', 'x', 'x', 'x', null],
        [null, 'x', 'x', 'x', 'o', 'x'],
        [null, 'x', 'x', null, 'o', null],
        ['o', 'x', 'o', 'o', null, 'o'],
        ['x', 'x', 'o', null, 'o', null],
      ],
      validationGrid: [
        [false, true, false, false, false, true],
        [false, true, false, false, true, false],
        [false, true, false, true, false, false],
        [false, true, true, false, false, false],
        [false, true, false, false, false, false],
        [true, true, false, false, false, false],
      ],
    },
    {
      name: 'Size 6: All o',
      grid: [
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o'],
      ],
      validationGrid: [
        [true, true, true, true, true, true],
        [true, true, true, true, true, true],
        [true, true, true, true, true, true],
        [true, true, true, true, true, true],
        [true, true, true, true, true, true],
        [true, true, true, true, true, true],
      ],
    },
  ];

  tests.forEach(({ name, grid, validationGrid }) => {
    test(name, () => {
      expect(getValidationGrid(grid)).toEqual(validationGrid);
    });
  });
});
