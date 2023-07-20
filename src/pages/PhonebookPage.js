import React from 'react';
import { useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import { contactsSelectors } from 'redux/contacts';

export default function Phonebook() {
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}
