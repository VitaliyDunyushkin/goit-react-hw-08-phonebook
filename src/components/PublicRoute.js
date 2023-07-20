import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { authSelectors } from 'redux/auth';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
