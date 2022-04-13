import { combineReducers } from "redux";

import tabReducer from "./tab/tabReducers";
import marketReducer from "./market/marketReducers";

export default combineReducers({
    tabReducer,
    marketReducer
})