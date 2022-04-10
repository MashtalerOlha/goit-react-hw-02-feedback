import PropTypes from 'prop-types';
import { Button, Title } from './Feedback.Styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
