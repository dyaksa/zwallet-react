import React from "react";

const Figure = (props) => {
    return(
    <div className="d-flex justify-content-between align-items-center mb-4">
        <a href="#google" className="transaction__link" to="transaction">
            <figure className="d-flex justify-content-between align-items-center">
                <img className="img__profile mr-3" src="" alt="profile" />
                <section className="transaction__name">
                    <h6 className="font-weight-bold">Samuel Suhi</h6>
                    <span>+62 08081817</span>
                </section>
            </figure>
        </a>
    </div>
    )
}   

export default Figure;