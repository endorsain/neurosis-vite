import { RegisterForm, LoginForm, GoogleRegisterForm } from "./form";
import { useAppSelector } from "../../redux";
import styles from "./component.module.css";

export function AccessView({ view }: any) {
  return (
    <div className={styles.access_view}>
      <div
        className={`${styles.change_view} ${
          view !== "google" ? styles.view_visible : styles.view_hidden
        }`}
      >
        <LoginAndRegisterView view={view} />
      </div>
      <div
        className={`${styles.change_view} ${
          view === "google" ? styles.view_visible : styles.view_hidden
        }`}
      >
        <GoogleRegisterForm />
      </div>
    </div>
  );
}

function LoginAndRegisterView({ view }: any) {
  return (
    <div className={styles.login_register}>
      <div className={styles.form_container}>
        <LoginForm view={view} />
        <RegisterForm view={view} />
      </div>
      <GoogleButton />
    </div>
  );
}

function GoogleButton() {
  const { google_loaded } = useAppSelector((s) => s.access);

  return (
    <div className={styles.google_button}>
      <div
        id="google-auth-button"
        style={{
          opacity: google_loaded ? 1 : 0.5,
        }}
      />
    </div>
  );
}
