import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);
  return (
    <ul className={css.list}>
      {optionsBtn.map(option => {
        return (
          <li key={option}>
            <button
              name={option}
              type="button"
              onClick={onLeaveFeedback}
              className={css.button}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func.isRequired,
};
