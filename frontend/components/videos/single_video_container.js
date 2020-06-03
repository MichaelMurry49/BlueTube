import { connect } from "react-redux";
import SingleVideo from "./single_video";
// import {fetchUsers} from '../../actions/session_actions';
import { deleteVideo, fetchVideo, patchVideo } from '../../actions/video_actions';
import {deleteComment, fetchComment, fetchComments, postComment, patchComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return{
    video: state.entities.videos[ownProps.match.params.videoId],
    comments: state.entities.comments,
    users: state.entities.users,
    currentUser: state.session.currentUser,
}}

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(patchVideo(video)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),
    // fetchUsers: userId => dispatch(fetchUsers(userId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)