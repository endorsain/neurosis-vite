import { createContext, useContext, useState } from 'react';

const HeaderButtonsContext = createContext();

export function HeaderButtonsProvider({ children }) {
  const [headerButtons, setHeaderButtons] = useState(null);
  return (
    <HeaderButtonsContext.Provider value={{ headerButtons, setHeaderButtons }}>
      {children}
    </HeaderButtonsContext.Provider>
  );
}

export function useHeaderButtons() {
  return useContext(HeaderButtonsContext);
}
