import React, { Component } from 'react';
import { Statistics } from './Statistic/Statistic';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notifcation/Notification';
import { Container } from './Container/Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const target = e.currentTarget.name;

    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()
            }
          />
        )}
      </Container>
    );
  }
}

export default App;
