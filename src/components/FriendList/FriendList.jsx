import style from "./friendsStyles.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    const statusColor = isOnline ? "green" : "red"
    return (
        <li className={style.item} >
            <span className={style.status} style={{ backgroundColor: statusColor }}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}



function FriendList({ friends }) {



    return (
        <ul className={style.friendlist}>
            {friends.map(friend =>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />

            )}
        </ul>
    );
}

export default FriendList;