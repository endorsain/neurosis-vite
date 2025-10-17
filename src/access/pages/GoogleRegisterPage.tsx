import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearGoogleCredential } from "../redux/slice/AccessSlice";

export function GoogleRegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { google_credential } = useSelector((s: any) => s.access);

  useEffect(() => {
    // if (!google_credential) navigate(-1);
    // if (!google_credential) navigate("../login");
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
    dispatch(clearGoogleCredential());
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
