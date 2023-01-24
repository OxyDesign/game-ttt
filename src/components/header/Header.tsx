import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getValidationGrid } from '../../utils';
import { AppState, Cell } from '../../shared/types';
import { Players } from './Players';
import { Score } from './Score';
import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';

export const Header: FC<HeaderProps> = () => {
  const grid = useSelector((state: AppState) => state.grid);
  const validationGrid = getValidationGrid(grid);
  const hasNoEmptyCells = !grid.find((r) => r.find((c) => c === null) === null);
  let winner: Cell = null;

  validationGrid.find((r, i) =>
    r.find((c, j) => {
      if (c) {
        winner = grid[i][j];
      }
      return c;
    }),
  );

  return (
    <header className={styles.header}>
      <Players completed={hasNoEmptyCells} winner={winner} />
      <Score completed={hasNoEmptyCells} winner={winner} />
    </header>
  );
};
