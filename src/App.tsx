import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AccessLayout,
  GoogleRegister,
  LoginPage,
  RegisterPage,
} from "./access/index";
import { MainLayout, HomePage, RandomPage } from "./main/index";
import { AuthProvider } from "./auth/AuthProvider";

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
          <Route element={<HomePage />} path="/" />
          <Route element={<RandomPage />} path="/random" />
        </Route>
        {/* Access */}
        <Route element={<AccessLayout />}>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<GoogleRegister />} path="/google" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
