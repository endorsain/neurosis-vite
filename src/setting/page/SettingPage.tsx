// import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector, SettingAction } from "../../redux";
import { TraductionTestSetting } from "../../shared";
import styles from "./setting.module.css";

export function SettingPage() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <span>cambiar idioma</span>
      <LanguageButton dispatch={dispatch} />
      <span>cambiar tema</span>
      <ThemesButton dispatch={dispatch} />
      <CuadradosAuxilires />
      <TraductionTestSetting />
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
        onClick={() => dispatch(SettingAction.setTheme("light"))}
        disabled={theme === "light"}
      >
        Light
      </button>
      <button
        onClick={() => dispatch(SettingAction.setTheme("dark"))}
        disabled={theme === "dark"}
      >
        Dark
      </button>
      <button
        onClick={() => dispatch(SettingAction.setTheme("pink"))}
        disabled={theme === "pink"}
      >
        Pink
      </button>
    </>
  );
}

function CuadradosAuxilires() {
  return <div className={styles.cuadrado}>HOLA</div>;
}
