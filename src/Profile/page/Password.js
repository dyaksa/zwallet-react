import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";
import iconLock from "../asset/lock.svg";
import iconEyeCross from "../asset/eye-crossed.svg";

const Password = () => {
  return (
    <div class="box__shadow">
      <h3 className="header__h3 mb-5">Change Password</h3>
      <p className="information__detail">
        You must enter your current password and then type your new password
        twice.
      </p>
      <div className="flex-center mt-5">
        <div className="form-group w-50">
          <div className="input-group border__bottom">
            <img src={iconLock} alt="icon-lock"></img>
            <input
              type="password"
              class="form-control border-none input__form"
              placeholder="Current password"
            />
            <img src={iconEyeCross} alt="icon-eyecrossed"></img>
          </div>
          <div className="input-group border__bottom">
            <img src={iconLock} alt="icon-lock"></img>
            <input
              type="password"
              class="form-control border-none input__form"
              placeholder="New password"
            />
            <img src={iconEyeCross} alt="icon-eyecrossed"></img>
          </div>
          <div className="input-group border__bottom">
            <img src={iconLock} alt="icon-lock"></img>
            <input
              type="password"
              class="form-control border-none input__form"
              placeholder="Repeat password"
            />
            <img src={iconEyeCross} alt="eye-crossed"></img>
          </div>
          <button className="btn btn-block btn-lg btn-grey">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
