import { connect } from "react-redux";
import User from "./user";
import { fetchUser } from '../../actions/user_actions';
import { deleteVideo, fetchVideo, fetchVideos, patchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // let user = state.entities.users[ownProps.match.params.userId];
    // let videos = user ? user.videos : [];
    return {
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        videos: state.entities.videos,
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    updateVideo: video => dispatch(patchVideo(video)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)