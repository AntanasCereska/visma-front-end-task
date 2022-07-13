import React from "react";
import PropTypes from "prop-types";
import "./label-input.scss";

const LabelInput = ({ label, placeholder, value, name, func, type }) => {
  const htmlFor = label.toLowerCase().replaceAll(" ", "-");

  return (
    <div className="label-input">
      <label htmlFor={htmlFor} className="label-input__label">
        {label}
      </label>
      <input
        className="label-input__input"
        type={type}
        onChange={func}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  );
};

export default LabelInput;

LabelInput.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  func: PropTypes.func,
  type: PropTypes.string,
};
