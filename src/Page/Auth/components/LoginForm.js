import React from "react";
import {iconLock, iconMail, iconEyeCrossed } from "../asset";

const LoginForm = () => {
    return(
        <form className="item-form mt-5" method="GET" action="home.html">
        <div className="mb-5 form-group">
            <div className="input-group">
            <img src={iconMail} alt="icon-mail"></img>
            <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
            />
            </div>
        </div>
        <div className="form-group">
            <div className="input-group">
            <img src={iconLock} alt="icon-lock"></img>
            <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
            />
            <img src={iconEyeCrossed} alt="icon-eye"></img>
            </div>
            <div className="mt-3 link-item text-right">
            <a href="#home">Forgot password ?</a>
            </div>
            <button
            id="login__button"
            className="mt-5 btn btn-grey btn-block btn-md"
            >
            Login
            </button>
            <div className="signup-text mt-5">
            <p>Don’t have an account? Let’s <a href="#home">Sign Up</a></p>
            </div>
        </div>
    </form>
    )
}

export default LoginForm;