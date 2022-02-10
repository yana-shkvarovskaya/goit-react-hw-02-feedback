import React, { Component } from "react";
import "index.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import NoFeedback from "components/NoFeedback/NoFeedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handleIncrement}
        />
        <Section title={"Statistics"} />
        {this.countTotalFeedback() === 0 ? (
          <NoFeedback message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={this.countTotalFeedback()}
            positiveFeedbacksShare={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default App;
