import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTimerSchema } from '../../../../schemes';
import { addActivityThunk } from '../../../../store/thunks';
import styles from './timersForm.module.css';

export const AddActivityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addTimerSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = value => {
    console.log('addActivityForm - onSubmit');
    const activity = {
      title: value.title,
      createdAt: Date.now,
    };

    dispatch(addActivityThunk(activity));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        placeholder="activities"
        {...register('title')}
      />
      <button className={styles.add}>agregar</button>
    </form>
  );
};
