import { PageLayoutBody, PageLayoutHeader } from '../../../components';
import { StorageIcon, TimerIcon } from '../../../icons';
import withHeaderButtons from '../../../utils/HOC/withHeaderButtons';
import { CommonView1, CommonView2 } from './TestViews';

// const buttons = (
//   <Header>
//     <Header.Button buttonView="CommonView1">
//       <TimerIcon />
//     </Header.Button>
//     <Header.Button buttonView="CommonView2">
//       <TimerIcon />
//     </Header.Button>
//   </Header>
// );
const buttons = (
  <PageLayoutHeader>
    <PageLayoutHeader.Button viewName="CommonView1" icon={<TimerIcon />} />
    <PageLayoutHeader.Button viewName="CommonView2" icon={<StorageIcon />} />
  </PageLayoutHeader>
);

function CurrentPage() {
  // return (
  //   <BodyLayout>
  //     <CommonView1 />
  //     <CommonView2 />
  //     <StorageView />
  //     <ManageView />
  //   </BodyLayout>
  // );
  return (
    <PageLayoutBody>
      <CommonView1 />
      <CommonView2 />
      {/* <StorageView />
      <ManageView /> */}
    </PageLayoutBody>
  );
}

export default withHeaderButtons(buttons)(CurrentPage);
