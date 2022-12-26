import React from "react";
import ListItem from "../listItem/ListItem";
import styles from "./contactList.module.css"
import { getContactsFromState, getFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {

    const contacts = useSelector(getContactsFromState);
    const filter = useSelector(getFilter);
    const contactsArray = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={styles.contactList}>
            {contactsArray.map(contact =>
                <ListItem
                    key={contact.id}
                    items={contact} />
            )}
        </ul>
    )
};

export default ContactList
