import React from "react";
import { Link } from "react-router-dom";
import iconArrow from "../asset/arrow-up.svg";
import iconPlus from "../asset/plus.svg";

const Balance = () => {
  return (
    <div className="d-flex justify-content-between align-items-center info__balance">
      <section className="balance">
        <span>Balance</span>
        <h2>Rp120.000</h2>
        <span>+62 813-9387-7946</span>
      </section>
      <section className="btn__action">
        <Link
          className="btn btn-outline-primary btn-lg btn-block"
          to="/transfer"
        >
          <img className="mr-3" src={iconArrow} alt="arrow-up-icon"></img>
          Transfer
        </Link>
        <Link className="btn btn-outline-primary btn-lg btn-block">
          <img className="mr-3" src={iconPlus} alt="icon-plus"></img>Topup
        </Link>
      </section>
    </div>
  );
};

export default Balance;
