import styles from "./form.module.css";

export function InputForm({ type, placeholder, register }: any) {
  return (
    <div className={styles.input_form}>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        autoComplete="off"
      />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque aut
        doloremque deleniti velit harum corrupti, nobis aspernatur expedita
        voluptates, qui blanditiis laboriosam odit, minima ut excepturi vero
        quibusdam omnis!
      </span>
    </div>
  );
}

export function ButtonForm({ children }: any) {
  return (
    <button
      type="submit"
      //   disabled={loading}
      className={styles.button_form}
    >
      <span>{children}</span>
    </button>
  );
}
