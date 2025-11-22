import { useGoogleAuthRedux } from "@/redux";
import styles from "./AccessPage.module.css";
import { Body, Header, ServerResponse } from "../component";

export function AccessPage() {
  useGoogleAuthRedux();

  return (
    <div className={styles.accessPage}>
      <div>
        <Header />
        <Body />
        <ServerResponse />
      </div>
    </div>
  );
}
