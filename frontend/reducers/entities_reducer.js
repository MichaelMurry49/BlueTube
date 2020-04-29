import { combineReducers } from "redux";

import usersReducer from "./session_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer

});

export default entitiesReducer;
