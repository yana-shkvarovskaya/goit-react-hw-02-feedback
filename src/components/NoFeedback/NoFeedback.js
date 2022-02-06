import React from "react";
import PropTypes from "prop-types";

const NoFeedback = ({ message }) => {
  return <p>{message}</p>;
};

NoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};
export default NoFeedback;
