import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={css.link}>
      Home
    </NavLink>

    <NavLink to="/phonebook" className={css.link}>
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
