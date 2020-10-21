import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useSelector, useDispatch } from "react-redux";
import { UpdateProfile } from  "../../../redux/action/User";

const FormPin = () => {
    const { loading } = useSelector((s) => s.User);
    const { data } = useSelector((s) => s.Auth);
    const dispatch = useDispatch();
    const [pin, setPin] = useState("");

    const onChange = (value) => {
        setPin(value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const fields = {
            pin: pin
        }
        dispatch(UpdateProfile(fields,data.accessToken));
        setPin("");
    }

    return(
        <form onSubmit={onSubmit}>
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
            {loading ? (<button type="submit" disabled={true} className="btn btn-lg btn-grey w-100">Loading....</button>) : (<button type="submit" className="btn btn-lg btn-grey w-100">Confirmation</button>)}
            </div>
        </form>
    )
}

export default FormPin;