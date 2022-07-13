const validateRegister = (values) => {
  const errors = {};
  const regex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

  if (!values.firstName) {
    errors.firstName = "First name is required!";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First name should be at least 2 characters long!";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length < 2) {
    errors.firstName = "Last name should be at least 2 characters long!";
  }

  if (!values.gender) {
    errors.gender = "Gender must be selected!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (regex.test(values.email)) {
    errors.email = "Email formatting is bad!";
  }

  if (!values.city) {
    errors.city = "City is required!";
  }

  if (!values.street) {
    errors.street = "Street is required!";
  }

  if (!values.houseNumber) {
    errors.houseNumber = "House Number is required!";
  }

  if (!values.zipCode) {
    errors.zipCode = "Zip code is required!";
  }

  return errors;
};
export default validateRegister;
