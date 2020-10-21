import React from "react";
import { Link } from "react-router-dom";
import {logout} from "../../utils";
import "./asset/profile.css";
import { iconArrowL } from "./asset";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import HeaderProfile from "./components/HeaderProfile";

class Profile extends React.Component {


    handleClick = () => {
       logout();
       this.props.history.push("/login");
    }

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
                                            <HeaderProfile/>
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
                                                <button onClick={this.handleClick} type="submit" className="w-100 btn btn-lg btn-primary-grey">
                                                    Logout<img src={iconArrowL} alt="arrow-left"></img>
                                                </button>
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