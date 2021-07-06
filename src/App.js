import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';

class App extends React.Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
}
  render() {
    return (
      <div>
  <Section title="Phonebook">
  <ContactForm/>
</Section>
  <Section title="Contacts">
  <Filter/>
  <ContactList />
  </Section>
</div>
    );
  }
}

export default App;
