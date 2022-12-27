import React from "react"
import styles from "./listItem.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";


const ListItem = (props) => {

    const dispatch = useDispatch();
    const item = props.items
    const deleteContactBtn = () => {
        dispatch(deleteContact(item.id));
    }

    return (
        <>
            <li> {item.name} {item.number} <button className={styles.deleteContact} type="button" onClick={deleteContactBtn}>Delete</button></li>
        </>
    )
};

export default ListItem
