import { RECEIVE_USER_ERRORS, RECEIVE_USER, CLEAR_USER_ERRORS } from '../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_USER_ERRORS:
        case RECEIVE_USER:
            return [];
        default:
            return state;
    }
}

export default userErrorsReducer;
