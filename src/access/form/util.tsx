import styles from "./form.module.css";

export function InputForm({ type, placeholder, register, zodError }: any) {
  // console.log(zodError);

  return (
    <div className={styles.input_form}>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        autoComplete="off"
      />
      <span>{zodError && zodError}</span>
    </div>
  );
}

export function ButtonForm({ children }: any) {
  return (
    <div className={styles.buttom_form_container}>
      <button
        type="submit"
        //   disabled={loading}
        className={styles.button_form}
      >
        <span>{children}</span>
      </button>
    </div>
  );
}
