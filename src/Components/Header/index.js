import React, {useState, useEffect} from "react";
import loadable from "@loadable/component";
import http from "../../http-common";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/header.css";

const Profile = loadable(() => import("./components/Profile"));

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    retrieveUser();
  },[]);

  const retrieveUser = () => {
    http.get("/user/detail").then(result => {
      setData(result.data.data)
    }).catch(err => {
      console.log(err.message);
    })
  }

  return (
    <header className="navbar-expand-lg d-flex navbar navbar-ligth bg-white justify-content-between">
      <a href="/" className="navbar-brand">
        <h1>Zwallet</h1>
      </a>
      {data && data.map((user,index) => {
        return(<Profile key={user.id} name={`${user.firstName} ${user.lastName}`} phone={user.phone} />)
      })}
    </header>
  );
};

export default Header;
