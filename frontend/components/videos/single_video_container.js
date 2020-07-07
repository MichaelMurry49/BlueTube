import { connect } from "react-redux";
import SingleVideo from "./single_video";
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import { deleteVideo, fetchVideo, patchVideo } from '../../actions/video_actions';
import { openPopup } from "../../actions/popup_actions";

const mapStateToProps = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    let user = video ? state.entities.users[video.authorId] : {};
    let users = state.entities.users;
    return{
        video: video,
        comments: state.entities.comments,
        user: user,
        users: users,
        likes: state.entities.likes,
        currentUser: state.session.currentUser,
}}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(patchVideo(video)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openPopup: popup => dispatch(openPopup(popup)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)