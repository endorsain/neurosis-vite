import styles from './viewLayout.module.css';

const ViewLayout = ({ placeholder, children }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.head}>{placeholder}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default ViewLayout;
