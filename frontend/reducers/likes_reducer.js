import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    debugger;
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return Object.assign(newState, action.like);
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;