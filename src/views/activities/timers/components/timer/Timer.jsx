import { useEffect, useState } from 'react';
import styles from './timer.module.css';
import { dateFormat, timerFormat } from './timerFormat';
import { BoxTimer, ButtonsTime, TimerSection } from './Utils';

export const Timer = ({ activity }) => {
  const classValue = `${styles.timer}`;

  useEffect(() => {
    if (activity.start) {
      console.log('- actividad actualizada -', activity);
    }
  }, [activity]);

  return (
    <div className={classValue}>
      <div
        className={styles.header}
      >{`${activity.title} - ${dateFormat(activity.createdAt)}`}</div>
      <div className={styles.body}>
        <TimerSection placeholder="total month time">
          <BoxTimer
            placeholder="total"
            timer={timerFormat(activity.month.total)}
          />
          <BoxTimer
            placeholder="focus"
            timer={timerFormat(activity.month.focus)}
          />
          <BoxTimer
            placeholder="break"
            timer={timerFormat(activity.month.break)}
          />
        </TimerSection>
        {/* 
        <TimerSection placeholder="total current time">
          <BoxTimer
            placeholder="total"
            timer={timerFormat(test_value.total_current.total)}
          />
          <BoxTimer
            placeholder="focus"
            timer={timerFormat(test_value.total_current.focus)}
          />
          <BoxTimer
            placeholder="break"
            timer={timerFormat(test_value.total_current.break)}
          />
        </TimerSection> */}
        {activity.start ? (
          <TimerSection placeholder="current time">
            {/* <BoxTimer placeholder="focus" timer={timerFormat(activity.start)} /> */}
            <CurrentTimer />
          </TimerSection>
        ) : null}
        <ButtonsTime activity={activity} />
      </div>
      <div className={styles.footer} />
    </div>
  );
};

const CurrentTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const savedStartTime = localStorage.getItem('startTime');
    if (savedStartTime) {
      const startTimeInt = parseInt(savedStartTime, 10);
      console.log('Se obtuvo! ', startTimeInt);

      setStartTime(startTimeInt);
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    let interval = null;
    if (isRunning && startTime) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, startTime]);

  return (
    <div>
      <div>{timerFormat(elapsedTime)}</div>
    </div>
  );
};
