import { useForm } from "react-hook-form";
import styles from "../page.module.css";
import { AccessThunk, useAppDispatch } from "../../redux";

type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export function RegisterPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log("📝 Registro tradicional:", data);
    const response = dispatch(AccessThunk.registerUser(data));
    console.log("esto es data de register: ", response);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input type="test" placeholder="Email" {...register("email")} />
      <input type="text" placeholder="Username" {...register("username")} />
      <input type="text" placeholder="Password" {...register("password")} />
      <button type="submit">Enviar</button>
    </form>
  );
}
