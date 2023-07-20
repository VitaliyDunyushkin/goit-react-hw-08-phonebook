import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { authSelectors } from 'redux/auth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getFetchingCurrentUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
