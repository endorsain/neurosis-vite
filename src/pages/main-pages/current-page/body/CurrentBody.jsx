import React from 'react';
import styles from './current-body.module.css';

export const CurrentBody = ({ change, children }) => {
  const [timerview, graphview, storeview] = React.Children.toArray(children);

  return (
    <div className={styles.currentBodyGrid}>
      <div className={`${change === 'timer' ? styles.changeView : ''}`}>
        {timerview}
      </div>
      <div className={`${change === 'graph' ? styles.changeView : ''}`}>
        {graphview}
      </div>
      <div className={`${change === 'store' ? styles.changeView : ''}`}>
        {storeview}
      </div>
    </div>
  );
};
