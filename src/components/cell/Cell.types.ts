import { Cell } from '../../shared/types';

export interface CellProps {
  active: Boolean;
  value: Cell;
  isInLine: Boolean;
  onClick: () => void;
}
