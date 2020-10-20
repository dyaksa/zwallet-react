import { combineReducers } from  "redux";
import Auth from "./Auth";
import User from "./User";

const reducers = combineReducers({
    Auth,
    User
});

export default reducers;