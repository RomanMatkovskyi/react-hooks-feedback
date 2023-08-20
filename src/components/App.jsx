import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackoptions/feedbackOptions';
import { Notification } from './notification/notification';
import s from './app.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  }

  render() {
    return (
      <section className={s.stat_section}>
        <h1 className={s.mainTitle}>Please leave your feedback</h1>
        <FeedbackOptions options={this.handleFeedback} />
        {this.countTotalFeedback(this.state) === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        )}
      </section>
    );
  }
}

export default App;
