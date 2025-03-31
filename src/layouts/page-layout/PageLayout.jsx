import { Outlet } from 'react-router-dom';
import { PageLayoutHeader } from '../../components';
import { usePageLayout } from '../../context/page-layout/PageLayoutProvider';
import { ManageIcon, RefreshIcon, StorageIcon } from '../../icons';
import styles from './page-layout.module.css';

export default function PageLayout() {
  const { headerButtons, refreshView } = usePageLayout();

  return (
    <div className={styles.pageLayoutGrid}>
      <div className={styles.header}>
        <div className={styles.customButtons}>{headerButtons}</div>
        <div className={styles.space}>Space</div>
        <div className={styles.defaultButtons}>
          <PageLayoutHeader>
            <PageLayoutHeader.Button
              viewName="StorageView"
              icon={<StorageIcon />}
            />
            <PageLayoutHeader.Button
              viewName="ManageView"
              icon={<ManageIcon />}
            />

            <PageLayoutHeader.Button
              icon={<RefreshIcon />}
              onClick={refreshView}
            />
          </PageLayoutHeader>
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}
