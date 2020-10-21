import http from "../../http-common";
import { getUserProfile } from "../../services/user";

const UserRequest = () => {
    return {
        type: "USER_REQUEST"
    }
}

const UserRequestSuccess = (data) => {
    return {
        type: "USER_REQUEST_SUCCESS",
        payload: data
    }
}

const UserRequestError = (error) => {
    return {
        type: "USER_REQUEST_ERROR",
    }
}

const ClearStore = () => {
    return {
        type: "CLEAR_STORE"
    }
}

const UserClearStore = () => {
    return (dispatch) => {
        dispatch(ClearStore());
    }
}

const GetUserLogin = (token) => {
    return (dispatch) => {
        dispatch(UserRequest());
        http.get("/user/detail",{
          headers: {
            "x-access-token": token
          }
        }).then(results => {
          dispatch(UserRequestSuccess(results.data.data[0]));
        }).catch(err => {
          UserRequestError(err.message);
        });
    }
}

const UpdateProfile = (fields, token) => {
    return(dispatch) => {
        dispatch(UserRequest());
        http.patch("/user",fields,{
            headers: {
                "x-access-token": token
            }
        }).then(results => {
           getUserProfile(token)
           .then(results => {
                dispatch(UserRequestSuccess(results.data.data[0]));
           }).catch(err => {
                dispatch(UserRequestError(err.message));
           })
        }).catch(err => {
            console.log(err);
            dispatch(UserRequestError(err));
        })
    }
}



export {
    UserClearStore,
    UpdateProfile,
    GetUserLogin
}