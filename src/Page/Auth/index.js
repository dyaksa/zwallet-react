import React from "react";
import { heroImage } from "./asset";
import "./asset/auth.css";
import LoginForm from "./components/LoginForm";

class Auth extends React.Component {
    render(){
        return(
            <main className="container-login" id="main-login">
                <div className="row">
                    <div className="col-md-7 left">
                        <div className="left-item">
                            <h1 className="left-title">Zwallet</h1>
                            <div className="mt-5 image-container">
                                <img src={heroImage} alt="phone" />
                            </div>
                            <section className="left-content">
                            <h2>App that Covering Banking Needs.</h2>
                                <p>
                                    Zwallet is an application that focussing in banking needs for
                                    all users in the world. Always updated and always following
                                    world trends. 5000+ users registered in Zwallet everyday with
                                    worldwide users coverage.
                                </p>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-item">
                            <section>
                                <h2 className="item-header">
                                    Start Accessing Banking Needs With All Devices and All Platforms
                                    With 30.000+ Users
                                </h2>
                                <p className="item-description mt-4">
                                    Transfering money is eassier than ever, you can access Zwallet
                                    wherever you are. Desktop, laptop, mobile phone? we cover all of
                                    that for you!
                                </p>
                            </section>
                            <LoginForm {...this.props}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Auth;