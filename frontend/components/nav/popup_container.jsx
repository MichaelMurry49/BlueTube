import { connect } from 'react-redux';
import Popup from './popup';
import { closePopup } from '../../actions/popup_actions';
import {postVideo, patchVideo} from '../../actions/video_actions'

const mapStateToProps = state => ({
    popup: state.ui.popup,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    closePopup: () => dispatch(closePopup()),
    postVideo: video => dispatch(postVideo(video)),
    updateVideo: video => dispatch(patchVideo(video))
});



export default connect(mapStateToProps, mapDispatchToProps)(Popup);