import { connect } from "react-redux";
import User from "./user";
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { deleteVideo, fetchVideo, fetchVideos, patchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // let user = state.entities.users[ownProps.match.params.userId];
    // let videos = user ? user.videos : [];
    return {
        users: state.entities.users,
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
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)