import React from "react";
import {iconTrash} from "../asset";
import { useSelector } from "react-redux";

const ListPhone = (props) => {
    const { navigation } = props;
    const { user } = useSelector((s) => s.User);
    return(
      <>
        <h3 className="header__h3 mb-5">Manage Phone Number</h3>
        <p className="information__detail">
            You can only delete the phone number and then you must add another phone
            number.
        </p>
        <div className="vh-50">
        <div className="card__box d-flex">
          <div>
            <p className="card__title">Phone Number</p>
          <h6 className="card__name">{user.phone ? (`+62 ${user.phone}`) : ("-")}</h6>
          </div>
          <div className="ml-auto manage__link">
            <img onClick={ navigation.next } src={iconTrash} alt="icon-trash"></img>
          </div>
        </div>
      </div>
    </>
    )
}

export default ListPhone;