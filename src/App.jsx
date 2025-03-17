import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { AuthLayout, MainLayout } from './layouts';
import { Signin, Signup } from './pages/auth-pages';
import { CurrentPage, HistoryPage } from './pages/main-pages';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Main */}
          <Route element={<MainLayout />}>
            <Route element={<CurrentPage />} path="/" />
            <Route element={<HistoryPage />} path="/history" />
          </Route>
          {/* Otros */}
          <Route element={<AuthLayout />}>
            <Route element={<Signin />} path="/sign-in" />
            <Route element={<Signup />} path="/sign-up" />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
