import React, { useEffect, useState } from "react";
import http from "../../http-common";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";
import "./asset/header.css";
import { useDispatch, useSelector } from "react-redux";
import { UserRequest, UserRequestError, UserRequestSuccess } from "../../redux/action/User";

const Profile = loadable(() => import("./components/Profile"));

const Header = () => {
  const { data } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    dispatch(UserRequest());
    http.get("/user/detail",{
      headers: {
        "x-access-token": data.accessToken
      }
    }).then(results => {
      dispatch(UserRequestSuccess(results.data.data[0]));
      setProfile(results.data.data[0]);
    }).catch(err => {
      UserRequestError(err.message);
    });
  },[]);

  return (
    <header className="navbar-expand-lg d-flex navbar navbar-ligth bg-white justify-content-between">
      <a href="/" className="navbar-brand">
        <h1>Zwallet</h1>
      </a>
        <Profile key={profile.id} name={`${profile.firstName} ${profile.lastName}`} phone={profile.phone}/>
    </header>
  );
};

export default Header;
