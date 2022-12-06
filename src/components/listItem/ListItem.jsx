import React from "react"
import styles from "./listItem.module.css"


class ListItem extends React.Component {

    item = this.props.items

    render() {
        return (
            <>
                <li> {this.item.name} {this.item.number} <button className={styles.deleteContact} type="button" onClick={() => this.props.deleteContact(this.item.id)}>Delete</button></li>
            </>
        )
    }
}

export default ListItem
