import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PageLayoutProvider } from './context';
import { AccessLayout, MainLayout, PageLayout } from './layouts';
import { SignInPage, SignUpPage } from './pages/accessPages';
import { ActivitiesPage } from './pages/mainPages';

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
          <Route element={<ActivitiesPage />} path="/" />
        </Route>
        {/* Otros */}
        <Route element={<AccessLayout />}>
          <Route element={<SignInPage />} path="/sign-in" />
          <Route element={<SignUpPage />} path="/sign-up" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
