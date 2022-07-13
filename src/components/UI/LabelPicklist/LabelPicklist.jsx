import React from "react";
import PropTypes from "prop-types";
import "./label-picklist.scss";

const LabelPicklist = ({ label, options, name, value, func }) => {
  const htmlFor = label.toLowerCase().replace(" ", "-");

  return (
    <div className="label-picklist">
      <label htmlFor={htmlFor} className="label-picklist__label">
        {label}
      </label>
      <select
        className="label-picklist__picklist"
        onChange={func}
        name={name}
        id={htmlFor}
        value={value}
      >
        <option style={{ display: "none" }}>
          -- select {name.replaceAll("_", " ")} --
        </option>
        {options?.map((option) => (
          <option value={option?.title || option} key={option?.title || option}>
            {option.title || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabelPicklist;

LabelPicklist.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  func: PropTypes.func,
};
