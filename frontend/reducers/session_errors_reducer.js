import { RECEIVE_ERRORS, RECEIVE_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    // Object.freeze(state);
    // const newState = Object.assign({}, state);
    // debugger;
    switch(action.type){
        case RECEIVE_ERRORS:
            // debugger;
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_USER:
            return [];
        default:
            return state;

    }
}

export default sessionErrorsReducer;