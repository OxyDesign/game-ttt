import { FC } from 'react';
import cn from 'classnames';
import { ScoreProps } from './Score.types';
import styles from './Score.module.scss';

export const Score: FC<ScoreProps> = ({ completed, winner }) => (
  <div className={styles.score}>
    {winner !== null ? (
      <span className={cn(styles.message, styles.win)}>Player {winner.toUpperCase()} won!</span>
    ) : completed ? (
      <span className={cn(styles.message, styles.draw)}>Draw!</span>
    ) : null}
  </div>
);
