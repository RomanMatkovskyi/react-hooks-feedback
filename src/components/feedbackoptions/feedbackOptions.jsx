import s from './feedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options }) => {
  return (
    <ul className={s.btn_list}>
      <li>
        <button className={s.btn} onClick={() => options('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={s.btn} onClick={() => options('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.btn} onClick={() => options('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func,
};
