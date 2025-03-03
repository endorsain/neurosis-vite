import { PageLayout } from '../../../layouts';
import styles from './history-page.module.css';

export default function HistoryPage() {
  return (
    <PageLayout>
      <div>Header history</div>
      <div className={`${styles.history} custom_scrollbar_y`}>
        <ItemHistory />
        <ItemHistory />
        <ItemHistory />
      </div>
    </PageLayout>
  );
}

const ItemHistory = () => {
  return (
    <div className={styles.itemGrid}>
      <div className={styles.header}>
        <p className={styles.year}>Year</p>
      </div>
      <div className={styles.body}>Months</div>
    </div>
  );
};
