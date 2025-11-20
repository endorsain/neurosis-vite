import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, AccessThunk } from "@/redux";
import styles from "./form.module.css";
import { useTranslation } from "react-i18next";
import { ButtonForm, InputForm } from "./util";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeGoogleRegisterSchema } from "@/zod";
// import { View } from "../AccessView";

export function GoogleRegisterForm() {
  const { t } = useTranslation();

  const schema = makeGoogleRegisterSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(schema),
  });

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
      className={styles.form}
      // style={{ padding: "10px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      google
      <InputForm
        type={"text"}
        placeholder={t("access.form.username")}
        register={register("username")}
        zodError={errors.username?.message}
      />
      <InputForm
        type={"password"}
        placeholder={t("access.form.password")}
        register={register("password")}
        zodError={errors.password?.message}
      />
      <InputForm
        type={"password"}
        placeholder={t("access.form.password")}
        register={register("confirm_password")}
        zodError={errors.confirm_password?.message}
      />
      <ButtonForm>{t("access.form.button")}</ButtonForm>
    </form>
  );
}
