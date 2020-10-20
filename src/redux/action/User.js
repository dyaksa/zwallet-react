// import http from "../../http-common";

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
        payload: error
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



export {
    UserClearStore,
    UserRequest,
    UserRequestSuccess,
    UserRequestError,
}