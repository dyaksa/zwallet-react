const initialState = {
    user: [],
    loading: false,
    error: false,
    data: [],
}


const User = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case "USER_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "USER_REQUEST_SUCCESS":
            return {
                ...state,
                loading: false,
                user: payload
            }
        case "USER_REQUEST_ERROR": 
            return {
                ...state,
                loading: false,
                error: true,
                user: payload,
            }
        case "CLEAR_STORE":
            return {
                ...state,
                loading: false,
                data: [],
                user: [],
                _persist: {
                    rehydrated: true,
                    version: -1
                }
            }
        default: 
            return state;
    }
}

export default User;
