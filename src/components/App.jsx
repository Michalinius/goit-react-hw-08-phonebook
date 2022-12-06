import React from "react";
import ContactList from "./contactList/ContactList";
import "./globalStyles.css"
import Filter from "./filter/Filter";
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";



export class App extends React.Component {

  addContact = (event) => {
    event.preventDefault();
    (!!this.state.contacts.find(element => (element.name === event.target.name.value)))
      ? alert(`${event.target.name.value} is already in contacts`)
      : this.setState(prevState => prevState.contacts.push({ name: event.target.name.value, number: event.target.number.value, id: nanoid() })
      )
  }

  searching = event => {
    this.setState({ filter: event.target.value })
  }

  deleteContact = (id) => {
    this.setState(prevState => prevState.contacts = prevState.contacts.filter(element => element.id != id))
  }

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  render() {

    return (
      <>
        <h3>Phonebook</h3>
        <ContactForm
          addContact={this.addContact} />
        <div>
          <h3>Contacts</h3>
          <Filter
            searching={this.searching}
          />
          <ContactList
            deleteContact={this.deleteContact}
            contactsArray={this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))}
          />
        </div>
      </>
    )
  }
};
