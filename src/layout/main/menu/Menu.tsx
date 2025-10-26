import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { PATHS } from "../../../shared";

export function Menu() {
  return (
    <div className={styles.base}>
      <div className={styles.uno}>
        <span>NEUROSIS</span>
      </div>
      <div className={styles.dos}>
        <MenuButtons />
      </div>
      <div className={styles.tres}>reminders</div>
    </div>
  );
}

function MenuButtons() {
  const navigate = useNavigate();

  function navHandler(path: any) {
    navigate(path);
  }
  return (
    <>
      <button onClick={() => navHandler(PATHS.main.home)}>HOME</button>
      <button onClick={() => navHandler(PATHS.main.setting)}>SETTING</button>
    </>
  );
}
