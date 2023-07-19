const selectContacts = state => state.contacts.contacts.items;
const selectIsLoading = state => state.contacts.contacts.isLoading;
const selectError = state => state.contacts.contacts.error;

const selectFilterValue = state => state.filter;

const selectors = {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
};

export default selectors;
