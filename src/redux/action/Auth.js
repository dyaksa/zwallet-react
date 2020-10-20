import http from "../../http-common";

const AuthRequest = () => {
    return {
        type: "AUTH_REQUEST"
    }
}

const AuthLoginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const RequestError = (error) => {
    return {
        type: "REQUEST_ERROR",
        payload: error
    }
}

const AuthRegisterSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: data
    }
}

const AuthLogin = (fields) => {
    return (dispatch) => {
        dispatch(AuthRequest);
        return http.post("/auth/login",fields)
        .then(res => {
            const data = res.data;
            console.log(data);
            dispatch(AuthLoginSuccess(data));
        }).catch(err => {
            const message = err.message;
            dispatch(RequestError(message));
        })
    }
}

const AuthRegister = (fields) => {
    return (dispatch) => {
        dispatch(AuthRequest);
        http.post("/auth/register",fields)
        .then(results => {
            const data = results.data;
            dispatch(AuthRegisterSuccess(data));
        }).catch(err => {
            const message = err.message;
            dispatch(RequestError(message));
        })

    }
}

const AuthLogout = () => {
    return {
        type: "LOGOUT"
    }
}

export { AuthLogin, AuthLogout, AuthRegister };