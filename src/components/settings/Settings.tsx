// import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import styles from "./settings.module.css";
import { setLanguage, setTheme } from "./SettingsSlice";

export function Settings() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <span>cambiar idioma</span>
      <LanguageButton dispatch={dispatch} />
      <span>cambiar tema</span>
      <ThemesButton dispatch={dispatch} />
      <CuadradosAuxilires />
    </div>
  );
}

function LanguageButton({ dispatch }: any) {
  const { language } = useAppSelector((s) => s.settings);

  console.log("- settings - lenguaje actual - ", language);

  return (
    <>
      <button
        onClick={() => dispatch(setLanguage("en"))}
        disabled={language === "en"}
      >
        EN
      </button>
      <button
        onClick={() => dispatch(setLanguage("es"))}
        disabled={language === "es"}
      >
        ES
      </button>
    </>
  );
}

function ThemesButton({ dispatch }: any) {
  const { theme } = useAppSelector((s) => s.settings);

  console.log("- settings - tema actual - ", theme);

  return (
    <>
      <button
        onClick={() => dispatch(setTheme("light"))}
        disabled={theme === "light"}
      >
        Light
      </button>
      <button
        onClick={() => dispatch(setTheme("dark"))}
        disabled={theme === "dark"}
      >
        Dark
      </button>
      <button
        onClick={() => dispatch(setTheme("pink"))}
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
