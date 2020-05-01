import { RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    // debugger;
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign(newState, action.user )
        default:
            return state;
    }
}

export default usersReducer;