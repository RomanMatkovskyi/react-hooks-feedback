import s from './feedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options }) => {
  return (
    <ul className={s.btn_list}>
      <li>
        <button name="good" className={s.btn} onClick={options}>
          Good
        </button>
      </li>
      <li>
        <button name="neutral" className={s.btn} onClick={options}>
          Neutral
        </button>
      </li>
      <li>
        <button name="bad" className={s.btn} onClick={options}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func,
};
