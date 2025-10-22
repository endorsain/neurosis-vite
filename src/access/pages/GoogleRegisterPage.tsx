import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import { AccessThunks } from "../redux";
import { useEffect } from "react";

export function GoogleRegisterPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

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

  console.log("google_credential: ", google_credential);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          {...register("username")}
        />
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}
