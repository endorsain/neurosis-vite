// import { useEffect } from "react";
import { useSelector } from "react-redux";

export function HomePage() {
  const { isAuthenticated, loading } = useSelector((s: any) => s.auth);
  const { email, username } = useSelector((s: any) => s.user);

  const userInfo = [email, username];
  return (
    <div>
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
    </div>
  );
}
