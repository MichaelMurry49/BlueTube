import { RECEIVE_USER, SIGN_OUT_USER } from '../actions/session_actions';

const sessionReducer = (state={currentUser: null}, action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return { currentUser: action.currentUser }
        case SIGN_OUT_USER:
            return { currentUser: null }
        default:
            return state;
    }
}

export default sessionReducer;