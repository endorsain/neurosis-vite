import { ArrowIcon, MenuIcon } from '../../assets/icons';
import styles from './mobileHeader.module.css';

export default function MobileHeader(props) {
  const { setExpand } = props;
  return (
    <div className={styles.mobileHeaderGrid}>
      <button
        onClick={() =>
          setExpand(prev => ({ ...prev, menu: !prev.menu, friends: false }))
        }
        className={`button_1 ${styles.button}`}
      >
        <MenuIcon />
      </button>
      <div className={styles.title}>
        <span>NEUROSIS</span>
      </div>
      <button
        onClick={() =>
          setExpand(prev => ({ ...prev, menu: false, friends: !prev.friends }))
        }
        className={`button_1 ${styles.button}`}
      >
        <ArrowIcon className={styles.sidebarIcon} />
      </button>
    </div>
  );
}
