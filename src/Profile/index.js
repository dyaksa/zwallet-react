import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/profile.css";
import iconArrowLeft from "./asset/arrow-left.svg";
import UserServices from "../services/UserServices";
import loadable from "@loadable/component";

const Header = loadable(() => import("./components/Header"));

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    UserServices.getId(6)
      .then((res) => {
        this.setState({ data: res.data.data });
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center box__shadow">
          <header className="header">
            {this.state.data.map((user, index) => {
              return (
                <Header
                  name={user.firstName + " " + user.lastName}
                  phone={user.phone}
                />
              );
            })}
            <div className="mt-5">
              <Link className="btn btn-primary-grey" to="/information">
                Personal Information
                <img src={iconArrowLeft} alt="arrow-left"></img>
              </Link>
              <Link className="btn btn-primary-grey" to="/password">
                Change Password<img src={iconArrowLeft} alt="arrow-left"></img>
              </Link>
              <Link className="btn btn-primary-grey" to="/pin">
                Change Pin<img src={iconArrowLeft} alt="arrow-left"></img>
              </Link>
              <Link className="btn btn-primary-grey">
                Logout<img src={iconArrowLeft} alt="arrow-left"></img>
              </Link>
            </div>
          </header>
        </div>
      </>
    );
  }
}

export default Profile;
