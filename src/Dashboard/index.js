import React, { Component } from "react";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/dashboard.css";
const Balance = loadable(() => import("./components/Balance"));
const Info = loadable(() => import("./components/Info"));
const History = loadable(() => import("./components/History"));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <Balance />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-7">
            <Info />
          </div>
          <div className="col-md-12 col-lg-5 transaction">
            <History users={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
