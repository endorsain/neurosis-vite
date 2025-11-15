import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { AuthProvider } from "./provider";
import { MainLayout } from "./layout";
import { HomePage } from "./home";
import { SettingPage } from "./setting";
// import { PATHS } from "./shared";
import { AccessPage } from "./access";

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
          {/* <Route element={<HomePage />} path={PATHS.main.home} /> */}
          {/* <Route element={<SettingPage />} path={PATHS.main.setting} /> */}
          <Route element={<HomePage />} path="/home" />
          <Route element={<SettingPage />} path="/setting" />
        </Route>
        {/* Access */}
        {/* <Route element={<AccessPage />} path={PATHS.access} /> */}
        <Route element={<AccessPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
