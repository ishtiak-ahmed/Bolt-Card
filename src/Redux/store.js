import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

export default store;