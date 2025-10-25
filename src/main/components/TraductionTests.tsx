import { useTranslation } from "react-i18next";
import styles from "./traduction.module.css";

export function TraductionLayout({ children }: any) {
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <span>{t("translation")}</span>
      {children}
    </div>
  );
}

export function TraductionTestHome() {
  const { t } = useTranslation();
  return (
    <TraductionLayout>
      <span>{t("home_test")}</span>
    </TraductionLayout>
  );
}

export function TraductionTestRandom() {
  const { t } = useTranslation();
  return (
    <TraductionLayout>
      <span>{t("random_test")}</span>
    </TraductionLayout>
  );
}

export function TraductionTestAccess() {
  const { t } = useTranslation();
  return (
    <TraductionLayout>
      <span>{t("access_test")}</span>
    </TraductionLayout>
  );
}
