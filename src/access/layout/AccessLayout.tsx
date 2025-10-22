import { Outlet, replace, useLocation, useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { useEffect } from "react";
import { useGoogleAuthRedux } from "../redux/hooks/useGoogleAuthRedux";
import { PATHS } from "../../shared";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import { AccessActions } from "../redux";

export function AccessLayout() {
  useGoogleAuthRedux();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { google_loaded, google_credential, loading_request, error } =
    useAppSelector((s: any) => s.access);

  useEffect(() => {
    console.log("madrid");
    if (google_credential && error) {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      navigate(PATHS.access.google);
    }

    if (google_credential === null && pathname === PATHS.access.google) {
      navigate(-1 as any, { replace: true });
    }
  }, [google_credential, error, navigate, pathname]);

  return (
    <div className={styles.auth}>
      <div className={styles.page_container}>
        <NavigateButton
          currentPath={pathname}
          accessPaths={PATHS.access}
          navigate={navigate}
          dispatch={() => dispatch(AccessActions.clearGoogleCredential())}
        />
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
      <div className={styles.google_section}>
        {loading_request ? "loading..." : "listo"}
      </div>
    </div>
  );
}

function NavigateButton({ currentPath, accessPaths, navigate, dispatch }: any) {
  console.log("currentPath: ", currentPath);

  if (currentPath === accessPaths?.login) {
    return (
      <button onClick={() => navigate(accessPaths.register)}>register</button>
    );
  } else if (currentPath === accessPaths?.register) {
    return <button onClick={() => navigate(accessPaths?.login)}>login</button>;
  } else {
    function handler() {
      dispatch();
      navigate(-1 as any, { replace: true });
    }
    return <button onClick={handler}>volver</button>;
  }
}
