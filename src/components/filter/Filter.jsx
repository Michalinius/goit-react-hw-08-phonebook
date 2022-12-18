import React from "react";
import styles from "./filter.module.css"

const Filter = (props) => {

    return (
        <>
            <p className={styles.title}>Find contacts by name</p>
            <input className={styles.filter} type="text" name="search" onChange={event => { props.searching(event) }}
            />
        </>
    )
};

export default Filter