import { Outlet } from 'react-router-dom';
import { ManageIcon, RefreshIcon, StorageIcon } from '../../assets/icons';
import { PageLayoutHeader } from '../../components';
import { usePageLayout } from '../../context';
import styles from './pageLayout.module.css';

export default function PageLayout() {
  const { headerButtons, refreshView, placeholderView } = usePageLayout();

  return (
    <div className={styles.pageLayoutGrid}>
      <div className={styles.header}>
        <div className={styles.customButtons}>{headerButtons}</div>
        <div className={styles.space}>{placeholderView}</div>
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
              onClick={() => refreshView()}
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
