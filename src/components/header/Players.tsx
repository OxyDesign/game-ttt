import { FC } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { AppState } from '../../shared/types';
import { PlayerProps, PlayersProps } from './Players.types';
import styles from './Players.module.scss';

const Player: FC<PlayerProps> = ({ completed, winner, value }) => {
  const player = useSelector((state: AppState) => state.player);
  const playerClassName = cn(
    styles.player,
    styles[value],
    value === winner && styles.winner,
    !winner && !completed && player === value && styles.activePlayer,
  );

  return <div className={playerClassName}>Player {value.toUpperCase()}</div>;
};

export const Players: FC<PlayersProps> = ({ completed, winner }) => (
  <div className={styles.players}>
    <Player value="x" winner={winner} completed={completed} />
    <Player value="o" winner={winner} completed={completed} />
  </div>
);
