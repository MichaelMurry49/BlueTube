import {OPEN_POPUP, CLOSE_POPUP} from '../actions/popup_actions';
import { faTumblrSquare } from '@fortawesome/free-brands-svg-icons';

const popupReducer = (state=null, action) => {
    switch(action.type){
        case OPEN_POPUP:
            return true;
        case CLOSE_POPUP:
            return null;
        default:
            return state;
    }
}

export default popupReducer;