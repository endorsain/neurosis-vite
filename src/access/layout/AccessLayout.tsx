import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { useEffect, useState } from "react";
import { useGoogleAuthRedux } from "../redux/hooks/useGoogleAuthRedux";
import { PATHS } from "../../shared";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import { AccessActions } from "../redux";
import { GoogleRegisterView, RoutesButton } from "../components";
import { TraductionTestAccess } from "../../main/components/TraductionTests";
import { LoadingRequest } from "../../components/Loading";

export function AccessLayout() {
  useGoogleAuthRedux();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { google_loaded, google_credential, loading_request, error } =
    useAppSelector((s: any) => s.access);

  const [changeView, setChangeView] = useState("pages");

  useEffect(() => {
    console.log("madrid");
    if (google_credential && error) {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      setChangeView("google");
      // navigate(PATHS.access.google);
    }
  }, [google_credential, error, navigate, pathname]);

  return (
    <div className={styles.layout}>
      <RoutesButton
        currentPath={pathname}
        accessPaths={PATHS.access}
        navigate={navigate}
        dispatch={() => dispatch(AccessActions.clearGoogleCredential())}
        setChangeView={() => setChangeView("pages")}
        changeView={changeView}
      />
      <div className={styles.page_container}>
        <Outlet />
        <div
          id="google-auth-button"
          className={styles.google_button}
          style={{
            opacity: google_loaded ? 1 : 0.5,
          }}
        />
        <GoogleRegisterView changeView={changeView} />
      </div>
      <LoadingRequest loadinRequest={loading_request} />
      <TraductionTestAccess />
    </div>
  );
}
