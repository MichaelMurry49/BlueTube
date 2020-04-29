import { RECEIVE_ERRORS, RECEIVE_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_ERRORS:
            newState.errors = action.errors;
            return newState;
        case RECEIVE_USER:
            delete newState.errors;
            return newState;
        default:
            return state;

    }
}

export default sessionErrorsReducer;