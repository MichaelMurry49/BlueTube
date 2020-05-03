import { RECEIVE_ERRORS, RECEIVE_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    switch(action.type){
        case RECEIVE_ERRORS:
            // debugger;
            return action.errors;
        case CLEAR_ERRORS:
        case RECEIVE_USER:
            return [];
        default:
            return state;

    }
}

export default sessionErrorsReducer;