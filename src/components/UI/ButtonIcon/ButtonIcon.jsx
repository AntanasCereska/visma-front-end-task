import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as IconClose } from "../../../assets/close-icon.svg";
import "./button-icon.scss";

const ButtonIcon = ({ iconType, func }) => {
  let Icon;
  switch (iconType) {
    case "close":
      Icon = IconClose;
      break;
    default:
      Icon = null;
  }

  return (
    <button onClick={func} className="button-icon">
      <Icon className="" />
    </button>
  );
};

export default ButtonIcon;

ButtonIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
