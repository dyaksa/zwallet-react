import React, { useState } from "react";
import PinInput from "react-pin-input";

const PinForm = ({ formData }) => {
    const [pin, setPin] = useState("");
    const data =  {...formData, pin: pin }

    const onChange = (value) => {
        setPin(value);
    }

    const retrieveData = (event) => {
        event.preventDefault();
        console.log(data);
    } 

    return (
        <form onSubmit={retrieveData}>
            <div className="text-center">
            <div className="pin__wrapper mb-5 mt-5">
                <PinInput
                    length={6} 
                    secret
                    type="numeric" 
                    onChange={onChange}
                    inputMode="number"
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
            </div>
                <button type="submit" className="btn btn-lg btn-grey w-100">Confirmation</button>
            </div>
        </form>
    )
}

export default PinForm;