import React from 'react';
import styles from './page-layout.module.css';

export default function PageLayout({ children }) {
  const [header, body, footer] = React.Children.toArray(children);

  return (
    <div
      className={`${styles.pageLayoutGrid} ${footer !== undefined ? styles.addFooter : ''}`}
    >
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}
