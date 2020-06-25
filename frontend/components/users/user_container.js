import { connect } from "react-redux";
import User from "./user";
import { fetchUsers } from '../../actions/user_actions';
import { deleteVideo, fetchVideos, patchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.entities.users,
        userId: ownProps.match.params.userId,
        videos: state.entities.videos,
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    updateVideo: video => dispatch(patchVideo(video)),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)