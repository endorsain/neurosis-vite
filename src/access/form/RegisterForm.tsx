import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { ButtonForm, InputForm } from "./util";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeRegisterSchema } from "@/zod/access";
import { AccessThunk, useAppDispatch, useAppSelector } from "@/redux";

export function RegisterForm() {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  const dispatch = useAppDispatch();
  // const { response } = useAppSelector((s) => s.access);

  const schema = makeRegisterSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "mauro.blanco.cuentas@gmail.com",
      username: "maurogooglee",
      password: "hola123",
      confirmPassword: "hola123",
    },
  });

  const onSubmit = async (data: any) => {
    const { confirmPassword, ...withoutConfirm } = data;
    await dispatch(AccessThunk.registerUser(data));
  };

  console.log("RegisterForm renderizado");

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        register={register("confirmPassword")}
        zodError={errors.confirm_password?.message}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
