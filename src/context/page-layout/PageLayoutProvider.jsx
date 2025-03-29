import { createContext, useContext, useState } from 'react';

const PageLayoutContext = createContext();

export default function PageLayoutProvider({ children }) {
  const [activeView, setActiveView] = useState(null);
  const [headerButtons, setHeaderButtons] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const changeView = viewName => {
    console.log('Esta es la vista que se quiereCambiar: ', viewName);
    if (activeView !== viewName) setActiveView(viewName);
  };

  const addHeaderButtons = buttons => {
    setHeaderButtons(buttons);
  };

  const refreshView = () => {
    console.log('se hizo refresh!');
    setRefreshCounter(prev => prev + 1);
  };

  const contextValue = {
    // estado
    activeView,
    headerButtons,
    refreshCounter,

    // fuciones
    changeView,
    addHeaderButtons,
    refreshView,
  };

  return (
    <PageLayoutContext.Provider value={contextValue}>
      {children}
    </PageLayoutContext.Provider>
  );
}

export function usePageLayout() {
  return useContext(PageLayoutContext);
}
