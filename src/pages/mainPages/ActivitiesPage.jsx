import { TimerIcon } from '../../assets/icons';
import { PageLayoutBody, PageLayoutHeader } from '../../components';
import { withHeaderButtons } from '../../utils';
import { TimersView } from '../../views';

const buttons = (
  <PageLayoutHeader>
    <PageLayoutHeader.Button viewName="TimersView" icon={<TimerIcon />} />
  </PageLayoutHeader>
);

function ActivitiesPage() {
  return (
    <PageLayoutBody>
      <TimersView />
    </PageLayoutBody>
  );
}

export default withHeaderButtons(buttons)(ActivitiesPage);
