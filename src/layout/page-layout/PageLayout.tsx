import { useEffect } from "react";
import styles from "./PageLayout.module.css";
import { PageLayoutProvider, usePageLayout } from "./PageLayoutProvider";

export function PageLayout({ children }: any) {
  // const pathname = useLocation().pathname;
  // console.log("PageLayout - pathname: ", pathname);
  return (
    <PageLayoutProvider>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.pageBody}>{children}</div>
      </div>
    </PageLayoutProvider>
  );
}

export function Header() {
  const { layout, setLayout } = usePageLayout();

  const handleSwitch = (view: string) => {
    setLayout((prev: any) => ({ ...prev, activeView: view, modal: null }));
  };

  return (
    <div className={styles.pageHeader}>
      {layout.views.length > 1
        ? layout.views.map((v: string) => (
            <button
              key={v}
              onClick={() => handleSwitch(v)}
              className={layout.activeView === v ? styles.activeButton : ""}
            >
              {v}
            </button>
          ))
        : null}
    </div>
  );
}

export function View({ children, viewname }: any) {
  console.log("View: ", viewname);
  const { layout, setLayout } = usePageLayout();

  useEffect(() => {
    setLayout((prev: any) => {
      const alreadyExists = prev.views.includes(viewname);
      const newViews = alreadyExists ? prev.views : [...prev.views, viewname];

      const newActiveView = prev.activeView ?? viewname;

      return { ...prev, views: newViews, activeView: newActiveView };
    });
  }, [viewname]);

  const isActive = layout.activeView === viewname;

  return (
    <div className={`${styles.pageView} ${isActive ? styles.active : null}`}>
      {children}
    </div>
  );
}

export function ButtonModal({ children, modalname }: any) {
  const { layout, setLayout } = usePageLayout();

  const handleButton = (name: string) => {
    setLayout((prev: any) => ({ ...prev, modal: name }));
  };

  return <button onClick={() => handleButton(modalname)}>{children}</button>;
}

export function Modal({ children, modalname }: any) {
  const { layout, setLayout } = usePageLayout();
  console.log("Modal: ", modalname, "layout.modal: ", layout.modal);
  const isActive = layout.modal === modalname;
  return (
    <div
      className={`${styles.modalContainer} ${isActive && styles.active}`}
      onClick={() => setLayout((prev: any) => ({ ...prev, modal: null }))}
    >
      <div className={styles.modalGrid}>
        <div className={styles.modalHeader}>
          <button
            onClick={() => setLayout((prev: any) => ({ ...prev, modal: null }))}
          >
            Salir
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
