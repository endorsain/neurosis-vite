import React from 'react';
import { GraphicsIcon, StorageIcon, TimerIcon } from '../../../../icons';
import styles from './current-header.module.css';

export const CurrentHeader = props => {
  const { change, setChange } = props;

  return (
    <div className={styles.currentHeaderGrid}>
      <ButtonHeader setChange={setChange} select="timer">
        <TimerIcon />
      </ButtonHeader>
      <ButtonHeader setChange={setChange} select="graph">
        <GraphicsIcon />
      </ButtonHeader>

      <ChangeHeader change={change}>
        <div>Leisure Content</div>
        <div>Graph Content</div>
        <div>Store Content</div>
      </ChangeHeader>

      <ButtonHeader setChange={setChange} select="store">
        <StorageIcon />
      </ButtonHeader>
    </div>
  );
};

const ButtonHeader = ({ setChange, select, children }) => {
  return (
    <button className="button_2" onClick={() => setChange(select)}>
      {children}
    </button>
  );
};

const ChangeHeader = ({ change, children }) => {
  const [timerview, graphview, storeview] = React.Children.toArray(children);

  return (
    <div className={styles.changeViewGrid}>
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
