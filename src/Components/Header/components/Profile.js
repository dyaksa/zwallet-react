import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = (props) => {
  return (
    <figure
      className="d-flex justify-content-beetween align-items-center"
      id="header-profile"
    >
      <img className="img__profile mr-3" src={props.src} alt="profile" />
      <section className="info__profile mr-4">
        <span>Robert Chandler</span>
        <span>+62 8139 3877 7946</span>
      </section>
      <img src={props.icon} alt="icon-bell"></img>
    </figure>
  );
};

export default Profile;
