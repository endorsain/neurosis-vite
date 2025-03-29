import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PageLayoutProvider from './context/page-layout/PageLayoutProvider';
import { AuthLayout, MainLayout, PageLayout } from './layouts';
import { Signin, Signup } from './pages/access-pages';
import { CurrentPage } from './pages/main-pages';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route
          element={
            // <AuthProvider>
            <MainLayout>
              <PageLayoutProvider>
                <PageLayout />
              </PageLayoutProvider>
            </MainLayout>
            // </AuthProvider>
          }
        >
          <Route element={<CurrentPage />} path="/" />
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
