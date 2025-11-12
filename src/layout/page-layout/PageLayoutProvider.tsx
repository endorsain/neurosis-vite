import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLayoutContext = createContext(null);

export function PageLayoutProvider({ children }: any) {
  const { pathname } = useLocation();

  console.log("PAGELAYOUTPROVIDER: ", pathname);
  const [layout, setLayout] = useState({
    page: pathname,
    views: [] as string[],
    activeView: null as string | null,
    modal: null,
  });

  // 1) Al cambiar de página, cargar layout guardado
  useEffect(() => {
    const savedLayout = localStorage.getItem(`pageLayout:${pathname}`);
    if (savedLayout) {
      console.log("savedLayout");
      try {
        setLayout(JSON.parse(savedLayout));
      } catch {
        localStorage.removeItem(`pageLayout:${pathname}`);
      }
    }
  }, [pathname]);

  // 2) Guardar automáticamente cuando cambie el layout
  useEffect(() => {
    if (layout.page === pathname) {
      localStorage.setItem(`pageLayout:${pathname}`, JSON.stringify(layout));
    }
  }, [layout, pathname]);

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
