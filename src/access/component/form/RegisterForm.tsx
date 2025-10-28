import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { AccessThunk, useAppDispatch } from "../../../redux";
import { ButtonForm, InputForm } from "./util";
import { useTranslation } from "react-i18next";

type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export function RegisterForm({ view }: any) {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log("📝 Registro tradicional:", data);
    const response = dispatch(AccessThunk.registerUser(data));
    console.log("esto es data de register: ", response);
  };

  return (
    <form
      className={`${styles.change_view} ${styles.form} ${
        view === "register" ? styles.view_visible : styles.view_hidden
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      register
      <InputForm
        type="text"
        placeholder={t("email")}
        register={register("email")}
      />
      <InputForm
        type="text"
        placeholder={t("username")}
        register={register("username")}
      />
      <InputForm
        type="password"
        placeholder={t("password")}
        register={register("username")}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
