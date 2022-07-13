import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ type, func, size }) => {
  return (
    <button className={`button button--${size} button--${type}`} onClick={func}>
      {type}
    </button>
  );
};
export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["edit", "delete", "submit"]).isRequired,
  func: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md"]).isRequired,
};
