import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      App
      <div className={styles.weather}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}

export default App;
