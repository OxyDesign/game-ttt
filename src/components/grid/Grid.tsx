/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { Cell } from '../cell';
import { getValidationGrid } from '../../utils';
import { AppState } from '../../shared/types';
import { GridProps } from './Grid.types';
import styles from './Grid.module.scss';

export const Grid: FC<GridProps> = () => {
  const dispatch = useDispatch();

  const grid = useSelector((state: AppState) => state.grid);
  const size = useSelector((state: AppState) => state.size);
  const player = useSelector((state: AppState) => state.player);
  const validationGrid = getValidationGrid(grid);
  const hasWinner = validationGrid.find((r) => r.find((c) => c));

  return (
    <div className={styles.grid}>
      {grid.map((row, i) => (
        <div key={`${size}-${i}`} className={cn(styles[`size-${size}`], styles.row, 'row')}>
          {row.map((cell, j) => (
            <Cell
              key={`${size}-${i}-${j}`}
              active={!hasWinner}
              value={cell}
              isInLine={validationGrid[i][j]}
              onClick={() =>
                dispatch({ type: 'SET_CELL', value: player, rowIndex: i, cellIndex: j })
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};
