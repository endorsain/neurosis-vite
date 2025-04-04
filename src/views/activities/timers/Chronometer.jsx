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
      focus: 134124,
      break: 213123,
      get total() {
        return this.focus + this.break;
      },
    },
    current: {
      focus: 123123,
      break: 12512,
    },
  };

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
    <div className={styles.chronometer}>
      <div className={styles.header}>nombre de la actividad - 01/19/25</div>
      <div className={styles.body}>
        <div className={styles.totalMonth}>
          <span className={styles.xd1}>
            {formatTimeFromMilliseconds(
              test_value.total_month.total,
              'd:hh:mm'
            )}
          </span>
          <span className={styles.xd2}>
            {formatTimeFromMilliseconds(
              test_value.total_month.focus,
              'd:hh:mm'
            )}
          </span>
          <div className={styles.xd2}>
            {formatTimeFromMilliseconds(
              test_value.total_month.break,
              'd:hh:mm'
            )}
          </div>
        </div>
        {/*         <div className={styles.totalCurrent}>
          <div>
            {formatTimeFromMilliseconds(
              test_value.total_current.total,
              'hh:mm'
            )}
          </div>
          <div>
            {formatTimeFromMilliseconds(
              test_value.total_current.focus,
              'hh:mm'
            )}
          </div>
          <div>
            {formatTimeFromMilliseconds(
              test_value.total_current.break,
              'hh:mm'
            )}
          </div>
        </div>
        <div className={styles.current}>
          <div>
            {formatTimeFromMilliseconds(test_value.current.focus, 'hh:mm:ss')}
          </div>
          <div>
            {formatTimeFromMilliseconds(test_value.current.break, 'hh:mm:ss')}
          </div>
        </div>
        <div className={styles.buttons}>
          <button>boton 1</button>
          <button>boton 2</button>
        </div> */}
      </div>
    </div>
  );
};
