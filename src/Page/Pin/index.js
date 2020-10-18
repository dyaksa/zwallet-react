import React from "react";
import "./asset/pin.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import FormPin from "./components/FormPin";

class Pin extends React.Component {
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
                                        <h3 className="header__h3 mb-5">Change PIN</h3>
                                        <p className="information__detail">
                                            Enter your current 6 digits Zwallet PIN below to continue to the next
                                            steps.
                                        </p>
                                        <div className="mt-5 pin__box">
                                            <FormPin/>
                                        </div>
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

export default Pin;