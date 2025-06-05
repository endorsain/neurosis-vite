import React from 'react';
import { useDispatch } from 'react-redux';
import { startActivity } from '../../../../../store/slices';
import styles from './utils.module.css';

export const TimerSection = ({ children, placeholder }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={styles.timerSection}>
      {placeholder ? <div className={styles.header}>{placeholder}</div> : null}
      <div className={styles.body}>{childrenArray}</div>
    </div>
  );
};

export const BoxTimer = ({ placeholder, timer }) => {
  return (
    <div className={styles.box}>
      <div>{placeholder}</div>
      <span>{timer}</span>
    </div>
  );
};

export const ButtonsTime = ({ activity }) => {
  const dispatch = useDispatch();

  const onFocus = () => {
    console.log(activity);
    const now = Date.now();
    localStorage.setItem('startTime', now.toString());
    console.log('se guardo startTime!');
    dispatch(startActivity({ activity, start: now, type: 'focus' }));
  };

  // focus, break, cancel, terminar
  return (
    <div className={styles.buttons}>
      <button onClick={() => onFocus()}>focus</button>
      <button>break</button>
      <button>cancel</button>
      <button>finish</button>
    </div>
  );
};
