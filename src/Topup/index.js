import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/topup.css";
import loadable from "@loadable/component";

const Lists = loadable(() => import("./components/Lists"));

class Topup extends Component {
  render() {
    return (
      <>
        <div className="box__shadow">
          <h3 className="history__header mb-3">How To Topup</h3>
          <div className="topup__step">
            <Lists />
          </div>
        </div>
      </>
    );
  }
}

export default Topup;
