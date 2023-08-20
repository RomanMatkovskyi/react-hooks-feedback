import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackoptions/feedbackOptions';
import { Notification } from './notification/notification';
import s from './app.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback(good, neutral, bad)) * 100);
  };

  return (
    <section className={s.stat_section}>
      <h1 className={s.mainTitle}>Please leave your feedback</h1>
      <FeedbackOptions options={handleFeedback} />
      {countTotalFeedback(good, neutral, bad) === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </section>
  );
};

export default App;
