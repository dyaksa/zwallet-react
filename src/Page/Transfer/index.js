import React from "react";
import "./asset/transfer.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import SearchBox from "./components/SearchBox";

class Transfer extends React.Component {
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
                            <div className="transaction__history box__shadow">
                                <SearchBox/>
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

export default Transfer;