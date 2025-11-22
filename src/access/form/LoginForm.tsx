// import { AccessThunk, useAppDispatch } from "@/redux";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { ButtonForm, InputForm } from "./util";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeLoginSchema } from "@/zod";
import { AccessThunk, useAppDispatch } from "@/redux";

export function LoginForm({ view }: any) {
  const { t } = useTranslation(undefined, { keyPrefix: "access.form" });
  const dispatch = useAppDispatch();

  const schema = makeLoginSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      // credential: "mauro.blanco.cuentas@gmail.com",
      credential: "maurogooglee",
      password: "hola123",
      // confirmPassword: "hola123",
    },
  });

  const onSubmit = async (data: any) => {
    console.log("📝 Inicio de sesion tradicional:", data);
    await dispatch(AccessThunk.loginUser(data));
    // console.log("esto es data de login: ", response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* login */}
      <InputForm
        type="text"
        placeholder={t("credential")}
        register={register("credential")}
        zodError={errors.credential?.message}
      />
      <InputForm
        type="text"
        placeholder={t("password")}
        register={register("password")}
        zodError={errors.password?.message}
      />
      <ButtonForm>{t("button")}</ButtonForm>
    </form>
  );
}
