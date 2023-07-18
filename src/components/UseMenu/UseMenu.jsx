import React from 'react';

import css from './UseMenu.module.css';

export default function UserMenu() {
  return (
    <div className={css.userMenu}>
      <p>mango@mail.com</p>
      <button className={css.userMenu_Btn}>Logout</button>
    </div>
  );
}
