import React, { useEffect, useState } from 'react';
import { usePageLayout } from '../../context/page-layout/PageLayoutProvider';
import { ManageView, StorageView } from '../views/Views';
import styles from './body.module.css';

const PageLayoutBody = ({ children }) => {
  const [stackView, setStackView] = useState([]);
  const { activeView, changeView } = usePageLayout();

  const childrenArray = React.Children.toArray(children);
  childrenArray.push(<StorageView />);
  childrenArray.push(<ManageView />);

  console.log(childrenArray);

  const viewComponents = {};
  childrenArray.forEach(child => {
    const componentName = child.type.name || child.type.displayName;
    viewComponents[componentName] = child;
  });

  useEffect(() => {
    if (activeView === null) {
      console.log(
        'DENTRO - 1 ',
        childrenArray[0].type.name || childrenArray[0].type.displayName
      );
      changeView(
        childrenArray[0].type.name || childrenArray[0].type.displayName
      );
      // changeView();
      // setStackView(childrenArray);
    } else if (activeView && viewComponents[activeView]) {
      console.log(
        'DENTRO - 2 ',
        childrenArray[0].type.name || childrenArray[0].type.displayName
      );
      setStackView(prev => {
        const activeComponent = viewComponents[activeView];

        const filteredArray = childrenArray.filter(
          child =>
            React.isValidElement(child) &&
            (child.type.name || child.type.displayName) !== activeView
        );

        return [activeComponent, ...filteredArray];
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

const View = ({ viewName, children, sizeView }) => {
  const { activeView } = usePageLayout();

  const isVisible = activeView === viewName;
  const viewClasses = `${styles.views} ${isVisible ? styles.visible : styles.hidden}`;

  switch (sizeView) {
    case 'small':
      return (
        <div className={`${viewClasses} ${styles.smallView}`}>{children}</div>
      );
    default:
      console.log('viewName - default: ', viewName);
      return (
        <div className={`${viewClasses} ${styles.normalView}`}>{children}</div>
      );
  }
};

PageLayoutBody.View = View;
export default PageLayoutBody;
