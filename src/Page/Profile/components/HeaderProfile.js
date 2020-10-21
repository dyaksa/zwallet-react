import React from "react";
import { iconEdit } from "../asset";
import { useSelector } from "react-redux";

const HeaderProfile = () => {
    const {user} = useSelector((s) => s.User);
    return (
        <>
            <img className="profile__img" src="" alt="profile"></img>
            <div className="mt-2 d-flex justify-content-center">
                <img className="mr-2" src={iconEdit} alt="icon-edit"></img>
                <span className="text-grey">Edit</span>
            </div>
            <div className="mt-3">
                <h6 className="name__info">{`${user.firstName} ${user.lastName}`}</h6>
                <p className="phone__number">{user.phone}</p>
        </div>
        </>
    )
}

export default HeaderProfile;