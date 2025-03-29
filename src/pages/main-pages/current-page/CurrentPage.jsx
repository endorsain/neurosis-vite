import Header from '../../../context/page-layout/PageLayoutHeader';
import { TimerIcon } from '../../../icons';
import withHeaderButtons from '../../../utils/HOC/withHeaderButtons';
import {
  BodyLayout,
  CommonView1,
  CommonView2,
  ManageView,
  StorageView,
} from './BodyLayout';

const buttons = (
  <Header>
    <Header.Button buttonView="CommonView1">
      <TimerIcon />
    </Header.Button>
    <Header.Button buttonView="CommonView2">
      <TimerIcon />
    </Header.Button>
  </Header>
);

function CurrentPage() {
  // return (
  //   <div className={styles.}>
  //     <TestView>dentro de TestView</TestView>
  //   </div>
  // );
  return (
    <BodyLayout>
      <CommonView1 />
      <CommonView2 />
      <StorageView />
      <ManageView />
    </BodyLayout>
  );
}

export default withHeaderButtons(buttons)(CurrentPage);
