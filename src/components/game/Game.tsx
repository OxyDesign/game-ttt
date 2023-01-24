import { FC } from 'react';
import { GameProps } from './Game.types';
import { Grid } from '../grid';
import { Header } from '../header';
import { Footer } from '../footer';
import styles from './Game.module.scss';

export const Game: FC<GameProps> = () => (
  <div className={styles.game}>
    <Header />
    <Grid />
    <Footer />
  </div>
);
