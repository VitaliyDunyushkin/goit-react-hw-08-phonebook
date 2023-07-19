import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsOperations } from 'redux/contacts';
import css from './contactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}{' '}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
