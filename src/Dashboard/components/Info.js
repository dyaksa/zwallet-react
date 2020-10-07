import React from "react";
import iconIncome from "../asset/arrow-down-green.svg";
import iconExpense from "../asset/arrow-up-red.svg";

const Info = () => {
  return (
    <div class="right__info">
      <div class="d-flex justify-content-between salary__info">
        <section class="income__info">
          <img src={iconIncome} alt="income"></img>
          <p>income</p>
          <h6>Rp2.120.000</h6>
        </section>
        <section class="expense__info">
          <img src={iconExpense} alt="expense"></img>
          <p>Expense</p>
          <h6>Rp2.120.000</h6>
        </section>
      </div>
      <canvas id="myChart" width="100%" height="70px"></canvas>
    </div>
  );
};

export default Info;
