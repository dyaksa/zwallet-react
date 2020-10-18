import React from "react";
import "./asset/transfer.css";
import { iconSearch } from "./asset";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import loadable from "@loadable/component";

const Figure = loadable(() => import("./components/Figure"));

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
                                <h3 className="history__header mb-5">Search Receiver</h3>
                                <div className="this__week">
                                    <div className="input-group mb-5">
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn btn-link">
                                                <img className="medium__icon" src={iconSearch} alt="search-icon"/>
                                            </button>
                                        </div>
                                        <input type="text" placeholder="What're you searching for?" className="form-control border-0 bg-light"/>
                                    </div>
                                    <div>
                                        <Figure/>
                                        <Figure/>
                                        <Figure/>
                                        <Figure/>
                                    </div>
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

export default Transfer;