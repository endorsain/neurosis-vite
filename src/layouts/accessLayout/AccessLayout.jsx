import { Outlet } from 'react-router-dom';
import styles from './accessLayout.module.css';

export default function UserAccessLayout() {
  return (
    <div className={styles.accessLayoutGrid}>
      <div className={styles.box}>1</div>
      <div className={styles.box}>2</div>
      <div className={styles.box}>3</div>
      <div className={styles.box}>4</div>
      <div className={styles.children}>
        <Outlet />
      </div>
      <div className={styles.box}>5</div>
      <div className={styles.box}>6</div>
      <div className={styles.box}>7</div>
      <div className={styles.box}>8</div>
    </div>
  );
}
