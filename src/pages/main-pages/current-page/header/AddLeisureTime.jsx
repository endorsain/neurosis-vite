import { addLeisureThunk } from '@/store/slices/leisure/leisure.thunk';
import { useAppDispatch } from '@/store/useStore';
import { useForm } from 'react-hook-form';
import './add-leisure-timer.css';

const AddLeisureTimer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useAppDispatch();
  //const { list } = useAppSelector((state) => state.leisure);
  const onSubmit = async value => {
    console.log(value);
    await dispatch(
      addLeisureThunk({
        title: value.title,
      })
    );
  };

  //console.log("New List(add leisure): ", list);

  return (
    <form className="addleisuretimer-ctn" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('title')}
        className="input_2"
        placeholder="ADD LEISURE TIMER"
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`button_2 ${isSubmitting ? 'loading' : ''}`}
      >
        {/* Add leisure timer */}
        ADD
      </button>
    </form>
  );
};

export default AddLeisureTimer;
