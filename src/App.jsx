import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { AuthLayout, MainLayout } from './layouts';
import { Signin, Signup } from './pages/access-pages';
import { CurrentPage, HistoryPage } from './pages/main-pages';

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
          <Route element={<CurrentPage />} path="/" />
          <Route element={<HistoryPage />} path="/history" />
        </Route>
        {/* Otros */}
        <Route element={<AuthLayout />}>
          <Route element={<Signin />} path="/sign-in" />
          <Route element={<Signup />} path="/sign-up" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
