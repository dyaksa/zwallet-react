import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/profile.css";
import iconArrowLeft from "./asset/arrow-left.svg";
import iconEdit from "./asset/edit.svg";
import profile from "../profile.jpg";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center box__shadow">
          <header className="header">
            <img className="profile__img" src={profile} alt="profile"></img>
            <div className="mt-2 d-flex justify-content-center">
              <img className="mr-2" src={iconEdit} alt="icon-edit"></img>{" "}
              <span className="text-grey">Edit</span>
            </div>
            <div className="mt-3">
              <h6 className="name__info">Robert Chandler</h6>
              <p className="phone__number">+62 813-9387-7946</p>
            </div>
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
