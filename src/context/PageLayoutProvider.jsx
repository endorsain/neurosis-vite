import { createContext, useContext, useState } from 'react';

const PageLayoutContext = createContext();

export default function PageLayoutProvider({ children }) {
  const [activeView, setActiveView] = useState(null);
  const [headerButtons, setHeaderButtons] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [placeholderView, setPlaceholderView] = useState(null);

  const changeView = name => {
    if (activeView !== name) setActiveView(name);
  };

  const addHeaderButtons = buttons => {
    setHeaderButtons(buttons);
  };

  const refreshView = () => {
    console.log('se hizo refresh!');
    setRefreshCounter(prev => prev + 1);
  };

  const addPlaceholderView = placeholder => {
    setPlaceholderView(placeholder);
  };

  const contextValue = {
    // estado
    activeView,
    headerButtons,
    refreshCounter,
    placeholderView,
    // fuciones
    changeView,
    addHeaderButtons,
    refreshView,
    addPlaceholderView,
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
