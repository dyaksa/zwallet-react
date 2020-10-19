import React, { useState } from "react";
import {iconLock, iconMail, iconEyeCrossed } from "../asset";
import axios from "axios";
import { login } from "../../../utils";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        };
        axios.post("http://localhost:8000/api/v1/auth/login",data)
        .then(results => {
            if(results.data){
                login(results.data.accessToken);
                props.history.replace("/dashboard");
            }
        }).catch(err => {
            const error = JSON.parse(err.request.response);
            console.log(error);
        })
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
            <button
            type="submit"
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