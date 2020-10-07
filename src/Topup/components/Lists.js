import React, { useEffect, useState } from "react";
import TopupServices from "../../services/TopupServices";

const Lists = () => {
  const [topups, setTopups] = useState([]);

  useEffect(() => {
    retrieveTopup();
  }, []);

  const retrieveTopup = () => {
    TopupServices.getAll()
      .then((res) => {
        setTopups(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ol className="topup__list">
      {topups.map((item, index) => {
        return <li>{item.title}</li>;
      })}
    </ol>
  );
};

export default Lists;
