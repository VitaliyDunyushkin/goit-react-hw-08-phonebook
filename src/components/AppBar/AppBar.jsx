import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UseMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';

import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
