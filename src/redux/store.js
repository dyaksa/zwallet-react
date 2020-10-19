import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer  = persistReducer(persistConfig, rootReducers);

export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk,logger));
    let persistor = persistStore(store);
    return {store, persistor};
}