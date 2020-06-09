import { RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENT, CLEAR_COMMENT_ERRORS } from '../actions/comment_actions';

const commentErrorsReducer = (state = [], action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERRORS:
        case RECEIVE_COMMENT:
            return [];
        default:
            return state;
    }
}

export default commentErrorsReducer;
