import React from "react";
import ListItem from "components/listItem/ListItem";
import styles from "./contactList.module.css"

class ContactList extends React.Component {

    render() {
        return (
            <ul className={styles.contactList}>
                {this.props.contactsArray.map(contact =>
                    <ListItem
                        deleteContact={this.props.deleteContact}
                        key={contact.id}
                        items={contact} />
                )}
            </ul>
        )
    }
}

export default ContactList
