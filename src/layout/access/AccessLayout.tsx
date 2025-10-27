import styles from "./auth-layout.module.css";
import { useEffect } from "react";
import {
  AccessAction,
  useGoogleAuthRedux,
  useAppDispatch,
  useAppSelector,
} from "../../redux";
import {
  GoogleRegisterView,
  ChangeView,
  LoginForm,
  RegisterForm,
} from "./component";

export function AccessLayout() {
  useGoogleAuthRedux();
  const dispatch = useAppDispatch();

  const { google_loaded, google_credential, loading_request, error, UI } =
    useAppSelector((s: any) => s.access);

  useEffect(() => {
    console.log("access_layout");
    if (google_credential && error && UI.view !== "google") {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      dispatch(AccessAction.setChangeView("google"));
      // navigate(PATHS.access.google);
    }
  }, [google_credential, error, dispatch, UI.view]);

  return (
    <div className={styles.base}>
      <div className={styles.access_layout}>
        <ChangeView view={UI.view} />
        <div className={styles.page_container}>
          {UI.view === "login" ? <LoginForm /> : <RegisterForm />}
          <div
            id="google-auth-button"
            className={styles.google_button}
            style={{
              opacity: google_loaded ? 1 : 0.5,
            }}
          />
          <GoogleRegisterView view={UI.view} />
        </div>
      </div>
    </div>
  );
}
