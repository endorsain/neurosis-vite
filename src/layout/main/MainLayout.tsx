import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";
import { Menu } from "./menu/Menu";
import { Header } from "./header/Header";
import { ContactView } from "./contact/ContactView";

export function MainLayout() {
  console.log("MainLayout");

  return (
    <div className={styles.base}>
      <Header />
      <Menu />
      <Outlet />
      <ContactView />
    </div>
  );
}
