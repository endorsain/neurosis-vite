import { Outlet } from 'react-router-dom';
import Header from '../../context/page-layout/PageLayoutHeader';
import { usePageLayout } from '../../context/page-layout/PageLayoutProvider';
import { ManageIcon, RefreshIcon, StorageIcon } from '../../icons';
import styles from './page-layout.module.css';

export default function PageLayout({ children }) {
  const { changeView, headerButtons, refreshView } = usePageLayout();

  return (
    <div className={styles.pageLayoutGrid}>
      <div className={styles.header}>
        <div className={styles.customButtons}>{headerButtons}</div>
        <div className={styles.space}>Space</div>
        <div className={styles.defaultButtons}>
          <Header>
            <Header.Button buttonView="StorageView">
              <StorageIcon />
            </Header.Button>
            <Header.Button buttonView="ManageView">
              <ManageIcon />
            </Header.Button>
            <Header.Button onClick={refreshView}>
              <RefreshIcon />
            </Header.Button>
          </Header>
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}
