import { useEffect } from "react";
import {
  AccessAction,
  useGoogleAuthRedux,
  useAppDispatch,
  useAppSelector,
} from "../../redux";
import styles from "./AccessPage.module.css";
import { AccessView, ButtonChangeView, ServerResponse } from "../component";
// import { ButtonChangeView } from "../component";

export function AccessPage() {
  useGoogleAuthRedux();
  const dispatch = useAppDispatch();

  const { google_loaded, google_credential, loading_request, error, UI } =
    useAppSelector((s: any) => s.access);

  useEffect(() => {
    console.log("access_layout");
    if (google_credential && error && UI.view !== "google") {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      dispatch(AccessAction.setChangeView("google"));
    }
  }, [google_credential, error, dispatch, UI.view]);

  return (
    <div className={styles.access_layout}>
      <div className={styles.access_container}>
        <ButtonChangeView view={UI.view} />
        <AccessView view={UI.view} />
        <ServerResponse />
      </div>
    </div>
  );
}
