import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGeneralDataThunk } from '../store/thunks';

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(
    state => state.auth_user
  );

  useEffect(() => {
    console.log('AuthProvider - activador de getGeneralDataThunk');
    dispatch(getGeneralDataThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log('AuthProvider - isAuthenticated: ', isAuthenticated);
    console.log('AuthProvider - loading: ', loading);
    console.log('AuthProvider - error: ', error);

    if (!loading) {
      if (isAuthenticated && error === null) {
        navigate('/');
      } else if (!isAuthenticated && error !== null) {
        navigate('/sign-in');
      }
    }
  }, [isAuthenticated, loading, location.pathname, navigate, error]);

  return <>{children}</>;
}
