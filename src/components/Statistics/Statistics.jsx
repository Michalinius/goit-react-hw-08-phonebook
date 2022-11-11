import PropTypes from "prop-types"
import style from "./statsStyles.module.css"

export const Statistics = ({ title = null, stats }) => {

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const statsList = stats.map(stat => {
        return (
            <li className={style.item} style={{ backgroundColor: getRandomHexColor() }} key={stat.id} >
                <span className={style.label}>{stat.label}</span>
                <span className={style.percentage}>{stat.percentage}%</span>
            </li >
        )
    })

    return (
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style.stat_list}>
                {statsList}
            </ul>
        </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}