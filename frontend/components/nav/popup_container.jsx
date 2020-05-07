import { connect } from 'react-redux';
import Popup from './popup';
import { closePopup } from '../../actions/popup_actions';
import {postVideo, patchVideo} from '../../actions/video_actions'


const mapStateToProps = (state, ownProps) => {
    // if(ownProps)
    return{
    popup: state.ui.popup,
    currentUser: state.session.currentUser,
    task: ownProps.task,
    errors: state.errors.videoErrors
}};

const mapDispatchToProps = dispatch => ({
    closePopup: () => dispatch(closePopup()),
    postVideo: video => dispatch(postVideo(video)),
    updateVideo: video => dispatch(patchVideo(video))
});



export default connect(mapStateToProps, mapDispatchToProps)(Popup);