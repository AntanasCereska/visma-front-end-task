import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteUser, editUserGeo } from "../../../features/users/usersSlice";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./user-card.scss";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (user) => {
    dispatch(editUserGeo(user));
    setIsModalOpen(false);
  };

  const handleDeleteUser = (user) => {
    if (confirm("Are you sure you want to delete this user?")) {
      dispatch(
        deleteUser({
          id: user.id,
        })
      );
    }
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit user"
      >
        <RegisterForm
          user={user}
          title="Edit user"
          submitFunc={handleEditUser}
        />
      </Modal>
      <div className={`user-card user-card--${user.gender}`}>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.email}</p>
        <div>
          <span>{user.city}</span>,&nbsp;
          <span>{user.street}</span>,&nbsp;
          <span>{user.houseNumber}</span>
        </div>
        <p>{user.zipCode}</p>
        <p>Lat: {user.latitude}</p>
        <p> Long: {user.longitude}</p>
        <div className="user-card__buttons">
          <Button type="edit" size="sm" func={() => setIsModalOpen(true)} />
          <Button type="delete" size="sm" func={() => handleDeleteUser(user)} />
        </div>
      </div>
    </>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    houseNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zipCode: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};
