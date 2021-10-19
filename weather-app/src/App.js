import React from 'react';
import Current from './components/Current';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current />
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}

export default App;
