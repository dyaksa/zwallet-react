import React from "react";
import { Link } from "react-router-dom";
import iconGrid from "../asset/grid.svg";
import iconArrow from "../asset/arrow-up.svg";
import iconLogout from "../asset/log-out.svg";
import iconPlus from "../asset/plus.svg";
import iconUser from "../asset/user.svg";

const Nav = () => {
  return (
    <>
      <div className="mb-5">
        <ul className="nav">
          <li className="nav__item">
            <Link to="/dashboard">
              <img className="mr-3" src={iconGrid} alt="icon-grid"></img>{" "}
              Dashboard
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/transfer">
              <img className="mr-3" src={iconArrow} alt="icon-arrow"></img>
              Transfer
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/topup">
              <img className="mr-3" src={iconPlus} alt="icon-plus"></img>Top Up
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/profile">
              <img className="mr-3" src={iconUser} alt="icon-user"></img>Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__signout mt-5">
        <Link to="/">
          <img className="mr-3" src={iconLogout} alt="icon-logout"></img>Logout
        </Link>
      </div>
    </>
  );
};

export default Nav;
