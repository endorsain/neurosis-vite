import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";

type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log("📝 Registro tradicional:", data);
  };

  return (
    <div className={styles.page_container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Link to="/login" className={styles.nav_link}>
          Iniciar Sesión
        </Link>
        <input type="test" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Username" {...register("username")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
