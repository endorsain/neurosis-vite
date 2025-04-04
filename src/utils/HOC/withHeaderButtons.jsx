import { useEffect } from 'react';
import { usePageLayout } from '../../context';

const withHeaderButtons = buttons => WrappedComponent => {
  // Usa el nombre del componente original para debugging
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  function WithHeaderButtons(props) {
    const { addHeaderButtons } = usePageLayout();
    useEffect(() => {
      addHeaderButtons(buttons);
      return () => addHeaderButtons(null);
    }, [addHeaderButtons]);

    return <WrappedComponent {...props} />;
  }
  // Preserva el nombre para debugging y Fast Refresh
  WithHeaderButtons.displayName = `WithHeaderButtons(${displayName})`;
  return WithHeaderButtons;
};

export default withHeaderButtons;
