import PropTypes from 'prop-types';
import { StatisticCard } from './Statistic.Styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatisticCard>
      {options.map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage} %</p>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
