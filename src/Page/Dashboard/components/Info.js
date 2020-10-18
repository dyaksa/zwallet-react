import React from "react";
import {iconAUG, iconADR} from "../asset";

const Info = () => {
    return(
        <div className="right__info">
        <div className="d-flex justify-content-between salary__info">
          <section className="income__info">
            <img src={iconAUG} alt="income"></img>
            <p>income</p>
            <h6>Rp2.120.000</h6>
          </section>
          <section className="expense__info">
            <img src={iconADR} alt="expense"></img>
            <p>Expense</p>
            <h6>Rp2.120.000</h6>
          </section>
        </div>
        <canvas id="myChart" width="100%" height="70px"></canvas>
      </div>
    )
}

export default Info;