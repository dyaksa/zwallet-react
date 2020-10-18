import React from "react";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/header.css";

const Profile = loadable(() => import("./components/Profile"));

const Header = () => {
  return (
    <header className="navbar-expand-lg d-flex navbar navbar-ligth bg-white justify-content-between">
      <a href="/" className="navbar-brand">
        <h1>Zwallet</h1>
      </a>
      <Profile />
    </header>
  );
};

export default Header;
