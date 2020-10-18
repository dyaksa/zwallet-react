import React from "react";
import "./asset/phone.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import ListPhone from "./components/ListPhone";

class Phone extends React.Component {
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
                                <h3 className="header__h3 mb-5">Manage Phone Number</h3>
                                <p className="information__detail">
                                    You can only delete the phone number and then you must add another phone
                                    number.
                                </p>
                                <ListPhone/>
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

export default Phone;