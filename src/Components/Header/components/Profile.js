import React from "react";
import profilePhoto from "../../../profile.jpg";
import iconBell from "../asset/bell.svg";

const Profile = (props) => {
  return (
    <figure
      className="d-flex justify-content-beetween align-items-center"
      id="header-profile"
    >
      <img className="img__profile mr-3" src={profilePhoto} alt="profile" />
      <section className="info__profile mr-4">
        <span>{props.name}</span>
        <span>{props.phone}</span>
      </section>
      <img src={iconBell} alt="icon-bell"></img>
    </figure>
  );
};

export default Profile;
