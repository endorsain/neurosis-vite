import styles from "./component.module.css";

export function Input({ type, placeholder, register }: any) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        autoComplete="off"
        className={styles.input}
      />
      {/* <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque aut
        doloremque deleniti velit harum corrupti, nobis aspernatur expedita
        voluptates, qui blanditiis laboriosam odit, minima ut excepturi vero
        quibusdam omnis!
      </span> */}
    </>
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
