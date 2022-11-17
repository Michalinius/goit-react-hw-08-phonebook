import React from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section.jsx";
import Notification from "./Notification/Notification.jsx";
import "./globalStyles.css"


export class App extends React.Component {

  state = { good: 0, neutral: 0, bad: 0 };

  handleReviewClick = (whichButtonWasClicked) => {
    switch (whichButtonWasClicked) {
      case "Good": this.setState((prevState) => ({
        ...prevState,
        good: prevState.good + 1,
      }));
        break;
      case "Neutral": this.setState((prevState) => ({
        ...prevState,
        neutral: prevState.neutral + 1,
      }));
        break;
      case "Bad": this.setState((prevState) => ({
        ...prevState,
        bad: prevState.bad + 1,
      }));
        break;
      default: return 0;
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleReviewClick={this.handleReviewClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0
            ? <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
            : <Notification message="There is no feedback" />}
        </Section>
      </div >
    );
  }
};
