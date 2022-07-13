import React from "react";
import PropTypes from "prop-types";
import "./error-message.scss";

const ErrorMessage = ({ text }) => {
  return text && <div className="error-message">{text}</div>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  text: PropTypes.string,
};
