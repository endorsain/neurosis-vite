import { useEffect } from 'react';
import { usePageLayout } from '../../context/page-layout/PageLayoutProvider';
// import { useHeaderButtons } from '../../context/page-layout/HeaderButtonsProvider';

const withHeaderButtons = buttons => WrappedComponent => {
  // Usa el nombre del componente original para debugging
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  function WithHeaderButtons(props) {
    const { addHeaderButtons } = usePageLayout();

    // console.log('Icons: ', icons.props.children);
    useEffect(() => {
      // Envolvemos los iconos con el componente
      console.log('useEffect buttons: ', buttons);
      // const buttons = <HeaderButtons>{icons.props.children}</HeaderButtons>;

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
