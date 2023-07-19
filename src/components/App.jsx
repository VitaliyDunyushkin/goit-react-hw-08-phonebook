import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import UserMenu from './UseMenu';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { authOperations } from 'redux/auth';

import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <hr />
      <RegisterPage />
      <hr />
      <LoginPage />
      <hr />
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
