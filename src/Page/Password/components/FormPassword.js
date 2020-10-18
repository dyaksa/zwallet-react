import React from "react";
import { iconEyeCross, iconLock } from "../asset";

const FormPassword = () => {
    return(
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
            type="button"
            className="btn btn-block btn-lg btn-grey"
          >
            Change Password
          </button>
        </div>
      </div>
    )
}

export default FormPassword;