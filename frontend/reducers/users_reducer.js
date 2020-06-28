import { RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign(newState, action.user )
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersReducer;