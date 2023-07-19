import { useSelector } from 'react-redux/es/hooks/useSelector';

import css from './contactList.module.css';
import ContactItem from '../ContactItem';
import { contactsSelectors } from 'redux/contacts';

export default function ContactList() {
  const filterValue = useSelector(contactsSelectors.selectFilterValue);

  const contacts = useSelector(contactsSelectors.selectContacts).filter(
    contact => contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
