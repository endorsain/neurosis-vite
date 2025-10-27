import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./provider";
import { AccessLayout, MainLayout } from "./layout";
import { HomePage } from "./home";
import { SettingPage } from "./setting";
import { LoginPage, RegisterPage } from "./access";
import { PATHS } from "./shared";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route
          /* element={
            <AuthProvider>
              <MainLayout />
            </AuthProvider>
          } */
          element={<MainLayout />}
        >
          <Route element={<HomePage />} path={PATHS.main.home} />
          <Route element={<SettingPage />} path={PATHS.main.setting} />
        </Route>
        {/* Access */}
        {/* <Route element={<AccessLayout />}>
          <Route element={<LoginPage />} path={PATHS.access.login} />
          <Route element={<RegisterPage />} path={PATHS.access.register} />
        </Route> */}
        <Route element={<AccessLayout />} path={PATHS.access} />
      </Routes>
    </Router>
  );
}

export default App;
