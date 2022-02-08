import React from "react";
import PropTypes from "prop-types";
import "./FeedbackOptions.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className="optionList">
      {options.map((option) => {
        return (
          <li key={option} className="optionItem">
            <button
              className="optionBtn"
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
