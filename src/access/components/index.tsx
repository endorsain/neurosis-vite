import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import { AccessThunks } from "../redux";
import styles from "../auth.module.css";
import { useTranslation } from "react-i18next";

export function RoutesButton({
  currentPath,
  accessPaths,
  navigate,
  dispatch,
  setChangeView,
  changeView,
}: any) {
  console.log("currentPath: ", currentPath);

  if (changeView === "pages" && currentPath === accessPaths?.login) {
    return (
      <button onClick={() => navigate(accessPaths.register)}>register</button>
    );
  } else if (changeView === "pages" && currentPath === accessPaths?.register) {
    return <button onClick={() => navigate(accessPaths?.login)}>login</button>;
  } else {
    function handler() {
      dispatch();
      setChangeView();
    }
    return <button onClick={handler}>volver</button>;
  }
}

export function GoogleRegisterView({ changeView }: any) {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();
  const { google_credential } = useAppSelector((s: any) => s.access);

  const onSubmit = async (data: any) => {
    console.log("📩 Registro con Google + datos extra:", {
      ...data,
      google_credential,
    });
    const response = dispatch(
      AccessThunks.registerWithGoogle({
        ...data,
        googleCredential: google_credential,
      })
    );
    console.log("esto es data de registro con google: ", response);
  };

  return (
    <div
      className={`${styles.view} ${
        changeView === "google" ? styles.active : ""
      }`}
    >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={t("access.form.username")}
          {...register("username")}
        />
        <input
          type="password"
          placeholder={t("access.form.password")}
          {...register("password")}
        />
        <button type="submit">{t("access.form.button")}</button>
      </form>
    </div>
  );
}
