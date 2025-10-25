import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";

export function MainLayout() {
  console.log("MainLayout");

  return (
    <div className={styles.main_layout}>
      <Menu />
      <Outlet />
    </div>
  );
}

const Menu = () => {
  return (
    <div className={styles.menu_layout}>
      <Link to="/">home page</Link>
      <Link to="/setting">setting page</Link>
    </div>
  );
};
