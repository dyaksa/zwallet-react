import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";

const Information = () => {
  return (
    <>
      <div className="box__shadow">
        <h3 className="header__h3 mb-5">Personal Information</h3>
        <p className="information__detail">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </p>
        <div className="card__box">
          <p className="card__title">First Name</p>
          <h6 className="card__name">Robert</h6>
        </div>
        <div className="card__box">
          <p className="card__title">Last Name</p>
          <h6 className="card__name">Chandler</h6>
        </div>
        <div className="card__box">
          <p className="card__title">Verified E-mail</p>
          <h6 className="card__name">pewdiepie1@gmail.com</h6>
        </div>
        <div className="card__box d-flex">
          <div>
            <p className="card__title">Phone Number</p>
            <h6 className="card__name">+62 813-9387-7946</h6>
          </div>
          <div className="ml-auto manage__link">
            <Link to="/phone/manage">Manage</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
