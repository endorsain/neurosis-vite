import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayoutBody } from '../../../components';
import { AddActivityForm, Timer } from './components';
import styles from './timersView.module.css';

const TimersView = () => {
  // Prueba de vista de timers.
  const dispatch = useDispatch();
  const { activities, current } = useSelector(state => state.activities);

  useEffect(() => {
    console.log('actividades', activities);
  }, [activities]);

  return (
    <PageLayoutBody.View viewName="TimersView" placeholderView="Timer view">
      <div className={styles.timersGrid}>
        <div className={styles.header}>
          <AddActivityForm />
        </div>
        <div className={styles.body}>
          {activities.map((activity, index) => (
            <Timer activity={activity} key={index} />
          ))}
        </div>
      </div>
    </PageLayoutBody.View>
  );
};

export default TimersView;
