import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={s.item}>
      {isOnline ? (
        <span className={s.statusTrue}>&bull;</span>
      ) : (
        <span className={s.statusFalse}>&bull;</span>
      )}

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
