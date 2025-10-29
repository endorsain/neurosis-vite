import { useEffect } from "react";
import {
  AccessAction,
  useGoogleAuthRedux,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import styles from "./AccessPage.module.css";
import { AccessView, ButtonChangeView, ServerResponse } from "../component";

export function AccessPage() {
  useGoogleAuthRedux();
  const dispatch = useAppDispatch();

  const { google_credential, loading_request, response, ui } = useAppSelector(
    (s: any) => s.access
  );

  useEffect(() => {
    if (google_credential && response && ui.view !== "google") {
      console.log("response:", response);
      console.log("google_credential: ", google_credential);
      dispatch(AccessAction.setChangeView("google"));
    }
  }, [google_credential, response, dispatch, ui.view]);

  // TODO: falta utilizar loading_request, tal vez en ServerResponse.

  return (
    <div className={styles.access_layout}>
      <div className={styles.access_container}>
        <ButtonChangeView view={ui.view} />
        <AccessView view={ui.view} />
        <ServerResponse response={response} />
      </div>
    </div>
  );
}
