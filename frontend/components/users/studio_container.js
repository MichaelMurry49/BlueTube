import { connect } from "react-redux";
import Studio from "./studio";
import { fetchUsers } from '../../actions/user_actions';
import { deleteVideo, fetchVideos, patchVideo } from '../../actions/video_actions';
import { openPopup } from "../../actions/popup_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.entities.users,
        userId: ownProps.match.params.userId,
        videos: state.entities.videos,
        currentUser: state.session.currentUser,
        popup: state.ui.popup,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    updateVideo: video => dispatch(patchVideo(video)),
    fetchUsers: () => dispatch(fetchUsers()),
    openPopup: popup => dispatch(openPopup(popup)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Studio)