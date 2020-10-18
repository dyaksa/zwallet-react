import React from "react";
import {iconAU, iconPlus} from "../asset";

const Balance = (props) => {

    return(
        <div className="d-flex justify-content-between align-items-center info__balance">
        <section className="balance">
          <span>Balance</span>
          <h2>Rp120.000</h2>
          <span>+62 813-9387-7946</span>
        </section>
        <section className="btn__action">
          <button className="btn btn-outline-primary btn-lg btn-block">
            <img className="mr-3" src={iconAU} alt="arrow-up-icon"></img>
            Transfer
          </button>
          <button className="btn btn-outline-primary btn-lg btn-block">
            <img className="mr-3" src={iconPlus} alt="icon-plus"></img>Topup
          </button>
        </section>
      </div>
    )
}

export default Balance;