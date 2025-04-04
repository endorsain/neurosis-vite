import { useState } from 'react';
import { Friends, Menu } from '../../components';
import styles from './mainLayout.module.css';
import MobileHeader from './MobileHeader';

export default function MainLayout({ children }) {
  const [expand, setExpand] = useState({
    menu: false,
    friends: false,
  });

  return (
    <div
      className={`${styles.mainLayoutGrid}
        ${expand.menu ? styles.slideMenu : ''} 
        ${expand.friends ? styles.slideFriends : ''}`}
    >
      <div className={styles.mobileHeader}>
        <MobileHeader
          // setExpand={() => setExpand(prev => ({ ...prev, menu: !prev.menu }))}
          setExpand={setExpand}
        />
      </div>
      <div className={styles.marquee}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        explicabo quod, error praesentium ut est quidem nihil non incidunt
        voluptates laborum ullam eveniet? Voluptatum, architecto. Necessitatibus
        praesentium cum ex delectus.
      </div>
      <div className={styles.menu}>
        <Menu
          setExpand={() =>
            setExpand(prev => ({ menu: !prev.menu, friends: false }))
          }
        />
      </div>
      <div className={styles.friends}>
        <Friends
          expand={expand.friends}
          setExpand={() =>
            setExpand(prev => ({ menu: false, friends: !prev.friends }))
          }
        />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
