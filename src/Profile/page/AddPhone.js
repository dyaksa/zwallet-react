import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";
import iconPhone from "../asset/phone.svg";

const AddPhone = () => {
  return (
    <div className="box__shadow">
      <h3 className="header__h3 mb-5">Add Phone Number</h3>
      <p className="information__detail">
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </p>
      <div className="vh-50 flex-center mt-5">
        <div className="form-group w-50">
          <div className="input-group border__bottom phone__field">
            <img className="mr-2" src={iconPhone} alt="icon-lock"></img>+62
            <input
              type="tel"
              class="form-control border-none input__form"
              placeholder="Enter your phone number"
            />
          </div>
          <button className="btn btn-block btn-lg btn-grey">
            Add Phone Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhone;
