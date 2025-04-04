import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../../assets/icons';
import { logOutThunk } from '../../store/thunks';
import { menuItems } from './menu-items';
import styles from './menu.module.css';

export default function Menu(props) {
  const { setExpand } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (event, value) => {
    event.stopPropagation();

    // const button = event.currentTarget;
    // button.classList.add('loading'); // Añadir la clase de carga
    // button.disabled = true;

    if (value === '/logout') {
      dispatch(logOutThunk()).then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          return navigate('/sign-in');
        }
      });
    } else {
      setExpand();
      return navigate(value);
    }
  };
  return (
    <div className={styles.menuGrid}>
      <div className={styles.header}>
        <span>NEUROSIS</span>
        <button onClick={() => setExpand()} className="button_1">
          <MenuIcon className={styles.sidebarIcon} />
        </button>
      </div>
      <div className={styles.buttons}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            onSubmit={event => onSubmit(event, item.link)}
          />
        ))}
      </div>
      <div className={styles.reminders}>reminders</div>
    </div>
  );
}

const MenuItem = ({ label, onSubmit }) => (
  <button
    className={`button_1 ${styles.button}`}
    onClick={event => onSubmit(event)}
  >
    {label}
  </button>
);
