import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "@reduxjs/toolkit";
import validateRegister from "../../../utils/validateRegister";
import LabelInput from "../LabelInput/LabelInput";
import LabelPicklist from "../LabelPicklist/LabelPicklist";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import "./register-form.scss";

const RegisterForm = ({ user, submitFunc, title }) => {
  const genders = ["male", "female"];

  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  };

  const [formValues, setFormValues] = useState(user || initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateRegister(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submitFunc(user ? formValues : { ...formValues, id: nanoid() });
      setFormValues(initialValues);
    }
    /* eslint-disable-next-line */
  }, [formErrors]);

  return (
    <div className="reg-form">
      <h3 className="reg-form__title">{title}</h3>
      <form className="reg-form__form" onSubmit={handleSubmit}>
        <div>
          <LabelInput
            type="text"
            label="First name"
            placeholder="First name"
            value={formValues.firstName}
            name="firstName"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.firstName} />
        </div>
        <div>
          <LabelInput
            type="text"
            label="Last name"
            placeholder="Last name"
            value={formValues.lastName}
            name="lastName"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.lastName} />
        </div>
        <div>
          <LabelPicklist
            type="text"
            label="Gender"
            value={formValues.gender}
            name="gender"
            options={genders}
            func={handleChange}
          />
          <ErrorMessage text={formErrors.gender} />
        </div>
        <div>
          <LabelInput
            type="email"
            label="Email"
            placeholder="email"
            value={formValues.email}
            name="email"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.email} />
        </div>
        <div>
          <LabelInput
            type="text"
            label="City"
            placeholder="city"
            value={formValues.city}
            name="city"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.city} />
        </div>
        <div>
          <LabelInput
            type="text"
            label="Street"
            placeholder="street"
            value={formValues.street}
            name="street"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.street} />
        </div>
        <div>
          <LabelInput
            type="text"
            label="House number"
            placeholder="House number"
            value={formValues.houseNumber}
            name="houseNumber"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.houseNumber} />
        </div>
        <div>
          <LabelInput
            type="text"
            label="Zip code"
            placeholder="Zip code"
            value={formValues.zipCode}
            name="zipCode"
            func={handleChange}
          />
          <ErrorMessage text={formErrors.zipCode} />
        </div>
        <span className="reg-form__form-button">
          <Button type="submit" size="md" value="Submit" />
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  user: PropTypes.object,
  submitFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
