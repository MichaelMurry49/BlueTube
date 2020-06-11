import {OPEN_POPUP, CLOSE_POPUP} from '../actions/popup_actions';

const popupReducer = (state=null, action) => {
    // debugger;
    switch(action.type){
        case OPEN_POPUP:
            return action.popup;
        case CLOSE_POPUP:
            return null;
        default:
            return state;
    }
}

export default popupReducer;