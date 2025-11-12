// import { useTranslation } from "react-i18next";
import { PageLayout, View } from "@/layout";
import { useAppDispatch, useAppSelector, SettingAction } from "../../redux";
import styles from "./setting.module.css";

/* TODO: TEST PARA CARGA EN EL HEADER */
import { useTranslation } from "react-i18next";

export function SettingPage() {
  /* return (
    <section className={`page_layout ${styles.settings2}`}>
      <SettingBox>
        <h1>{t("setting.title")}</h1>
      </SettingBox>
      <SettingBox>
        <Language language={language} dispatch={dispatch} t={t} />
      </SettingBox>
      <SettingBox>
        <Theme theme={theme} dispatch={dispatch} t={t} />
      </SettingBox>
    </section>
  ); */
  return (
    <PageLayout>
      <SettingView />
    </PageLayout>
  );
}
function SettingView() {
  const { t } = useTranslation();
  const { language, theme } = useAppSelector((s) => s.setting);
  const dispatch = useAppDispatch();

  return (
    <View viewname="setting">
      <section className={`page_layout ${styles.settings2}`}>
        <SettingBox>
          <h1>{t("setting.title")}</h1>
        </SettingBox>
        <SettingBox>
          <Language language={language} dispatch={dispatch} t={t} />
        </SettingBox>
        <SettingBox>
          <Theme theme={theme} dispatch={dispatch} t={t} />
        </SettingBox>
      </section>
    </View>
  );
}

function SettingBox({ children }: any) {
  return <div className={styles.box}>{children}</div>;
}

function Language({ language, dispatch, t }: any) {
  return (
    <form>
      <h2>{t("setting.language.title")}</h2>
      <input
        type="radio"
        name="language"
        value="en"
        checked={language === "en"}
        onChange={() => dispatch(SettingAction.setLanguage("en"))}
      />
      {t("setting.language.en")}
      <input
        type="radio"
        name="language"
        value="en"
        checked={language === "es"}
        onChange={() => dispatch(SettingAction.setLanguage("es"))}
      />
      {t("setting.language.es")}
    </form>
  );
}

function Theme({ theme, dispatch, t }: any) {
  return (
    <form>
      <h2>{t("setting.theme")}</h2>
      <input
        type="radio"
        name="theme"
        value="carton"
        checked={theme === "carton"}
        onChange={() => dispatch(SettingAction.setTheme("carton"))}
      />
      Carton
      <input
        type="radio"
        name="theme"
        value="martix"
        checked={theme === "martix"}
        onChange={() => dispatch(SettingAction.setTheme("carton"))}
      />
      Martix
    </form>
  );
}
