import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";
import iconLock from "../asset/lock.svg";
import iconEyeCross from "../asset/eye-crossed.svg";
import UserServices from "../../services/UserServices";

const Password = () => {
  const initialTutorialState = {
    password: "",
  };
  const [currentUser, setCurrentUser] = useState(initialTutorialState);

  const onHandleInputChange = (e) => {
    let { value } = e.target;
    setCurrentUser({ password: value });
    console.log(currentUser);
  };

  const updatePassword = () => {
    UserServices.update(7, currentUser)
      .then((res) => {
        console.log(res.data.data);
        console.log("success update password");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              className="form-control border-none input__form"
              placeholder="Current password"
            />
            <img src={iconEyeCross} alt="icon-eyecrossed"></img>
          </div>
          <div className="input-group border__bottom">
            <img src={iconLock} alt="icon-lock"></img>
            <input
              type="password"
              className="form-control border-none input__form"
              name="new"
              placeholder="New password"
              value={currentUser.password}
              onChange={onHandleInputChange}
            />
            <img src={iconEyeCross} alt="icon-eyecrossed"></img>
          </div>
          <div className="input-group border__bottom">
            <img src={iconLock} alt="icon-lock"></img>
            <input
              type="password"
              class="form-control border-none input__form"
              placeholder="Repeat password"
              name="repeat"
            />
            <img src={iconEyeCross} alt="eye-crossed"></img>
          </div>
          <button
            onClick={updatePassword}
            type="button"
            className="btn btn-block btn-lg btn-grey"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
