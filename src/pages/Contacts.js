import React, { useEffect } from "react";
import ContactList from "../components/contactList/ContactList";
import "../components/globalStyles.css"
import Filter from "../components/filter/Filter";
import ContactForm from "../components/contactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { getContactsFromAPI } from "../redux/contacts/operations";
import { getLoading } from "../redux/contacts/selectors";

const Contacts = () => {

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

export default Contacts;