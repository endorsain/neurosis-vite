import { useEffect } from "react";
import { AccessAction, useAppDispatch, useAppSelector } from "@/redux";
import { GoogleRegisterForm, LoginForm, RegisterForm } from "../form";
import styles from "./component.module.css";
import { BodyView, FormView } from "../view";

export function Body() {
  const dispatch = useAppDispatch();

  const { google_credential, response, ui } = useAppSelector(
    (s: any) => s.access
  );

  useEffect(() => {
    if (google_credential && response && ui.view !== "google") {
      console.log("response:", response);
      console.log("google_credential: ", google_credential);
      dispatch(AccessAction.setGoogleView({ formView: "google" }));
    }
  }, [google_credential, response, dispatch, ui.view]);

  return (
    <div className={styles.body}>
      <LogOrRegView />
      <GoogleRegisterView />
    </div>
  );
}

export function GoogleButton() {
  const google_loaded = useAppSelector((s: any) => s.access.google_loaded);
  return (
    <div className={styles.google_button}>
      <div
        id="google-auth-button"
        style={{ opacity: google_loaded ? 1 : 0.5 }}
      />
    </div>
  );
}

function LogOrRegView() {
  return (
    <BodyView viewName="logOrReg">
      <div className={`${styles.logOrRegView} ${styles.bodyView}`}>
        <div>
          <Login />
          <Register />
        </div>
        <GoogleButton />
      </div>
    </BodyView>
  );
}

function Login() {
  return (
    <FormView viewName="login">
      <LoginForm />
    </FormView>
  );
}

function Register() {
  return (
    <FormView viewName="register">
      <RegisterForm />
    </FormView>
  );
}

function GoogleRegisterView() {
  return (
    <BodyView viewName="googleRegister">
      <div className={styles.bodyView}>
        <GoogleRegisterForm />
      </div>
    </BodyView>
  );
}
