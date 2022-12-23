import React from "react";
import styles from "./contactForm.module.css"
import { nanoid } from "nanoid";
import { getContacts } from "../../redux/selectors";
import { addContact } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const ContactForm = () => {

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const addingContact = event => {
        event.preventDefault();
        (!!contacts.find(element => (element.name === event.target.name.value)))
            ? alert(`${event.target.name.value} is already in contacts`)
            : dispatch(addContact({ id: nanoid(), name: event.target.name.value, number: event.target.number.value }))
    }

    return (
        <form className={styles.form} onSubmit={addingContact}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label>Number</label>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit" >Add contact</button>
        </form>
    )
};

export default ContactForm
