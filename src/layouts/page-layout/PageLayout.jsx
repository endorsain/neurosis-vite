import React from 'react';
import { Outlet } from 'react-router-dom';
import { useHeaderButtons } from '../../context/HeaderButtonsProvider';
import { ManageIcon, RefreshIcon, StorageIcon } from '../../icons';
import styles from './page-layout.module.css';

export default function PageLayout({ children }) {
  // const [header, body, footer] = React.Children.toArray(children);
  const { headerButtons } = useHeaderButtons();

  return (
    <div className={styles.pageLayoutGrid}>
      <div className={styles.header}>
        <div className={styles.customButtons}>{headerButtons}</div>
        <div className={styles.space}>Spage</div>
        <div className={styles.defaultButtons}>
          <ButtonHeader>
            <StorageIcon />
            <ManageIcon />
            <RefreshIcon />
          </ButtonHeader>
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}

const ButtonHeader = ({ setChange, select, children }) => {
  // return (
  //   <button className="button_2">
  //     {children}
  //   </button>
  // );
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <button className="button_2" key={index}>
          {child}
        </button>
      ))}
    </>
  );
};
