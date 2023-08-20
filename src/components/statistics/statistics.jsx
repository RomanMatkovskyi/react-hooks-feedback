import s from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={s.secondary_title}>Statistics</h2>
      <ul className={s.list}>
        <li className={s.list_item}>Good: {good}</li>
        <li className={s.list_item}>Neutral: {neutral}</li>
        <li className={s.list_item}>Bad: {bad}</li>
        <li className={s.list_item}>Total: {total}</li>
      </ul>
      <p className={s.positive_stat}>
        Positive feetback: {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
