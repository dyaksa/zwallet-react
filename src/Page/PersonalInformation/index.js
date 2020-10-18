import React from "react";
import loadable from "@loadable/component";
import "./asset/profile-information.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const BoxInformation = loadable(() => import("./components/BoxInformation"));

class PersonalInformation extends React.Component{
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
                                        <h3 className="header__h3 mb-5">Personal Information</h3>
                                        <p className="information__detail">
                                        We got your personal information from the sign up proccess. If you
                                        want to make changes on your information, contact our support.
                                        </p>
                                        <BoxInformation/>
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

export default PersonalInformation;