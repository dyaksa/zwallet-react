import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";

const Pin = () => {
  return (
    <div className="box__shadow">
      <h3 className="header__h3 mb-5">Change PIN</h3>
      <p className="information__detail">
        Enter your current 6 digits Zwallet PIN below to continue to the next
        steps.
      </p>
      <div className="mt-5 pin__box">
        <div className="text-center">
          <div className="pin__wrapper mb-5 mt-5">
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
            <input
              className="pinlogin__field"
              inputMode="numeric"
              maxLength="1"
              pattern="^[0-9]*$"
              autoComplete="off"
            ></input>
          </div>
          <button className="btn btn-lg btn-grey w-100">Confirmation</button>
        </div>
      </div>
    </div>
  );
};

export default Pin;
