import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    session: sessionReducer

});

export default entitiesReducer;
