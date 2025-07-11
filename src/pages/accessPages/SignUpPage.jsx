import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpSchema } from '../../schemes';
import { clearMessage } from '../../store/slices';
import { signUpThunk } from '../../store/thunks';
import styles from './accessForm.module.css';
import { AuthResponse, ButtonForm, InputForm } from './UtilsForm';

export default function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const dispatch = useDispatch();
  const { loading, success_message, error } = useSelector(
    state => state.user_access
  );

  const onSubmit = values => {
    dispatch(signUpThunk(values)).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        reset();
      }
    });
  };

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch]);

  // console.log('/sign-up|loading: ', loading);
  // console.log('/sign-up|error: ', error);

  return (
    <div className={styles.auth}>
      <p>
        Do you already have an account?{' '}
        <Link to="/sign-in" className={styles.link}>
          sign in.
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
          register={register('username')}
          placeholder={'username'}
          type={'text'}
          errors={errors.username}
        />
        <InputForm
          register={register('password')}
          placeholder={'password'}
          type={'password'}
          errors={errors.password}
        />
        <InputForm
          register={register('confirmPassword')}
          placeholder={'confirm password'}
          type={'password'}
          errors={errors.confirmPassword}
        />
        <ButtonForm loading={loading} value="sign up" />
        <AuthResponse success={success_message} error={error.message} />
      </form>
    </div>
  );
}
