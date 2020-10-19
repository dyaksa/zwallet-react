import React, { useState } from "react";
import {iconLock, iconMail, iconEyeCrossed } from "../asset";
import { AuthLogin } from "../../../redux/action/Auth";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.Auth); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        };
        console.log(loading);
        dispatch(AuthLogin(data)); 
    }

    const handleChangeType = (event) => {
        event.preventDefault();
        (type === "password") ? setType("text") : setType("password");
    }

    return(
        <form className="item-form mt-5" onSubmit={handleSubmit}>
        <div className="mb-5 form-group">
            <div className="input-group">
            <img src={iconMail} alt="icon-mail"></img>
            <input
                defaultValue={email}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
        </div>
        <div className="form-group">
            <div className="input-group">
            <img src={iconLock} alt="icon-lock"></img>
            <input
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={password}
                required
                type={type}
                className="form-control"
                placeholder="Enter your password"
            />
            <img onClick={handleChangeType} src={iconEyeCrossed} alt="icon-eye"></img>
            </div>
            <div className="mt-3 link-item text-right">
                <a href="#home">Forgot password ?</a>
            </div>
            {loading ? (<button
            type="submit"
            disabled={true}
            id="login__button"
            className="mt-5 btn btn-grey btn-block btn-md"
            >
            Loading....
            </button>) : 
            (<button
                type="submit"
                id="login__button"
                className="mt-5 btn btn-grey btn-block btn-md"
                >
                Login
                </button>)}
            <div className="signup-text mt-5">
            <p>Don’t have an account? Let’s <a href="#home">Sign Up</a></p>
            </div>
        </div>
    </form>
    )
}

export default LoginForm;