import React from "react";
import "./nav-desktop.scss";
import { NavLink } from "react-router-dom";

const NavDesktop = () => {
  return (
    <div className="nav-desktop">
      <NavLink className="nav-desktop__navlink" to="/users">
        Users
      </NavLink>
      <NavLink className="nav-desktop__navlink" to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default NavDesktop;
