// import { RECEIVE_SESSION_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';

const usersReducer = (state={}, action) => {
    debugger
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_USER:
            // debugger
            return Object.assign(newState, action.user )
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersReducer;