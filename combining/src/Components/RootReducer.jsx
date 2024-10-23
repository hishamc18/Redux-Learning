import { combineReducers } from "redux";
import { counterReducer, userReducer } from "./Reducers";

export const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})