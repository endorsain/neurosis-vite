// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";

export function MainLayout() {
  console.log("MainLayout");
  // const dispatch = useDispatch<any>();
  // const { isAuthenticated, loading } = useSelector((s: any) => s.auth);
  // const { email, username } = useSelector((s: any) => s.user);

  // console.log("isAutenticated: ", isAuthenticated);
  // console.log("loading: ", loading);

  // console.log("email: ", email);
  // console.log("username: ", username);

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
      <Link to="/random">random page</Link>
    </div>
  );
};
