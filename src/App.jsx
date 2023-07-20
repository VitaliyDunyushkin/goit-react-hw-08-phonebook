import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';
import { contactsOperations } from 'redux/contacts';

import AppBar from './components/AppBar';
import Container from './components/Container';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const Phonebook = lazy(() => import('pages/PhonebookPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/login" component={<RegisterPage />} />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/phonebook" component={<LoginPage />} />
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
}
