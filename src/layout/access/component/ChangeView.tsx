import { AccessAction, useAppDispatch } from "../../../redux";
import styles from "./component.module.css";

export function ChangeView({ view }: any) {
  const dispatch = useAppDispatch();
  console.log("view: ", view);

  function handler(value: any) {
    if (value === "volver") {
      dispatch(AccessAction.clearGoogleCredential());
      dispatch(AccessAction.setChangeView("login"));
    } else {
      dispatch(AccessAction.setChangeView(value));
    }
  }

  if (view === "login") {
    return <Button changeView={() => handler("register")}>register</Button>;
  } else if (view === "register") {
    return <Button changeView={() => handler("login")}>login</Button>;
  } else {
    return <Button changeView={() => handler("volver")}>volver</Button>;
  }
}

function Button({ children, changeView }: any) {
  return (
    <button className={styles.nav_button} onClick={changeView}>
      {children}
    </button>
  );
}
