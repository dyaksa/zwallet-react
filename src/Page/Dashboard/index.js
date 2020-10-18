import React from "react";
import loadable from "@loadable/component";
import "./asset/dashboard.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const Balance = loadable(() => import("./components/Balance"));
const History = loadable(() => import("./components/History"));
const Info = loadable(() => import("./components/Info"));

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Samuel Suhi",
                    total: "+Rp70.000",
                    status: "Transfer",
                  },
                  {
                    id: 2,
                    name: "Samuel Suhi",
                    total: "-Rp50.000",
                    status: "Transfer",
                  },
                  {
                    id: 3,
                    name: "Samuel Suhi",
                    total: "+Rp40.000",
                    status: "Transfer",
                  },
                  {
                    id: 4,
                    name: "Samuel Suhi",
                    total: "+Rp75.000",
                    status: "Transfer",
                },
            ]
        }
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
                                <div className="row">
                                    <div className="col-md-12">
                                        <Balance/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 col-lg-7">
                                        <Info/>
                                    </div>
                                    <div className="col-md-12 col-lg-5 transaction">
                                        <History users={this.state.users}/>
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

export default Dashboard;