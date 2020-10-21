import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BoxInformation = () => {
    const { data } = useSelector((s) => s.Auth);
    const { user } = useSelector((s) => s.User);
    return(
        <>
        <div className="card__box">
            <p className="card__title">First Name</p>
            <h6 className="card__name">{data.user.firstName}</h6>
        </div>
        <div className="card__box">
            <p className="card__title">Last Name</p>
            <h6 className="card__name">{data.user.lastName}</h6>
        </div>
        <div className="card__box">
            <p className="card__title">Verified E-mail</p>
            <h6 className="card__name">{data.email}</h6>
        </div>
        <div className="card__box d-flex">
            <div>
            <p className="card__title">Phone Number</p>
            <h6 className="card__name">{`+62 ${user.phone}`}</h6>
            </div>
            <div className="ml-auto manage__link">
            <Link to="/profile/phone">Manage</Link>
            </div>
        </div>
        </>
    )
}

export default BoxInformation;