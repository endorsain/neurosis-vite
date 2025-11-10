import { createContext, useContext, useState } from "react";

const PageLayoutContext = createContext(null);

export function PageLayoutProvider({ children }: any) {
  const [layout, setLayout] = useState({
    page: null,
    views: [] as string[],
    activeView: null as string | null,
    modal: null,
  });

  return (
    <PageLayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </PageLayoutContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageLayout() {
  return useContext(PageLayoutContext);
}
