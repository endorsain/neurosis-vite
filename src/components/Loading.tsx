import styles from "./loading.module.css";

export function LoadingRequest({ loadinRequest }: any) {
  return (
    <div className={styles.base}>
      <div className={`${loadinRequest ? styles.loading : ""}`}>hola</div>
    </div>
  );
}

//  <div className={loadingRequest ? styles.loading : ""} />;
//  <div className={`${styles.base} ${loadingRequest ? styles.loading : ""}`} />;
