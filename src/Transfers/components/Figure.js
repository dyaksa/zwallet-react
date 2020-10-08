import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../profile.jpg";
const Figure = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Link className="transaction__link" to="transaction">
        <figure class="d-flex justify-content-between align-items-center">
          <img className="img__profile mr-3" src={Profile} alt="profile" />
          <section class="transaction__name">
            <h6 class="font-weight-bold">{props.name}</h6>
            <span>{props.phone}</span>
          </section>
        </figure>
      </Link>
    </div>
  );
};

export default Figure;
