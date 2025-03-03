import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../../icons';
import { requestHelper } from '../../utils/request';
import { menuItems } from './menu-items';
import styles from './menu.module.css';

export default function Menu() {
  const navigate = useNavigate();

  const onSubmit = async (event, value) => {
    event.stopPropagation();

    /* const button = event.currentTarget;
    button.classList.add("loading-button_1"); // Añadir la clase de carga
    button.disabled = true; */

    if (value === '/logout') {
      const response = await requestHelper(
        `${import.meta.env.VITE_SERVER_URL}/common-web-user/sign-out`,
        'DELETE',
        {},
        {}
      );

      if (response.path === '/so/success/') {
        //return router.push('/sign-in');
        return navigate('/sign-in');
      }
    } else {
      console.log('entra a else');
      //router.push(value);
      return navigate(value);
    }
  };
  return (
    <div className={styles.menuGrid}>
      <div className={styles.header}>
        <span>NEUROSIS</span>
        <button
          /* onClick={() => setExpand()} */
          className="button_1"
        >
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
