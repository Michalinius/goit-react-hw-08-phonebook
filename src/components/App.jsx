import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friendsData from 'components/FriendList/friendsData'
import TransactionHistory from './TransactionHistory/TransactionHistory';
import history from 'components/TransactionHistory/history.json'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      <FriendList
        friends={friendsData}
      />
      <TransactionHistory
        items={history}
      />
    </div>
  );
};
