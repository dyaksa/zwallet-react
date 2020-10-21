import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import iconPhone from "../asset/phone.svg";
import { UpdateProfile } from "../../../redux/action/User";

const AddPhone = (props) => {
  const { formData, setForm } = props;
  const { data } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(UpdateProfile(formData,data.accessToken));
  }

  return (
    <>
      <h3 className="header__h3 mb-5">Add Phone Number</h3>
      <p className="information__detail">
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </p>
      <div className="vh-50 flex-center mt-5">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="form-group w-100">
            <div className="input-group border__bottom phone__field">
              <img className="mr-2" src={iconPhone} alt="icon-lock"></img>+62
              <input
                name="phone"
                onChange={setForm}
                type="tel"
                className="form-control border-none input__form"
                placeholder="Enter your phone number"
              />
            </div>
            <button type="submit" className="btn btn-block btn-lg btn-grey">
              Add Phone Number
            </button>
          </div>
          </form>
      </div>
    </>
  );
};

export default AddPhone;
