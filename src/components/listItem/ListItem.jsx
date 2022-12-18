import React from "react"
import styles from "./listItem.module.css"


const ListItem = (props) => {

    const item = props.items

    return (
        <>
            <li> {item.name} {item.number} <button className={styles.deleteContact} type="button" onClick={() => props.deleteContact(item.id)}>Delete</button></li>
        </>
    )
};

export default ListItem
