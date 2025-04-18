import { useState, useEffect } from 'react';
import React from 'react';
import Description from './components/description/Description';
import Option from './components/option/Option';
import Feedback from './components/feedback/Feedback';
import Notification from './components/Notification/Notification.jsx';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem('feedback-data');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('feedback-data', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
    localStorage.removeItem('feedback-data');
  };

  const totalFeedback = Object.values(feedback).reduce((acc, val) => acc + val, 0);
  const positivePercentage = totalFeedback
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;

  return (
      <>
        <Description />
        <Option
            handleGood={() => updateFeedback('good')}
            handleNeutral={() => updateFeedback('neutral')}
            handleBad={() => updateFeedback('bad')}
            handleReset={resetFeedback}
            totalFeedback={totalFeedback}
        />

        {totalFeedback > 0 ? (
            <Feedback
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                positivePercentage={positivePercentage}
            />
        ) : (
            <Notification message="No feedback given" />
        )}
      </>
  );
}

export default App;