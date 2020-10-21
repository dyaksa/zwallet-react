import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";
import "./asset/header.css";
import { useDispatch, useSelector } from "react-redux";
import { GetUserLogin } from "../../redux/action/User";

const Profile = loadable(() => import("./components/Profile"));

const Header = () => {
  const { data } = useSelector((s) => s.Auth);
  const {user} = useSelector((s) => s.User);
  const [profile, setProfile] = useState(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserLogin(data.accessToken));
    setProfile(user);
  },[]);

  return (
    <header className="navbar-expand-lg d-flex navbar navbar-ligth bg-white justify-content-between">
      <a href="/" className="navbar-brand">
        <h1>Zwallet</h1>
      </a>
        <Profile key={user.id} name={`${user.firstName} ${user.lastName}`} phone={user.phone}/>
    </header>
  );
};

export default Header;
