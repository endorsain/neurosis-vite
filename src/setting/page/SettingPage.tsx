// import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector, SettingAction } from "../../redux";
import styles from "./setting.module.css";

/* TODO: TEST PARA CARGA EN EL HEADER */
import { useTranslation } from "react-i18next";

export function SettingPage1() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div className={`page_layout ${styles.settings}`}>
      <h1>{t("setting.title")}</h1>
      <span>{t("setting.language.change")}</span>
      <LanguageButton dispatch={dispatch} />
      <span>{t("setting.theme.change")}</span>
      <ThemesButton dispatch={dispatch} />
      <button onClick={() => dispatch(SettingAction.setTest())}>jejeje</button>
    </div>
  );
}

function LanguageButton({ dispatch }: any) {
  const { language } = useAppSelector((s) => s.setting);

  console.log("- settings - lenguaje actual - ", language);

  return (
    <>
      <button
        onClick={() => dispatch(SettingAction.setLanguage("en"))}
        disabled={language === "en"}
      >
        EN
      </button>
      <button
        onClick={() => dispatch(SettingAction.setLanguage("es"))}
        disabled={language === "es"}
      >
        ES
      </button>
    </>
  );
}

function ThemesButton({ dispatch }: any) {
  const { theme } = useAppSelector((s) => s.setting);

  console.log("- settings - tema actual - ", theme);

  return (
    <>
      <button
        onClick={() => dispatch(SettingAction.setTheme("carton"))}
        disabled={theme === "carton"}
      >
        Carton
      </button>
      <button
        onClick={() => dispatch(SettingAction.setTheme("martix"))}
        disabled={theme === "martix"}
      >
        Martix
      </button>
    </>
  );
}

export function SettingPage() {
  const { t } = useTranslation();
  const { language, theme } = useAppSelector((s) => s.setting);
  const dispatch = useAppDispatch();

  return (
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
