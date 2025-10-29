import { AccessAction, useAppDispatch } from "../../redux";
import styles from "./component.module.css";

export function ButtonChangeView({ view }: any) {
  const dispatch = useAppDispatch();
  console.log("view: ", view);

  // TODO: Este codigo es el importante.
  // function handler(value: any) {
  //   if (value === "volver") {
  //     dispatch(AccessAction.clearGoogleCredential());
  //     dispatch(AccessAction.setChangeView("login"));
  //   } else {
  //     dispatch(AccessAction.setChangeView(value));
  //   }
  // }

  function handler(value: any) {
    dispatch(AccessAction.setChangeView(value));
  }

  return (
    <div className={styles.button_change_view_container}>
      <Button
        view={view}
        viewName={"login"}
        handler={() => handler("register")}
      >
        ir a register
      </Button>
      <Button
        view={view}
        viewName={"register"}
        handler={() => handler("google")}
      >
        ir a google
      </Button>
      <Button view={view} viewName={"google"} handler={() => handler("login")}>
        ir a login
      </Button>
    </div>
  );
}

function Button({ children, view, viewName, handler }: any) {
  return (
    <button
      className={`${styles.change_view} ${styles.button_change_view} ${
        view === viewName ? styles.view_visible : styles.view_hidden
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export function ServerResponse({ response }: any) {
  return (
    <div className={styles.server_response}>
      server response
      {response && response}
    </div>
  );
}
