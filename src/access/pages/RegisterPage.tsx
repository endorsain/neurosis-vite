import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
import { AccessThunks } from "../redux";
import { useAppDispatch } from "../../redux/useStore";

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
    const response = dispatch(AccessThunks.registerUser(data));
    console.log("esto es data de register: ", response);
  };

  return (
    <>
      {/* <Link to="/login">Ir a Login</Link> */}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="test" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Username" {...register("username")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
