import { Cell } from '../../shared/types';

export interface PlayerProps {
  value: Exclude<Cell, null>;
  completed: boolean;
  winner: Cell;
}

export interface PlayersProps {
  completed: boolean;
  winner: Cell;
}
