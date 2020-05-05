import { combineReducers } from "redux";
import popupReducer from "./popup_reducer"

const uiReducer = combineReducers({
    popup: popupReducer 
});

export default uiReducer;
