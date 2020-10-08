import React from "react";
import "../asset/transfer.css";
import Profile from "../../profile.jpg";
import iconEdit from "../asset/edit.svg";

const Input = () => {
  return (
    <div className="box__shadow transaction__history">
      <h3 className="history__header mb-5">Transfer Money</h3>
      <div className="d-flex justify-content-between align-items-center transaction__user">
        <figure class="d-flex justify-content-between align-items-center">
          <img className="mr-3 img__profile" src={Profile} alt="profile" />
          <section className="transaction__name">
            <h6 className="font-weight-bold">Samuel Suhi</h6>
            <span>+62 813-8492-9994</span>
          </section>
        </figure>
      </div>
      <p className="transaction__p">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>
      <div className="d-flex input__amount">
        <div className="w-100 d-flex justify-content-center flex-column form-group">
          <div className="form-group mb-4">
            <input
              id="exampleFormControlInput2"
              type="text"
              placeholder="0.00"
              className="form-control form-control-underlined border-primary input__value"
            ></input>
          </div>
          <p className="text-center">Rp120.000 Available</p>
          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <button id="button-addon2" type="submit" class="btn btn-link">
                <img src={iconEdit} alt="icon-edit"></img>
              </button>
            </div>
            <input
              type="search"
              placeholder="input notes?"
              aria-describedby="button-addon2"
              className="form-control input__notes"
            ></input>
          </div>
          <button className="mt-5 ml-auto p-2 bd-highlight btn btn-primary">
            Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
