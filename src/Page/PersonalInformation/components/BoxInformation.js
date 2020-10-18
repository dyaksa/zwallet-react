import React from "react";
import { Link } from "react-router-dom";

const BoxInformation = () => {
    return(
        <>
        <div className="card__box">
            <p className="card__title">First Name</p>
            <h6 className="card__name">Samuel</h6>
        </div>
        <div className="card__box">
            <p className="card__title">Last Name</p>
            <h6 className="card__name">Suhi</h6>
        </div>
        <div className="card__box">
            <p className="card__title">Verified E-mail</p>
            <h6 className="card__name">samuelsuhi@gmail.com</h6>
        </div>
        <div className="card__box d-flex">
            <div>
            <p className="card__title">Phone Number</p>
            <h6 className="card__name">+62 08929829</h6>
            </div>
            <div className="ml-auto manage__link">
            <Link to="/profile/phone">Manage</Link>
            </div>
        </div>
        </>
    )
}

export default BoxInformation;