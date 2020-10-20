import React from "react";

const Figure = (props) => {
    return(
    <div className="d-flex justify-content-between align-items-center mb-4">
        <a href="#google" className="transaction__link" to="transaction">
            <figure className="d-flex justify-content-between align-items-center">
                <img className="img__profile mr-3" src={props.photo} alt="profile" />
                <section className="transaction__name">
                <h6 className="font-weight-bold">{props.name}</h6>
                <span>{props.phone}</span>
                </section>
            </figure>
        </a>
    </div>
    )
}   

export default Figure;