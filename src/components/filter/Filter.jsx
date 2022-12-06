import React from "react";
import styles from "./filter.module.css"

class Filter extends React.Component {

    render() {
        return (
            <>
                <p className={styles.title}>Find contacts by name</p>
                <input className={styles.filter} type="text" name="search" onChange={event => { this.props.searching(event) }}
                />
            </>
        )
    }
}

export default Filter