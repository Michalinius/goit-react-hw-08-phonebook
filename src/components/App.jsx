// import React, { useEffect, useState } from "react";
import ContactList from "./contactList/ContactList";
import "./globalStyles.css"
import Filter from "./filter/Filter";
// import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";

export const App = () => {

  // const [contacts, setContacts] = useState(() => {
  //   const savedData = localStorage.getItem("contacts")
  //   if (savedData) return JSON.parse(savedData);
  //   else return [];
  // });
  // const [filter, setFilter] = useState("");

  // const addContact = (event) => {
  //   event.preventDefault();
  //   (!!contacts.find(element => (element.name === event.target.name.value)))
  //     ? alert(`${event.target.name.value} is already in contacts`)
  //     : setContacts(prevState => {
  //       const array = [...prevState]
  //       array.push({ id: nanoid(), name: event.target.name.value, number: event.target.number.value })
  //       return array;
  //     }
  //     )
  // }

  // const searching = event => {
  //   setFilter(event.target.value)
  // }

  // const deleteContact = (id) => {
  //   setContacts(prevState => prevState = prevState.filter(element => element.id !== id))
  // }

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // }, [contacts])

  return (
    <>
      <h3>Phonebook</h3>
      <ContactForm />
      <div>
        <h3>Contacts</h3>
        <Filter />
        <ContactList
        />
      </div>
    </>
  )
};
