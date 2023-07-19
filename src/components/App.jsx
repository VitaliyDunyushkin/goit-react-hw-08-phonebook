import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import UserMenu from './UseMenu';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { authOperations, authSelectors } from 'redux/auth';

import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

// ======================  App  ============================
export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
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
    )
  );
}
