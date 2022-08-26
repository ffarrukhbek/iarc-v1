import {combineReducers} from "redux";
import dayverReducer from "./dayverReducer";
import aqllisuvReducer from "./aqllisuvReducer";


const rootReducers = combineReducers({
    dayverReducer,
    aqllisuvReducer
})

export default rootReducers