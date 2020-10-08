import React from "react";
import iconEdit from "../asset/edit.svg";
import profile from "../../profile.jpg";

const Header = (props) => {
  return (
    <>
      <img className="profile__img" src={profile} alt="profile"></img>
      <div className="mt-2 d-flex justify-content-center">
        <img className="mr-2" src={iconEdit} alt="icon-edit"></img>
        <span className="text-grey">Edit</span>
      </div>
      <div className="mt-3">
        <h6 className="name__info">{props.name}</h6>
        <p className="phone__number">{props.phone}</p>
      </div>
    </>
  );
};

export default Header;
