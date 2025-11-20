import { useEffect } from "react";
import {
  AccessAction,
  useGoogleAuthRedux,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import styles from "./AccessPage.module.css";
// import { AccessView, ButtonChangeView, ServerResponse } from "../component";
import { GoogleRegisterForm, LoginForm, RegisterForm } from "../form";
import { GoogleButton } from "../component";

export function AccessPage() {
  useGoogleAuthRedux();

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header />
        <Body />
        <div>footer</div>
      </div>
    </div>
  );
}

function Header() {
  const dispatch = useAppDispatch();
  // const { ui } = useAppSelector((s: any) => s.access);

  function handlerChangeView(value) {
    dispatch(AccessAction.setChangeView(value));
  }

  return (
    <div className={styles.header}>
      <ButtonHeader
        viewName="login"
        handler={() => handlerChangeView({ formView: "register" })}
      >
        login
      </ButtonHeader>
      <ButtonHeader
        viewName="register"
        handler={() => handlerChangeView({ formView: "login" })}
      >
        register
      </ButtonHeader>
      <ButtonHeader
        viewName="google"
        handler={() => handlerChangeView({ formView: "login" })}
      >
        google
      </ButtonHeader>
    </div>
  );
}
function ButtonHeader({ children, viewName, handler }: any) {
  const { ui } = useAppSelector((s: any) => s.access);

  const isActive = ui.formViewActive === viewName;

  return (
    <button
      className={`${styles.headerbutton} ${
        isActive ? styles.visible : styles.hidden
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

function Body() {
  const dispatch = useAppDispatch();

  const { google_credential, loading_request, response, ui } = useAppSelector(
    (s: any) => s.access
  );

  useEffect(() => {
    if (google_credential && response && ui.view !== "google") {
      console.log("response:", response);
      console.log("google_credential: ", google_credential);
      dispatch(AccessAction.setChangeView({ formView: "google" }));
    }
  }, [google_credential, response, dispatch, ui.view]);

  return (
    <div className={styles.body}>
      <LogOrRegView />
      <GoogleRegisterView />
    </div>
  );
}

function View({ children, isActive }: any) {
  return (
    <div
      className={`${styles.view} ${isActive ? styles.visible : styles.hidden}`}
    >
      {children}
    </div>
  );
}

function BodyView({ children, viewName }: any) {
  const { ui } = useAppSelector((s) => s.access);

  const isActive = ui.bodyViewActive === viewName;

  return <View isActive={isActive}>{children}</View>;
}

function FormView({ children, viewName }: any) {
  const { ui } = useAppSelector((s) => s.access);

  const isActive = ui.formViewActive === viewName;

  return <View isActive={isActive}>{children}</View>;
}

function LogOrRegView() {
  return (
    <BodyView viewName="logOrReg">
      <div className={`${styles.loginAndRegister} ${styles.bodyView}`}>
        <div className={styles.container}>
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
