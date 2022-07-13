import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addUserGeo } from "../../features/users/usersSlice";
import RegisterForm from "../../components/UI/RegisterForm/RegisterForm";
import "./register.scss";

const Register = () => {
  const dispatch = useDispatch();

  const handleAddUser = (user) => {
    dispatch(
      addUserGeo({
        id: nanoid(),
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        email: user.email,
        city: user.city,
        street: user.street,
        houseNumber: user.houseNumber,
        zipCode: user.zipCode,
      })
    );
  };

  return (
    <div className="register">
      <RegisterForm title="Edit user" submitFunc={handleAddUser} />
    </div>
  );
};

export default Register;
