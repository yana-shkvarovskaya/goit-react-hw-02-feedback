import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr className={s.tr}>
      <td className={s.td}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
