import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, AccessThunk } from "../../../redux";
import styles from "./form.module.css";
import { useTranslation } from "react-i18next";
import { ButtonForm, InputForm } from "./util";

export function GoogleRegisterForm() {
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
      AccessThunk.registerWithGoogle({
        ...data,
        googleCredential: google_credential,
      })
    );
    console.log("esto es data de registro con google: ", response);
  };

  return (
    <form
      className={`${styles.change_view} ${styles.form}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      google
      <InputForm
        type={"text"}
        placeholder={t("access.form.username")}
        register={register("username")}
      />
      <InputForm
        type={"password"}
        placeholder={t("access.form.password")}
        register={register("password")}
      />
      <ButtonForm>{t("access.form.button")}</ButtonForm>
    </form>
  );
}
