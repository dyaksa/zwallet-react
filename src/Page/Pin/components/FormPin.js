import React from "react";

const FormPin = () => {
    return(
        <div className="text-center">
        <div className="pin__wrapper mb-5 mt-5">
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
            <input
            className="pinlogin__field"
            inputMode="numeric"
            maxLength="1"
            pattern="^[0-9]*$"
            autoComplete="off"
            ></input>
        </div>
            <button className="btn btn-lg btn-grey w-100">Confirmation</button>
        </div>
    )
}

export default FormPin;