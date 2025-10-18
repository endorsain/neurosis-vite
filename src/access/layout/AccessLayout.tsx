import { Outlet, useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { useEffect } from "react";
import { useGoogleAuthRedux } from "../redux/hooks/useGoogleAuthRedux";
import { PATHS } from "../../shared";
import { useAppSelector } from "../../redux/useStore";

export function AccessLayout() {
  useGoogleAuthRedux();
  const navigate = useNavigate();

  const { google_loaded, google_credential, error } = useAppSelector(
    (s: any) => s.access
  );

  useEffect(() => {
    console.log("madrid");
    if (google_credential && error) {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      navigate(PATHS.access.google);
    }
  }, [google_credential, error]);

  return (
    <div className={styles.auth}>
      <div className={styles.page_container}>
        <Outlet />
      </div>
      <div className={styles.google_section}>
        <div
          id="google-auth-button"
          className={styles.google_button}
          style={{
            opacity: google_loaded ? 1 : 0.5,
          }}
        />
      </div>
    </div>
  );
}
