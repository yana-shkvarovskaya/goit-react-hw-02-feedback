import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedbacksShare,
}) => {
  return (
    <ul className="Statistics__list">
      <li className="Statistics__item">Good:{good}</li>
      <li className="Statistics__item">Neutral:{neutral}</li>
      <li className="Statistics__item">Bad:{bad}</li>
      <li className="Statistics__item">Total:{totalFeedbacks}</li>
      <li className="Statistics__item">
        Positive feedbacks: {positiveFeedbacksShare}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedbacks: PropTypes.number,
  positiveFeedbacksShare: PropTypes.number,
};

export default Statistics;
