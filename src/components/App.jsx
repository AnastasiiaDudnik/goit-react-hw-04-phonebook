import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContainer } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContact = () => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacs = JSON.parse(contacts);
  if (contacts !== null) {
    return parsedContacs;
  }

  return initialContacts;
};

export function App() {
  const [contacts, setContacts] = useState(getInitialContact);
  const [filter, setFilter] = useState('');

  const deleteNumber = phoneId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== phoneId),
    }));
  };

  const addContact = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in your contacts.`)
      : setContacts([newContact, ...contacts]);
  };

  const onFilterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <FormContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={deleteNumber} />
    </FormContainer>
  );
}
