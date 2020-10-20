const initialState = {
    data: [],
    loading: false,
    error: false
};

const Auth = (state = initialState, action = {}) => {
    switch(action.type){
        case "AUTH_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                isLogin: true,
                data: action.payload
            };
        case "REQUEST_ERROR":
            return {
                ...state,
                loading: false,
                isLogin: false,
                error: true,
                message: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                loading: false,
                isLogin: false,
                data: [],
                _persist: {
                    rehydrated: true,
                    version: -1
                }
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default: 
            return state;
    }
}

export default Auth;