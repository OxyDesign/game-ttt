import { setCellValueInGrid } from './setCellValueInGrid';
import { Grid, Cell } from '../shared/types';

const createEmptyGrid = (size: number) => Array.from(Array(size)).map(row => Array.from(Array(size)).map(cell => null));

describe('Grid addition', () => {
    const tests: {size: number, value: Cell, row: number, col: number, grid: Grid}[] = [
        {
            size: 3,
            value: 'x',
            row: 0,
            col: 0,
            grid: [
                ['x', null, null],
                [null, null, null],
                [null, null, null],
            ]
        },
        {
            size: 3,
            value: 'o',
            row: 0,
            col: 2,
            grid: [
                [null, null, 'o'],
                [null, null, null],
                [null, null, null],
            ]
        },
        {
            size: 3,
            value: 'o',
            row: 2,
            col: 2,
            grid: [
                [null, null, null],
                [null, null, null],
                [null, null, 'o'],
            ]
        },
        {
            size: 3,
            value: 'x',
            row: 2,
            col: 0,
            grid: [
                [null, null, null],
                [null, null, null],
                ['x', null, null],
            ]
        },
        {
            size: 3,
            value: 'x',
            row: 1,
            col: 1,
            grid: [
                [null, null, null],
                [null, 'x', null],
                [null, null, null],
            ]
        },
        {
            size: 4,
            value: 'x',
            row: 0,
            col: 0,
            grid: [
                ['x', null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
            ]
        },
        {
            size: 4,
            value: 'o',
            row: 3,
            col: 3,
            grid: [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, 'o'],
            ]
        },
        {
            size: 4,
            value: 'o',
            row: 2,
            col: 1,
            grid: [
                [null, null, null, null],
                [null, null, null, null],
                [null, 'o', null, null],
                [null, null, null, null],
            ]
        },
        {
            size: 5,
            value: 'x',
            row: 0,
            col: 0,
            grid: [
                ['x', null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
            ]
        },
        {
            size: 5,
            value: 'x',
            row: 4,
            col: 0,
            grid: [
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                ['x', null, null, null, null],
            ]
        },
        {
            size: 5,
            value: 'x',
            row: 0,
            col: 4,
            grid: [
                [null, null, null, null, 'x'],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
            ]
        },
        {
            size: 6,
            value: 'o',
            row: 0,
            col: 0,
            grid: [
                ['o', null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
            ]
        },
        {
            size: 6,
            value: 'x',
            row: 4,
            col: 3,
            grid: [
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, 'x', null, null],
                [null, null, null, null, null, null],
            ]
        },
        {
            size: 6,
            value: 'x',
            row: 5,
            col: 5,
            grid: [
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, 'x'],
            ]
        },
    ];

    tests.forEach(({ size, value, row, col, grid }) => {
        test(`Size ${size}: adds ${value} at row ${row} / col ${col}`, () => {
            expect(setCellValueInGrid(
                createEmptyGrid(size),
                value,
                row,
                col
            )).toEqual(grid);
        });
    })
});