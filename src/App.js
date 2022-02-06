import 'index.css';
import user from 'user.json';
import UserProfile from 'components/UserProfile/UserProfile';
import data from 'data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'friends.json';
import FriendList from 'components/FriendList/FriendList';
import transactions from 'transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
