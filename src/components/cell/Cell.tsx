import { FC } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { X, O, IconProps } from '../icons';
import { AppState } from '../../shared/types';
import { CellProps } from './Cell.types';
import styles from './Cell.module.scss';

const iconMap: { x: FC<IconProps>; o: FC<IconProps> } = {
  x: X,
  o: O,
};

const EmptyCell: FC<IconProps> = ({ className }) => <span className={className}>&nbsp;</span>;

export const Cell: FC<CellProps> = ({ active, value, isInLine, onClick = () => {} }) => {
  const size = useSelector((state: AppState) => state.size);
  const cellHasValue = value !== null;
  const cellClassName = cn(
    styles[`size-${size}`],
    styles.cell,
    isInLine ? styles.valid : cellHasValue ? styles[value] : styles.empty,
  );
  const Icon = cellHasValue ? iconMap[value] : EmptyCell;

  return (
    <button
      disabled={!active || cellHasValue}
      type="button"
      className={cellClassName}
      onClick={onClick}
    >
      <Icon className={styles.cellContent} />
    </button>
  );
};
