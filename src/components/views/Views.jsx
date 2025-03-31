import PageLayoutBody from '../pageLayoutUtils/Body';
import styles from './view.module.css';

export const StorageView = () => {
  return (
    <PageLayoutBody.View viewName="StorageView" sizeView="small">
      <div className={styles.storage}>Storage View</div>
    </PageLayoutBody.View>
  );
};

export const ManageView = () => {
  return (
    <PageLayoutBody.View viewName="ManageView" sizeView="small">
      <div className={styles.manage}>Manage View</div>
    </PageLayoutBody.View>
  );
};
