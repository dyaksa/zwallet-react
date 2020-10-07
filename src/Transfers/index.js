import React, { Component } from "react";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/transfer.css";
import iconSearch from "./asset/search.svg";
const Figure = loadable(() => import("./components/Figure"));

class Transfer extends Component {
  render() {
    return (
      <>
        <div className="transaction__history box__shadow">
          <h3 className="history__header mb-5">Transaction History</h3>
          <div className="this__week">
            <form className="mb-5" action="#" method="GET">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button
                    id="button-addon2"
                    type="submit"
                    className="btn btn-link"
                  >
                    <img
                      className="medium__icon"
                      src={iconSearch}
                      alt="search-icon"
                    ></img>
                  </button>
                </div>
                <input
                  type="search"
                  placeholder="What're you searching for?"
                  aria-describedby="button-addon2"
                  className="form-control border-0 bg-light"
                ></input>
              </div>
            </form>
            <div>
              <Figure />
              <Figure />
              <Figure />
              <Figure />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Transfer;
