import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
import UserMenu from './UseMenu';

import RegisterPage from 'pages/RegisterPage';

// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <UserMenu />
      <hr />
      <RegisterPage />

      {/* <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList /> */}
    </>
  );
}
