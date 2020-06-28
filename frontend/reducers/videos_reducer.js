import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';
const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return Object.assign(newState, action.video);
        case REMOVE_VIDEO:
            delete newState[action.videoId];
            return newState;
        default:
            return state;
    }
}

export default videosReducer;