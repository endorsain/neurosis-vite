import styles from './chronometer.module.css';

export const Chronometer = () => {
  const test_value = {
    total_month: {
      focus: 1241254214,
      break: 123515124,
      get total() {
        return this.focus + this.break;
      },
    },
    total_current: {
      focus: 5153539,
      break: 5153551,
      get total() {
        return this.focus + this.break;
      },
    },
    current: {
      focus: 123123,
      break: 12512,
    },
  };
  return (
    <div className={styles.chronometer}>
      <div className={styles.header}>nombre de la actividad - 01/19/25</div>
      <div className={styles.body}>
        <TotalTime time={test_value.total_month} text="month time" />
        <TotalTime time={test_value.total_current} text="current time" />
      </div>
    </div>
  );
};

const TotalTime = ({ time, text }) => {
  function formatTimeFromMilliseconds(milliseconds, format = 'hh:mm:ss') {
    // Cálculos base
    const ms = milliseconds % 1000;
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    // Formateo según el tipo solicitado
    switch (format) {
      case 'd:hh:mm':
        return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      case 'hh:mm':
        const displayHours = format === 'hh:mm' ? totalHours : hours;
        return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      case 'hh:mm:ss':
        return `${totalHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      case 'hh:mm:ss:ms':
        return `${totalHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;

      default:
        return `${totalHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }
  return (
    <div className={styles.totalTime}>
      <div className={styles.headerTime}>{text}</div>
      <div className={styles.bodyTime}>
        <div className={styles.boxTime}>
          <div>total</div>
          <span>{formatTimeFromMilliseconds(time.total, 'd:hh:mm')}</span>
        </div>
        <div className={styles.boxTime}>
          <div>focus</div>
          <span>{formatTimeFromMilliseconds(time.focus, 'd:hh:mm')}</span>
        </div>
        <div className={styles.boxTime}>
          <div>break</div>
          <span>{formatTimeFromMilliseconds(time.break, 'd:hh:mm')}</span>
        </div>
      </div>
    </div>
  );
};
