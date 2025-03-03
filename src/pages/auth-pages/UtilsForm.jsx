import styles from './utils-form.module.css';

export function InputForm(props) {
  const { register, placeholder, type, errors } = props;
  return (
    <div className={styles.input}>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        autoComplete="off"
        className="input_1"
      />
      <span className={styles.error}>
        {errors && <p className={styles.errorMsg}>{errors.message}</p>}
      </span>
    </div>
  );
}

export function ButtonForm(props) {
  const { loading, value } = props;
  return (
    <button
      type="submit"
      disabled={loading}
      className={`button_1 ${styles.button} ${loading ? 'loading' : ''}`}
    >
      <span>{value}</span>
    </button>
  );
}

export function AuthResponse(props) {
  const { success = null, error = null } = props;
  return (
    <p
      className={`${styles.requestMsg} ${error ? styles.error : styles.success}`}
    >
      {error || success}
    </p>
  );
}
