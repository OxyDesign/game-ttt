import { Grid, ValidationGrid } from '../shared/types';

export const getValidationGrid = (grid: Grid): ValidationGrid => {
    const lineLength = grid.length;
    const lastIndex = lineLength - 1;
    const validGrid = Array.from(Array(lineLength)).map(row => Array.from(Array(lineLength)).map(cell => false));

    // Check Rows
    for (let i = 0; i < lineLength; i++) {
        let val;

        for (let j = 0; j < lineLength; j++) {
            const cell = grid[i][j];

            if (!val) val = cell;

            if (!cell || val !== cell) break;

            if (j === lastIndex) {
                validGrid[i] = validGrid[i].map(cell => true);
            }
        }
    }

    // Check Cols
    for (let i = 0; i < lineLength; i++) {
        let val;

        for (let j = 0; j < lineLength; j++) {
            const cell = grid[j][i];

            if (!val) val = cell;

            if (!cell || val !== cell) break;

            if (j === lastIndex) {
                validGrid.forEach(row => row[i] = true);
            }
        }
    }

    // Check Descending Diagonal
    for (let i = 0, val; i < lineLength; i++) {
        const cell = grid[i][i];

        if (!val) val = cell;

        if (!cell || val !== cell) break;

        if (i === lastIndex) {
            validGrid.forEach((row, j) => row[j] = true);
        }
    }

    // Check Ascending Diagonal
    for (let i = 0, val; i < lineLength; i++) {
        const cell = grid[i][lastIndex - i];

        if (!val) val = cell;

        if (!cell || val !== cell) break;

        if (i === lastIndex) {
            validGrid.forEach((row, j) => row[lastIndex - j] = true);
        }
    }


    return validGrid;
};
