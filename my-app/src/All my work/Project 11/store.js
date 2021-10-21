import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import index1 from "./index1";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    index1,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;