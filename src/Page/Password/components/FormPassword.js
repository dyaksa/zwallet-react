import React, { createRef } from "react";
import { iconEyeCross, iconLock } from "../asset";
import { UpdateProfile } from "../../../redux/action/User";
import { useDispatch, useSelector } from "react-redux";

const FormPassword = () => {
    const passRef = createRef();
    const {data} = useSelector((s) => s.Auth);
    const {loading} = useSelector((s) => s.User);
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
      event.preventDefault();
      const fields = {
        password: passRef.current.value
      }
      dispatch(UpdateProfile(fields,data.accessToken));
      event.currentTarget.reset();
    }

    return(
    <form onSubmit={handleSubmit}>
      <div className="flex-center mt-5">
          <div className="form-group w-50">
            <div className="input-group border__bottom">
              <img src={iconLock} alt="icon-lock"></img>
              <input
                type="password"
                className="form-control border-none input__form"
                placeholder="Current password"
              />
              <img src={iconEyeCross} alt="icon-eyecrossed"></img>
            </div>
            <div className="input-group border__bottom">
              <img src={iconLock} alt="icon-lock"></img>
              <input
                type="password"
                className="form-control border-none input__form"
                name="new"
                placeholder="New password"
              />
              <img src={iconEyeCross} alt="icon-eyecrossed"></img>
            </div>
            <div className="input-group border__bottom">
              <img src={iconLock} alt="icon-lock"></img>
              <input
                type="password"
                ref={passRef}
                className="form-control border-none input__form"
                placeholder="Repeat password"
                name="repeat"
              />
              <img src={iconEyeCross} alt="eye-crossed"></img>
            </div>
            {loading ? (<button
              type="submit"
              disabled={true}
              className="btn btn-block btn-lg btn-grey"
            >
              Loading.....
            </button>) : (<button
              type="submit"
              className="btn btn-block btn-lg btn-grey"
            >
              Change Password
            </button>)}
          </div>
        </div>
      </form>
    )
}

export default FormPassword;