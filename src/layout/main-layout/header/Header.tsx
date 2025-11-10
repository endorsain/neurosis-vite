import { useAppSelector } from "../../../redux";
import styles from "./header.module.css";

export function Header() {
  const { load_req } = useAppSelector((s) => s.setting.test);

  // console.log("test: ", load_req);
  return (
    <div className={`${styles.base} ${load_req ? styles.loading : ""}`}>
      {!load_req && (
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          sapiente fugiat dolor provident voluptates necessitatibus libero sed
          reprehenderit. Excepturi ex iure soluta sit, architecto nemo sequi
          porro a assumenda culpa.
        </span>
      )}
    </div>
  );
}
