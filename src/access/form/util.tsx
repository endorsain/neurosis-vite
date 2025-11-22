import styles from "./form.module.css";

export function InputForm({ type, placeholder, register, zodError }: any) {
  return (
    <div className={styles.inputForm}>
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
    <div className={styles.buttonForm}>
      <button
        type="submit"
        //   disabled={loading}
      >
        <span>{children}</span>
      </button>
    </div>
  );
}
