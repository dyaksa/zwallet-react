import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";
import iconTrash from "../asset/trash.svg";

const ManagePhone = () => {
  return (
    <div className="box__shadow">
      <h3 className="header__h3 mb-5">Manage Phone Number</h3>
      <p className="information__detail">
        You can only delete the phone number and then you must add another phone
        number.
      </p>
      <div className="vh-50">
        <div className="card__box d-flex">
          <div>
            <p className="card__title">Phone Number</p>
            <h6 className="card__name">+62 813-9387-7946</h6>
          </div>
          <div className="ml-auto manage__link">
            <Link to="/phone/add">
              <img src={iconTrash} alt="icon-trash"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePhone;
