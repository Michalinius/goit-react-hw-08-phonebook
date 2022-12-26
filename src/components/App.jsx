import React, { useEffect } from "react";
import ContactList from "./contactList/ContactList";
import "./globalStyles.css"
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { getContactsFromAPI } from "../redux/operations";
import { getLoading } from "../redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  // console.log(dispatch)
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getContactsFromAPI())
  }, [dispatch])

  return (
    <>
      <h3>Phonebook</h3>
      <ContactForm />
      <div>
        <h3>Contacts</h3>
        <Filter />
        {isLoading
          ? <p>Please wait</p>
          : <ContactList />}
      </div>
    </>
  )
};
