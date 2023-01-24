import React from 'react';
import { Game } from './components';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Game />
  </div>
);

export default App;
