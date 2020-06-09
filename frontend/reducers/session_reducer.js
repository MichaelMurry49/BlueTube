import { RECEIVE_SESSION_USER, SIGN_OUT_USER } from '../actions/session_actions';

const sessionReducer = (state={currentUser: null}, action ) => {
    Object.freeze(state);
    debugger
    switch(action.type){
        case RECEIVE_SESSION_USER:
            return { currentUser: Object.keys(action.user)[0] }  // { currentUser: action.user[0].id }
        case SIGN_OUT_USER:
            return { currentUser: null }
        default:
            return state;
    }
}

export default sessionReducer;