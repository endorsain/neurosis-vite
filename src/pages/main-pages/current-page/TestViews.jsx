import { PageLayoutBody } from '../../../components';
import styles from './testView.module.css';

export const CommonView1 = () => {
  return (
    <PageLayoutBody.View viewName="CommonView1">
      <div className={styles.view1}>
        <h1>Vista 1</h1>
        <p>Esto es vista 1</p>
      </div>
    </PageLayoutBody.View>
  );
};

export const CommonView2 = () => {
  return (
    <PageLayoutBody.View viewName="CommonView2">
      <div className={styles.view2}>
        <h1>Vista 2</h1>
        <p>Esto es vista 2</p>
      </div>
    </PageLayoutBody.View>
  );
};
