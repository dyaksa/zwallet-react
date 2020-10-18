import React from "react";
import { Link } from "react-router-dom";
import "./asset/profile.css";
import { iconEdit, iconArrowL } from "./asset";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

class Profile extends React.Component {
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
                                    <div className="d-flex justify-content-center box__shadow">
                                        <header className="header">
                                            <img className="profile__img" src="" alt="profile"></img>
                                            <div className="mt-2 d-flex justify-content-center">
                                                <img className="mr-2" src={iconEdit} alt="icon-edit"></img>
                                                <span className="text-grey">Edit</span>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className="name__info">Samuel Suhi</h6>
                                                <p className="phone__number">+62 7367276376</p>
                                            </div>
                                            <div className="mt-5">
                                                <Link className="btn btn-primary-grey" to="/profile/information">
                                                    Personal Information
                                                    <img src={iconArrowL} alt="arrow-left"></img>
                                                </Link>
                                                <Link className="btn btn-primary-grey" to="/profile/password">
                                                    Change Password<img src={iconArrowL} alt="arrow-left"></img>
                                                </Link>
                                                <Link className="btn btn-primary-grey" to="/profile/pin">
                                                    Change Pin<img src={iconArrowL} alt="arrow-left"></img>
                                                </Link>
                                                <Link className="btn btn-primary-grey">
                                                    Logout<img src={iconArrowL} alt="arrow-left"></img>
                                                </Link>
                                            </div>
                                        </header>
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

export default Profile;