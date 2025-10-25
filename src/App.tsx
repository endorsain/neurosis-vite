import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AccessLayout, LoginPage, RegisterPage } from "./access/index";
import { MainLayout, HomePage, RandomPage } from "./main/index";
import { AuthProvider } from "./auth/AuthProvider";
import { PATHS } from "./shared";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route
          element={
            <AuthProvider>
              <MainLayout />
            </AuthProvider>
          }
        >
          <Route element={<HomePage />} path={PATHS.main.home} />
          <Route element={<RandomPage />} path={PATHS.main.random} />
        </Route>
        {/* Access */}
        <Route element={<AccessLayout />}>
          <Route element={<LoginPage />} path={PATHS.access.login} />
          <Route element={<RegisterPage />} path={PATHS.access.register} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
