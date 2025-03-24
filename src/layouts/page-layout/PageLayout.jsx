import React from 'react';
import { ManageIcon, RefreshIcon, StorageIcon } from '../../icons';
import styles from './page-layout.module.css';

export default function PageLayout({ children }) {
  const [header, body, footer] = React.Children.toArray(children);

  return (
    <div
      className={`${styles.pageLayoutGrid} ${footer !== undefined ? styles.addFooter : ''}`}
    >
      <div className={styles.header}>
        <div className={styles.customButtons}>{header}</div>
        <div className={styles.space}>Spage</div>
        <div className={styles.defaultButtons}>
          <ButtonHeader /* setChange={setChange} select="store" */>
            <StorageIcon />
          </ButtonHeader>
          <ButtonHeader>
            <ManageIcon />
          </ButtonHeader>
          <ButtonHeader>
            <RefreshIcon />
          </ButtonHeader>
        </div>
      </div>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}

const ButtonHeader = ({ setChange, select, children }) => {
  return (
    <button className="button_2" /* onClick={() => setChange(select)} */>
      {children}
    </button>
  );
};
