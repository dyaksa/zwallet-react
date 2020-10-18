import React from "react";
import { Link } from "react-router-dom";
import {iconTrash} from "../asset";

const ListPhone = () => {
    return(
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
    )
}

export default ListPhone;