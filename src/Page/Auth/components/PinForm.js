import React, { useState } from "react";
import PinInput from "react-pin-input";
import { AuthRegister } from  "../../../redux/action/Auth";
import { useDispatch, useSelector } from "react-redux";

const PinForm = ({ formData }) => {
    const [pin, setPin] = useState("");
    const data =  {...formData, pin: pin }
    const { loading } = useSelector((selector) => selector.Auth);
    const dispatch = useDispatch();

    const onChange = (value) => {
        setPin(value);
    }

    const retrieveData = (event) => {
        event.preventDefault();
        dispatch(AuthRegister(data));
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
                {loading ? (<button type="submit" disabled={true} className="btn btn-lg btn-grey w-100">Loading...</button>) : (<button type="submit" className="btn btn-lg btn-grey w-100">Confirmation</button>)}
            </div>
        </form>
    )
}

export default PinForm;