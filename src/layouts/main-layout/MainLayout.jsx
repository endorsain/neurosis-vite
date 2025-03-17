import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Friends, Menu } from '../../components';
import styles from './main-layout.module.css';
import MobileHeader from './MobileHeader';

export default function MainLayout() {
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
      <div className={styles.loading} />
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
        <Menu />
      </div>
      <div className={styles.friends}>
        <Friends
          expand={expand.friends}
          setExpand={() =>
            setExpand(prev => ({ ...prev, friends: !prev.friends }))
          }
        />
      </div>
      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  );
}
