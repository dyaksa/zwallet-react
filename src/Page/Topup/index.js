import React from "react";
import "./asset/topup.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import Lists from "./components/Lists";

class Topup extends React.Component {
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
                                    <h3 className="history__header mb-3">How To Topup</h3>
                                    <div className="topup__step">
                                        <Lists />
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

export default Topup;