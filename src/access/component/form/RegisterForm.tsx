import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { ButtonForm, InputForm } from "./util";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../zod/AccessSchema";
import React from "react";

// type RegisterData = {
//   email: string;
//   username: string;
//   password: string;
// };

export function RegisterForm({ view }: any) {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  // const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(registerSchema),
    // mode: "onChange", // o "onChange"
  });

  const onSubmit = (data: any) => {
    console.log("Registro probando zod:", data);
    // const response = dispatch(AccessThunk.registerUser(data));
    // console.log("esto es data de register: ", response);
  };

  console.log("RegisterForm renderizado");

  return (
    <form
      className={`${styles.change_view} ${styles.form} ${
        view === "register" ? styles.view_visible : styles.view_hidden
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        type="text"
        placeholder={t("email")}
        register={register("email")}
        zodError={errors.email?.message}
      />
      <InputForm
        type="text"
        placeholder={t("username")}
        register={register("username")}
        zodError={errors.username?.message}
      />
      <InputForm
        type="text"
        placeholder={t("password")}
        register={register("password")}
        zodError={errors.password?.message}
      />
      <InputForm
        type="text"
        placeholder={t("confirm_password")}
        register={register("confirm_password")}
        zodError={errors.confirm_password?.message}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
