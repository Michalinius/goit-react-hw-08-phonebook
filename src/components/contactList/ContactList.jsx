import React from "react";
import ListItem from "../listItem/ListItem";
import styles from "./contactList.module.css"

const ContactList = (props) => {

    return (
        <ul className={styles.contactList}>
            {props.contactsArray.map(contact =>
                <ListItem
                    deleteContact={props.deleteContact}
                    key={contact.id}
                    items={contact} />
            )}
        </ul>
    )
};

export default ContactList
