import { combineReducers } from "redux";
import reducer from "./fundReducers";
import { userReducers } from "./userReducers";

export default combineReducers({
    fundRequest: reducer,
    user: userReducers
})