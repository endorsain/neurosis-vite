import { TraductionTestHome } from "../../shared";
import { useAppSelector } from "../../redux";
import styles from "./home-page.module.css";

export function HomePage() {
  const { isAuthenticated, loading } = useAppSelector((s: any) => s.auth);
  const { email, username } = useAppSelector((s: any) => s.user);

  const userInfo = [email, username];

  return (
    <div className={`page_layout ${styles.caca}`}>
      <h1>Home Page</h1>
      <section>
        <h3>Autenticacion</h3>
        <p>authenticated? - {String(isAuthenticated)}</p>
        <p>loading? - {String(loading)}</p>
      </section>
      <section>
        <h3>Informacion del usuario</h3>
        {userInfo.map((v, i) => (
          <p key={i}>{isAuthenticated! ? v : "undefined"}</p>
        ))}
      </section>
      <TraductionTestHome />
    </div>
  );
}
