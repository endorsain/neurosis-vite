import { useEffect } from 'react';
import { useHeaderButtons } from '../context/HeaderButtonsProvider';

const withHeaderButtons = buttons => WrappedComponent => {
  return function withHeaderButtons(props) {
    const { setHeaderButtons } = useHeaderButtons();

    useEffect(() => {
      setHeaderButtons(buttons);
      return () => setHeaderButtons(null);
    }, [setHeaderButtons]);

    return <WrappedComponent {...props} />;
  };
};

export default withHeaderButtons;
