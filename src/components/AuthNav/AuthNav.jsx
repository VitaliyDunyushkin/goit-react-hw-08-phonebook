import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.link}>
        LogIn
      </NavLink>
    </div>
  );
}
