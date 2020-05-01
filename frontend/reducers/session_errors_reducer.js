import { RECEIVE_ERRORS, RECEIVE_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    // Object.freeze(state);
    // const newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_ERRORS:
            // debugger;
            return action.errors;
        case RECEIVE_USER:
            return [];
        default:
            return state;

    }
}

export default sessionErrorsReducer;