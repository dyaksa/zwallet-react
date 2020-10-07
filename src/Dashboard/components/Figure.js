import React from "react";
import photoProfile from "../../profile.jpg";

const Figure = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <figure className="d-flex justify-content-between align-items-center">
        <img className="img__profile mr-3" src={props.photo} alt="profile" />
        <section className="transaction__name">
          <h6 className="font-weight-bold">{props.name}</h6>
          <span>{props.status}</span>
        </section>
      </figure>
      <section className="total__transaction">
        <span className="text-success">{props.total}</span>
      </section>
    </div>
  );
};

Figure.defaultProps = {
  photo: photoProfile,
};

export default Figure;
