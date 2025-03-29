import React, { useEffect, useState } from 'react';
import { usePageLayout } from '../../../context/page-layout/PageLayoutProvider';
import styles from './body-layout.module.css';

export const BodyLayout = ({ children }) => {
  const [stackView, setStackView] = useState([]);
  const { activeView, changeView } = usePageLayout();

  const viewComponents = {};
  const childrenArray = React.Children.toArray(children);

  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      const componentName = child.type.name || child.type.displayName;
      viewComponents[componentName] = child;
    }
  });

  useEffect(() => {
    console.log('Se ejecuto', activeView);
    if (activeView === null) {
      setStackView(childrenArray);
    } else if (activeView && viewComponents[activeView]) {
      setStackView(prev => {
        const activeComponent = viewComponents[activeView];

        const filteredArray = childrenArray.filter(
          child =>
            React.isValidElement(child) &&
            (child.type.name || child.type.displayName) === activeView
        );

        return [activeComponent, ...filteredArray];
      });
    }
  }, [activeView]);

  const renderStackViews = () => {
    return stackView.map((component, index) => {
      if (!React.isValidElement(component)) return null;

      const componentName = component.type.name || component.type.displayName;
      const zIndex = 100 - index; // Mayor z-index para el primer elemento

      return React.cloneElement(component, {
        key: componentName || `view-${index}`,
        className: `${styles.view} ${styles[componentName?.toLowerCase()]}`,
        style: { zIndex },
      });
    });
  };

  return <div className={styles.bodyLayout}>{renderStackViews()}</div>;
};

const ViewLayout = ({ view, children }) => {
  const { activeView } = usePageLayout();

  const isVisible = activeView === view;
  const viewClasses = `${styles.view} ${isVisible ? styles.visible : styles.hidden}`;

  return <div className={viewClasses}>{children}</div>;
};

export const CommonView1 = () => {
  // const viewClasses = `${styles.view} ${styles.view1} ${isVisible ? styles.visible : styles.hidden}`;
  return (
    <ViewLayout view="CommonView1">
      <div className={styles.view1}>
        <h1>Vista 1</h1>
        <p>Esto es vista 1</p>
      </div>
    </ViewLayout>
  );
};

export const CommonView2 = () => {
  // const viewClasses = `${styles.view} ${styles.view2} ${isVisible ? styles.visible : styles.hidden}`;
  return (
    <ViewLayout view="CommonView2">
      <div className={styles.view2}>
        <h1>Vista 2</h1>
        <p>Esto es vista 2</p>
      </div>
    </ViewLayout>
  );
};

const Modal = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

export const StorageView = () => {
  return (
    <ViewLayout view="StorageView">
      <Modal>
        <div className={styles.storage}>Storage View</div>
      </Modal>
    </ViewLayout>
  );
};
export const ManageView = () => {
  return (
    <ViewLayout view="ManageView">
      <Modal>
        <div className={styles.manage}>Manage View</div>
      </Modal>
    </ViewLayout>
  );
};
