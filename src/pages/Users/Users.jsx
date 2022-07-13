import React, { useEffect } from "react";
import { selectUsers } from "../../features/users/usersSlice";
import { useSelector } from "react-redux/es/exports";
import UserCard from "../../components/UI/UserCard/UserCard";
import "./users.scss";

const Users = () => {
  const users = useSelector(selectUsers);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users__users-list">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
