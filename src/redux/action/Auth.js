import http from "../../http-common";

const AuthLoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

const AuthLoginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const AuthLoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

const AuthLogin = (fields) => {
    return (dispatch) => {
        dispatch(AuthLoginRequest);
        return http.post("/auth/login",fields)
        .then(res => {
            const data = res.data;
            console.log(data);
            dispatch(AuthLoginSuccess(data));
        }).catch(err => {
            const message = err.message;
            dispatch(AuthLoginError(message));
        })
    }
}

const AuthLogout = () => {
    return {
        type: "LOGOUT"
    }
}

export { AuthLogin, AuthLogout };