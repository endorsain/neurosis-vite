import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";

type LoginData = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log("📝 Registro tradicional:", data);
    // Enviar datos del formulario tradicional
  };

  return (
    <>
      <Link to="/register">Ir a Registro</Link>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
