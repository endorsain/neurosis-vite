import { useForm } from "react-hook-form";
import styles from "../page.module.css";
import { AccessThunk, useAppDispatch } from "../../redux";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("📝 Inicio de sesion tradicional:", data);
    const response = dispatch(AccessThunk.loginUser(data));
    console.log("esto es data de login: ", response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username or Email"
        {...register("credential")}
      />
      <input type="text" placeholder="Password" {...register("password")} />
      <button type="submit">Enviar</button>
    </form>
  );
}
