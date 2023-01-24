import { FC } from 'react';
import { Reset } from './Reset';
import { Resize } from './Resize';
import { FooterProps } from './Footer.types';
import styles from './Footer.module.scss';

export const Footer: FC<FooterProps> = () => (
  <footer className={styles.footer}>
    <Reset />
    <Resize />
  </footer>
);
