import { AccessThunk, useAppDispatch } from "../../../redux";
import { useForm } from "react-hook-form";
import styles from "./component.module.css";
import { ButtonForm, Input } from "./util";
import { useTranslation } from "react-i18next";

export function LoginForm() {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("📝 Inicio de sesion tradicional:", data);
    const response = dispatch(AccessThunk.loginUser(data));
    console.log("esto es data de login: ", response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={t("credential")}
        register={register("credential")}
      />
      <Input
        type="password"
        placeholder={t("password")}
        register={register("password")}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
