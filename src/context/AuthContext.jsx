import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import authThunk from '../store/auth/thunks/auth.thunk';
import { store } from '../store/store';

const AUTH_ROUTES = ['/sign-in', '/sign-up'];

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(state => state.auth);

  useEffect(() => {
    console.log('se ejecuto');
    dispatch(authThunk());
  }, [dispatch]);

  useEffect(() => {
    // console.log('LOADING: ', loading);
    // console.log('AUTH: ', isAuthenticated);
    // console.log('ERROR: ', error);

    if (!loading) {
      if (
        isAuthenticated &&
        AUTH_ROUTES.includes(location.pathname) &&
        //TODO: Cambiar la forma en que lee el error
        error.message === null
      ) {
        navigate('/');
      } else if (
        !isAuthenticated &&
        !AUTH_ROUTES.includes(location.pathname) &&
        error.message !== null
      ) {
        navigate('/sign-in');
      }
    }
  }, [isAuthenticated, loading, location.pathname, navigate, error]);

  return <>{children}</>;
}
