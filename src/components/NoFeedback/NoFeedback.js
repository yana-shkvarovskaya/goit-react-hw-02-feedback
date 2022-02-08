import React from "react";
import PropTypes from "prop-types";
import "./NoFeedback.css";

const NoFeedback = ({ message }) => {
  return <p className="NoFeedback">{message}</p>;
};

NoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoFeedback;
