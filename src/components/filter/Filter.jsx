import styles from "./filter.module.css"
import { useDispatch } from "../../../node_modules/react-redux/es/exports";
import { setFilter } from "../../redux/contactsSlice";


const Filter = () => {

    const dispatch = useDispatch();

    const returnFilter = event => {
        const filter = event.target.value;
        dispatch(setFilter(filter))
    }

    return (
        <>
            <p className={styles.title}>Find contacts by name</p>
            <input className={styles.filter} type="text" name="search" onChange={returnFilter}
            />
        </>
    )
};

export default Filter