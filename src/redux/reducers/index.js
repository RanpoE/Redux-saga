import { combineReducers } from "redux";
import rootReducer from "./fetchReducer";
import searchReducer from "./searchReducer";


export default combineReducers({
    data: rootReducer,
    search: searchReducer
})