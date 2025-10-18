import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AccessActions } from "../redux";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";

export function GoogleRegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { google_credential } = useAppSelector((s: any) => s.access);

  useEffect(() => {
    if (!google_credential) navigate("../login", { replace: true });
  }, [google_credential]);

  const onSubmit = async (data: any) => {
    console.log("📩 Registro con Google + datos extra:", {
      ...data,
      // googleCredential,
    });
    // Enviar estos datos al backend
  };

  function handleCancel() {
    console.log("handleCancel");
    dispatch(AccessActions.clearGoogleCredential());
    navigate(-1 as any, { replace: true });
  }

  console.log("google_credential: ", google_credential);

  return (
    <>
      <button onClick={handleCancel}>Volver</button>
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
