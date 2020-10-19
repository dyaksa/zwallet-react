import React, { useState } from "react";
import {iconEyeCrossed, iconLock, iconMail, iconPerson} from "../asset";

const RegisterForm = ({ formData, setForm, navigation }) => {
    const { firstName, lastName, email, password } = formData;
    const [type, setType] = useState("password");

    const handleChangeType = (event) => {
        event.preventDefault();
        (type === "password") ? setType("text") : setType("password");
    }

    return(
        <form className="item-form mt-5">
        <div className="mb-5 form-group">
            <div className="input-group">
            <img src={iconPerson} alt="icon-person"></img>
            <input
                name="firstName"
                defaultValue={firstName}
                onChange={setForm}
                type="text"
                className="form-control"
                placeholder="Enter Firstname"
                required
            />
            </div>
        </div>
        <div className="mb-5 form-group">
            <div className="input-group">
            <img src={iconPerson} alt="icon-person"></img>
            <input
                name="lastName"
                defaultValue={lastName}
                onChange={setForm}
                type="text"
                className="form-control"
                placeholder="Enter Lastname"
                required
            />
            </div>
        </div>
        <div className="mb-5 form-group">
            <div className="input-group">
            <img src={iconMail} alt="icon-mail"></img>
            <input
                name="email"
                defaultValue={email}
                onChange={setForm}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
            />
            </div>
        </div>
        <div className="form-group">
            <div className="input-group">
            <img src={iconLock} alt="icon-lock"></img>
            <input
                name="password"
                defaultValue={password}
                onChange={setForm}
                required
                type={type}
                className="form-control"
                placeholder="Enter your password"
            />
            <img onClick={handleChangeType} src={iconEyeCrossed} alt="icon-eye"></img>
            </div>
            <button
                onClick={navigation.next}
                type="submit"
                id="login__button"
                className="mt-5 btn btn-grey btn-block btn-md"
                >
                Register
            </button>
            <div className="signup-text mt-5">
            <p>Already have an account? Let's <a href="#home">Login</a></p>
            </div>
        </div>
    </form>
    )
}

export default RegisterForm;