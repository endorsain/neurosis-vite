import { Outlet } from "react-router-dom";
import styles from "../auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleAuthRedux } from "../redux/hooks/useGoogleAuthRedux";
import { clearGoogleCredential } from "../redux/slice/AccessSlice";

export function AccessLayout() {
  useGoogleAuthRedux();
  const dispatch = useDispatch<any>();

  const [authView, setAuthView] = useState<"default" | "googleRegister">(
    "default"
  );

  const { google_loaded, google_credential, error } = useSelector(
    (s: any) => s.access
  );

  useEffect(() => {
    console.log("madrid");
    if (google_credential && error) {
      console.log("error:", error);
      console.log("google_credential: ", google_credential);
      setAuthView("googleRegister");
    }
  }, [google_credential, error]);

  return (
    <div className={styles.auth}>
      <div className={styles.page_container}>
        {authView === "default" ? (
          <Outlet />
        ) : (
          <GoogleRegisterForm
            dispatch={dispatch}
            onCancel={() => setAuthView("default")}
            googleCredential={google_credential}
          />
        )}
      </div>
      <div className={styles.google_section}>
        <div
          id="google-auth-button"
          className={styles.google_button}
          style={{
            opacity: google_loaded ? 1 : 0.5,
          }}
        />
      </div>
      <section className={styles.apartado}>
        {google_credential ? (
          <>
            <h4>Google</h4>
            {google_credential}
          </>
        ) : (
          <>
            <p>No hay credenciales</p>
          </>
        )}
      </section>
    </div>
  );
}

function GoogleRegisterForm({ dispatch, googleCredential, onCancel }: any) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log("📩 Registro con Google + datos extra:", {
      ...data,
      googleCredential,
    });
    // Enviar estos datos al backend
  };

  function handleCancel() {
    console.log("handleCancel");
    dispatch(clearGoogleCredential);
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      Completa tu registro
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
      {/* <button type="button" onClick={onCancel}>
        Volver
      </button> */}
      <button type="button" onClick={handleCancel}>
        Volver
      </button>
    </form>
  );
}
