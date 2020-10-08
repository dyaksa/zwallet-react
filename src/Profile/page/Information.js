import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/profile.css";
import UserServices from "../../services/UserServices";
import loadable from "@loadable/component";
const BoxInfo = loadable(() => import("../components/BoxInfo"));

const Information = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = () => {
    UserServices.getId(6)
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="box__shadow">
        <h3 className="header__h3 mb-5">Personal Information</h3>
        <p className="information__detail">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </p>
        {user.map((data, index) => {
          return (
            <BoxInfo
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              phone={data.phone}
            />
          );
        })}
      </div>
    </>
  );
};

export default Information;
