import React, { useEffect } from "react";
import styles from "./PageLayout.module.css";
import { usePageLayoutRedux } from "./usePageLayout";
import { useLocation } from "react-router-dom";
import { PageLayoutProvider, usePageLayout } from "./PageLayoutProvider";

export function PageLayout({ children }: any) {
  // const pathname = useLocation().pathname;
  // console.log("PageLayout - pathname: ", pathname);

  return (
    <PageLayoutProvider>
      <div className={styles.pagelayout}>
        <Header />
        {children}
      </div>
    </PageLayoutProvider>
  );
}

export function Header() {
  const { layout, setLayout } = usePageLayout();

  const handleSwitch = (view: string) => {
    setLayout((prev: any) => ({ ...prev, activeView: view }));
  };

  return (
    <div className={styles.header}>
      {layout.views.map((v: string) => (
        <button
          key={v}
          onClick={() => handleSwitch(v)}
          className={layout.activeView === v ? styles.activeButton : ""}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

export function Body({ children }: any) {
  const { layout, setLayout } = usePageLayout();

  const pathname = useLocation().pathname;
  console.log("Body - pathname: ", pathname);

  useEffect(() => {
    console.log("Body - useEffect - se ejecuta");
    setLayout((prev: any) => ({ ...prev, page: pathname }));
  }, [pathname]);

  console.log("Body - layout", layout);

  return <div className={styles.body}>{children}</div>;
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
    <div
      className={`${styles.view} ${isActive ? styles.active : null}`}
      // className={styles.view}
    >
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
  console.log("Modal: ", modalname);
  const isActive = layout.modal === modalname;
  return (
    <div className={`${styles.modal} ${isActive && styles.active}`}>
      <button onClick={() => setLayout((prev) => ({ ...prev, modal: null }))}>
        Sacar
      </button>
      {children}
    </div>
  );
}
