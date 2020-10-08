import React from "react";
import { Link } from "react-router-dom";

const BoxInfo = (props) => {
  return (
    <>
      <div className="card__box">
        <p className="card__title">First Name</p>
        <h6 className="card__name">{props.firstName}</h6>
      </div>
      <div className="card__box">
        <p className="card__title">Last Name</p>
        <h6 className="card__name">{props.lastName}</h6>
      </div>
      <div className="card__box">
        <p className="card__title">Verified E-mail</p>
        <h6 className="card__name">{props.email}</h6>
      </div>
      <div className="card__box d-flex">
        <div>
          <p className="card__title">Phone Number</p>
          <h6 className="card__name">{props.phone}</h6>
        </div>
        <div className="ml-auto manage__link">
          <Link to="/phone/manage">Manage</Link>
        </div>
      </div>
    </>
  );
};

export default BoxInfo;
