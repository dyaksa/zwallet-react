import React from "react";
import Profile from "../../profile.jpg";
const Figure = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <a class="transaction__link" href="/input.html">
        <figure class="d-flex justify-content-between align-items-center">
          <img className="img__profile mr-3" src={Profile} alt="profile" />
          <section class="transaction__name">
            <h6 class="font-weight-bold">Samuel Suhi</h6>
            <span>+62 813-8492-9994</span>
          </section>
        </figure>
      </a>
    </div>
  );
};

export default Figure;
