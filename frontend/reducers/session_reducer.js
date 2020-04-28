import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, SUCCESSFUL_SIGN_OUT } from '../actions/session_actions';

const SessionReducer = (state={currentUser: null}, action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.currentUser }
        case SUCCESSFUL_SIGN_OUT:
            return { currentUser: null }
        default:
            return state;
    }
}

export default SessionReducer;