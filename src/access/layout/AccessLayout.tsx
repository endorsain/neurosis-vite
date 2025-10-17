import { Outlet, useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useGoogleAuthRedux } from "../redux/hooks/useGoogleAuthRedux";
import { clearGoogleCredential } from "../redux/slice/AccessSlice";
import { PATHS } from "../../shared";

export function AccessLayout() {
  useGoogleAuthRedux();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [isPending, startTransition] = useTransition();
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
      // startTransition(() => {
      //   setAuthView("googleRegister");
      // });
      // setAuthView("googleRegister");
      navigate(PATHS.access.google);
    }
  }, [google_credential, error]);

  return (
    <div className={styles.auth}>
      <div className={styles.page_container}>
        {/* {authView === "default" ? (
          <Outlet />
        ) : (
          <GoogleRegisterForm
            dispatch={dispatch}
            onCancel={() => setAuthView("default")}
            googleCredential={google_credential}
          />
        )} */}
        <Outlet />
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
    <>
      <button type="button" onClick={handleCancel}>
        Volver
      </button>
      <div style={{ overflow: "hidden", height: "30px" }}>
        {googleCredential}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
