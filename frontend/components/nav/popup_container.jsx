import { connect } from 'react-redux';
import Popup from './popup';
import { closePopup } from '../../actions/popup_actions';
import { postVideo, patchVideo, clearVideoErrors} from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    // if(ownProps)
    return{
    popup: state.ui.popup,
    currentUser: state.session.currentUser,
    cUser: state.entities.users[parseInt(state.session.currentUser, 10)],
    task: ownProps.task,
    errors: state.errors.videoErrors
}};

const mapDispatchToProps = dispatch => ({
    closePopup: () => dispatch(closePopup()),
    postVideo: video => dispatch(postVideo(video)),
    updateVideo: video => dispatch(patchVideo(video)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Popup);