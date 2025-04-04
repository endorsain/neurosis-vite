import { ArrowIcon } from '../../assets/icons';
import styles from './friends.module.css';

export default function Friends(props) {
  /* const { contacts,setContacts } = props; */
  const { expand, setExpand } = props;
  return (
    <div className={styles.friendsGrid}>
      <div className={styles.header}>
        <button
          onClick={() => setExpand()}
          className={`button_1 ${styles.button}`}
        >
          <ArrowIcon
            className={`${styles.sidebarIcon} ${expand ? styles.rotateIcon : ''}`}
          />
        </button>
        <div>Sidebar</div>
      </div>
      <div>
        <div>Content</div>
      </div>
    </div>
  );
}
