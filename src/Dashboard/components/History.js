import React from "react";
import loadable from "@loadable/component";
const Figure = loadable(() => import("./Figure"));

const History = (props) => {
  return (
    <div className="transaction__info">
      <header className="d-flex justify-content-between transaction__header mb-5">
        <h6>Transaction History</h6>
        <a href="/#">See all</a>
      </header>
      <div className="user__transaction" id="user-transaction">
        {props.users.map((user, index) => {
          return (
            <Figure name={user.name} status={user.status} total={user.total} />
          );
        })}
      </div>
    </div>
  );
};

export default History;
