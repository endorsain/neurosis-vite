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
    if (stackView.length === 0 && childrenArray.length > 0) {
      if (childrenArray.length === 1) {
        return setStackView([getComponentName(childrenArray[0])]);
      } else if (childrenArray.length > 1) {
        return setStackView([
          getComponentName(childrenArray[0]),
          getComponentName(childrenArray[1]),
        ]);
      }
    }
  }, []);

  useEffect(() => {
    console.log('Se ejecuto', activeView);
    if (activeView && viewComponents[activeView]) {
      setStackView(prev => {
        // if(prev[0] === prev){
        //   return prev
        // }

        if (prev[1] === activeView) {
          return [activeView, prev[0]];
        }

        return prev.length > 0 ? [activeView, prev[0]] : [activeView];
      });
    }
  }, [activeView]);

  const getComponentName = element => {
    if (React.isValidElement(element)) {
      return (
        element.type.name || element.type.displayName || 'UnknownComponent'
      );
    }
    return 'UnknownComponent';
  };

  const renderStackViews = () => {
    // return stackView.map((componentName, index) => {
    //   const component = viewComponents[componentName];
    //   console.log(component);

    //   return React.cloneElement(component, {
    //     key: componentName,
    //   });
    // });
    const xd = [viewComponents[stackView[0]], viewComponents[stackView[1]]];
    console.log(xd);

    return <>{xd.map((child, index) => child)}</>;
  };
  // return <div className={styles.bodyLayout}>{children}</div>;
  // return <div className={styles.bodyLayout}>{renderStackViews()}</div>;
  return <div className={styles.bodyLayout}>{children}</div>;
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
