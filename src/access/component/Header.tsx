import { AccessAction, useAppDispatch, useAppSelector } from "@/redux";
import styles from "./component.module.css";

export function Header() {
  const dispatch = useAppDispatch();

  function handlerChangeView(value: any) {
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
        login
      </ButtonHeader>
    </div>
  );
}

function ButtonHeader({ children, viewName, handler }: any) {
  const { ui } = useAppSelector((s: any) => s.access);

  const isActive = ui.formViewActive === viewName;

  return (
    <button
      className={`${styles.headerButton} ${
        isActive ? styles.visible : styles.hidden
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
}
