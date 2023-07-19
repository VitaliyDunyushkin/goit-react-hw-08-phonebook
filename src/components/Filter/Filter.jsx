import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './filter.module.css';
import { changeFilter } from 'redux/contacts/filterSlice';
import { contactsSelectors } from 'redux/contacts';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={useSelector(contactsSelectors.selectFilterValue)}
        onChange={handleChange}
        title="Search contacts"
      />
    </>
  );
}
