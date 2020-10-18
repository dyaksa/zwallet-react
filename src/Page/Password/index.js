import React from "react";
import "./asset/password.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import FormPassword from "./components/FormPassword";

class Password extends React.Component {
    render(){
        return(
            <> 
                <Header/>
                    <main className="main__content mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-3">
                                    <Sidebar/>
                                </div>
                                <div className="col-md-12 col-lg-9">
                                    <div className="box__shadow">
                                        <h3 className="header__h3 mb-5">Change Password</h3>
                                        <p className="information__detail">
                                            You must enter your current password and then type your new password
                                            twice.
                                        </p>
                                        <FormPassword/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                <Footer/>
            </>
        )
    }
}

export default Password;