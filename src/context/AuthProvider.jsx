import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDataThunk } from '../store/thunks';

// const AUTH_ROUTES = ['/sign-in', '/sign-up'];

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(
    state => state.auth_user
  );

  useEffect(() => {
    console.log('AuthProvider - activador de getDataThunk');
    dispatch(getDataThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log('AuthProvider - isAuthenticated: ', isAuthenticated);
    console.log('AuthProvider - loading: ', loading);
    console.log('AuthProvider - error: ', error);

    if (!loading) {
      if (
        isAuthenticated &&
        // AUTH_ROUTES.includes(location.pathname) &&
        //TODO: Cambiar la forma en que lee el error
        error === null
      ) {
        navigate('/');
      } else if (
        !isAuthenticated &&
        // !AUTH_ROUTES.includes(location.pathname) &&
        error !== null
      ) {
        navigate('/sign-in');
      }
    }
  }, [isAuthenticated, loading, location.pathname, navigate, error]);

  return <>{children}</>;
}
