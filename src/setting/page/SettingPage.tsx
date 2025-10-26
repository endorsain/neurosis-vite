// import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector, SettingAction } from "../../redux";
import { TraductionTestSetting } from "../../shared";
import styles from "./setting.module.css";

/* TODO: TEST PARA CARGA EN EL HEADER */
import { setTest } from "../../redux/setting/slice/setting_slice";

export function SettingPage() {
  const dispatch = useAppDispatch();

  return (
    <div className={`page_layout ${styles.settings}`}>
      <h1>Settings</h1>
      <span>cambiar idioma</span>
      <LanguageButton dispatch={dispatch} />
      <span>cambiar tema</span>
      <ThemesButton dispatch={dispatch} />
      <TraductionTestSetting />
      <button onClick={() => dispatch(setTest())}>jejeje</button>
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
