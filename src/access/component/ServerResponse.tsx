import { useAppSelector } from "@/redux";
import styles from "./component.module.css";
import { useTranslation } from "react-i18next";

export function ServerResponse() {
  const { t } = useTranslation(undefined, {
    keyPrefix: "access.server_response",
  });

  const { response } = useAppSelector((s: any) => s.access);

  let message = null;
  if (response) {
    message = t([response.type, "UnexpectedError"]);
  }

  return <div className={styles.serverResponse}>{message}</div>;
}
