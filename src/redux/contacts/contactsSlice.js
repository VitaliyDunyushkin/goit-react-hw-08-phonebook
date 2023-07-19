import { createSlice } from '@reduxjs/toolkit';
import contOperations from './cont-operations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [contOperations.fetchContacts.pending]: handlePending,
    [contOperations.fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [contOperations.fetchContacts.rejected]: handleRejected,

    [contOperations.addContact.pending]: handlePending,
    [contOperations.addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [contOperations.addContact.rejected]: handleRejected,

    [contOperations.deleteContact.pending]: handlePending,
    [contOperations.deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    [contOperations.deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
