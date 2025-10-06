import { Outlet } from "react-router-dom";
import styles from "../auth.module.css";
import { useGoogleAuthRedux } from "../google/useGoogleAuthRedux";
import { useSelector } from "react-redux";

export function AccessLayout() {
  useGoogleAuthRedux();

  const { isGoogleLoaded } = useSelector((s: any) => s.access);

  return (
    <div className={styles.auth}>
      <Outlet />
      <div className={styles.google_section}>
        <div
          id="google-auth-button"
          className={styles.google_button}
          style={{
            opacity: isGoogleLoaded ? 1 : 0.5,
            margin: "1rem 0",
          }}
        />
      </div>
    </div>
  );
}
