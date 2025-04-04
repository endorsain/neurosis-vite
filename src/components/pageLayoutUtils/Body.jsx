import React, { useEffect, useState } from 'react';
import { usePageLayout } from '../../context';
import { ManageView, StorageView } from '../../views';
import styles from './body.module.css';

const PageLayoutBody = ({ children }) => {
  const [stackView, setStackView] = useState([]);
  const { activeView, changeView } = usePageLayout();

  const childrenArray = React.Children.toArray(children);
  childrenArray.push(<StorageView />);
  childrenArray.push(<ManageView />);

  const viewComponents = {};
  childrenArray.forEach(child => {
    const componentName = child.type.name || child.type.displayName;
    viewComponents[componentName] = child;
  });

  useEffect(() => {
    if (activeView === null) {
      changeView(
        childrenArray[0].type.name || childrenArray[0].type.displayName
      );
    } else if (activeView && viewComponents[activeView]) {
      setStackView(prev => {
        const activeComponent = viewComponents[activeView];

        const stackWithoutActive = prev.filter(
          comp => (comp.type.name || comp.type.displayName) !== activeView
        );

        return [...stackWithoutActive, activeComponent];
      });
    }
  }, [activeView]);

  const renderStackView = () => {
    //TODO: Solucionar error
    return stackView.map((component, index) => {
      if (!React.isValidElement(component)) return null;

      const componentName = component.type.name || component.type.displayName;
      // const zIndex = 100 - index;

      return React.cloneElement(component, {
        key: componentName || `view-${index}`,
        // className: `${styles.view} ${styles[componentName?.toLowerCase()]}`,
        // style: { zIndex },
      });
    });
  };

  return <div className={styles.body}>{renderStackView()}</div>;
};

const View = ({ children, viewName, placeholderView, sizeView }) => {
  const { activeView, addPlaceholderView } = usePageLayout();

  useEffect(() => {
    addPlaceholderView(placeholderView);
  }, [activeView]);

  const isVisible = activeView === viewName;
  const viewClasses = `${styles.views} ${isVisible ? styles.visible : styles.hidden}`;

  switch (sizeView) {
    case 'small':
      return (
        <div
          className={`${viewClasses} ${styles.smallView} ${isVisible ? styles.shadow : ''}`}
        >
          {children}
        </div>
      );
    default:
      // console.log('viewName - default: ', viewName);
      return (
        <div className={`${viewClasses} ${styles.normalView}`}>{children}</div>
      );
  }
};

PageLayoutBody.View = View;
export default PageLayoutBody;
