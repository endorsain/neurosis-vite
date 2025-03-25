import { TimerIcon } from '../../../icons';
import withHeaderButtons from '../../../utils/withHeaderButtons';

const ButtonHeader = ({ setChange, select, children }) => {
  return (
    <button className="button_2" onClick={() => setChange(select)}>
      {children}
    </button>
  );
};

const buttons = (
  <>
    <ButtonHeader /* setChange={setChange} select="timer" */>
      <TimerIcon />
    </ButtonHeader>
  </>
);

function CurrentPage() {
  // const [change, setChange] = useState('store');

  // return (
  //   <PageLayout>
  //     <CurrentHeader change={change} setChange={setChange} />
  //     <CurrentBody change={change}>
  //       <div>Leisure content</div>
  //       <div>Graph content</div>
  //       <div>Store content</div>
  //     </CurrentBody>
  //   </PageLayout>
  // );
  // const { setHeaderButtons } = useHeaderButtons();

  // Establece los botones cuando el componente se monta
  // useEffect(() => {
  //   setHeaderButtons(
  //     <>
  //       <ButtonHeader /* setChange={setChange} select="timer" */>
  //         <TimerIcon />
  //       </ButtonHeader>
  //     </>
  //   );

  //   // Limpia los botones cuando el componente se desmonta
  //   return () => setHeaderButtons(null);
  // }, [setHeaderButtons]);

  return <div>CurrentPage</div>;
}

export default withHeaderButtons(buttons)(CurrentPage);
