import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import videoErrorsReducer from "./video_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    userErrors: userErrorsReducer,
    videoErrors: videoErrorsReducer,
    commentErrors: commentErrorsReducer,
});

export default errorsReducer;
