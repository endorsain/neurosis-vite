import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signinSchema } from '../../utils/schemes/auth.schema';
import styles from './auth-form.module.css';
import { AuthResponse, ButtonForm, InputForm } from './UtilsForm';
// firebase
import { useDispatch, useSelector } from 'react-redux';
import { signinThunk } from '../../store/auth/thunks';

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const onSubmit = value => {
    dispatch(signinThunk(value)).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        console.log('Entraste!');
        // return navigate('/');
      }
    });
  };

  // console.log('/sign-in|loading: ', loading);
  // console.log('/sign-in|error: ', error);

  return (
    <div className={styles.auth}>
      <p>
        You do not have an account?{' '}
        <Link to="/sign-up" className={styles.link}>
          sign up.
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
      >
        <InputForm
          register={register('email')}
          placeholder={'email'}
          type={'text'}
          errors={errors.email}
        />
        <InputForm
          register={register('password')}
          placeholder={'password'}
          type={'password'}
          errors={errors.password}
        />
        <ButtonForm loading={loading} value="sign in" />
        <AuthResponse error={error.message} />
      </form>
    </div>
  );
}
