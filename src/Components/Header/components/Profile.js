import React, {useState, useEffect} from "react";
import profilePhoto from "../../../profile.jpg";
import iconBell from "../asset/bell.svg";
import http from "../../../http-common";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    retrieveUser();
  },[]);

  const retrieveUser = () => {
    http.get("/user/detail")
    .then(results => {
      setUser(results.data.data[0]);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <figure
      className="d-flex justify-content-beetween align-items-center"
      id="header-profile"
    >
      <img className="img__profile mr-3" src={profilePhoto} alt="profile" />
      <section className="info__profile mr-4">
      <span>{`${user.firstName} ${user.lastName}`}</span>
        <span>{user.phone}</span>
      </section>
      <img src={iconBell} alt="icon-bell"></img>
    </figure>
  );
};

export default Profile;
