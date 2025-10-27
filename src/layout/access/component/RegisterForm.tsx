import { useForm } from "react-hook-form";
import styles from "./component.module.css";
import { AccessThunk, useAppDispatch } from "../../../redux";
import { ButtonForm, Input } from "./util";
import { useTranslation } from "react-i18next";

type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export function RegisterForm() {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log("📝 Registro tradicional:", data);
    const response = dispatch(AccessThunk.registerUser(data));
    console.log("esto es data de register: ", response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={t("email")}
        register={register("email")}
      />
      <Input
        type="text"
        placeholder={t("username")}
        register={register("username")}
      />
      <Input
        type="password"
        placeholder={t("password")}
        register={register("username")}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
