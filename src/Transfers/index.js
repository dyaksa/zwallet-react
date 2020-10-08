import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/transfer.css";
import iconSearch from "./asset/search.svg";
import TransferServices from "../services/TransferServices";

const Figure = loadable(() => import("./components/Figure"));
const Alert = loadable(() => import("./components/Alert"));

const Transfer = () => {
  const [transfers, setTransfers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [alert, setAlert] = useState();

  useEffect(() => {
    retrieveTransfers();
  }, []);

  const onChangeSearchName = (e) => {
    const name = e.target.value;
    setSearchName(name);
  };

  const retrieveTransfers = () => {
    TransferServices.getAll()
      .then((res) => {
        setTransfers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        if (err) {
          setAlert(<Alert />);
        }
      });
  };

  const findByName = () => {
    TransferServices.findByName(searchName)
      .then((res) => {
        setTransfers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="transaction__history box__shadow">
        <h3 className="history__header mb-5">Transaction History</h3>
        {console.log(alert)}
        <div className="this__week">
          <div className="input-group mb-5">
            <div className="input-group-prepend">
              <button id="button-addon2" type="submit" className="btn btn-link">
                <img
                  className="medium__icon"
                  src={iconSearch}
                  alt="search-icon"
                  onClick={findByName}
                ></img>
              </button>
            </div>
            <input
              type="search"
              placeholder="What're you searching for?"
              aria-describedby="button-addon2"
              className="form-control border-0 bg-light"
              value={searchName}
              onChange={onChangeSearchName}
            ></input>
          </div>
          <div>
            {transfers &&
              transfers.map((data, item) => {
                return (
                  <Figure
                    key={data.id}
                    name={data.firstName + " " + data.lastName}
                    phone={data.phone}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
