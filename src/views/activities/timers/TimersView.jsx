import { PageLayoutBody } from '../../../components';
import { Chronometer } from './Chronometer';
import styles from './timersView.module.css';

const TimersView = () => {
  return (
    <PageLayoutBody.View viewName="TimersView" placeholderView="Timer view">
      <div className={styles.timersGrid}>
        <div className={styles.header}>
          <TimersForm />
        </div>
        <div className={styles.body}>
          <Chronometer />
        </div>
      </div>
    </PageLayoutBody.View>
  );
};

const TimersForm = () => {
  return (
    <div className={styles.form}>
      <input className={styles.input} type="text" />
      <button className={styles.add}>agregar</button>
      <button className={styles.filter}>filtrar</button>
    </div>
  );
};

export default TimersView;
