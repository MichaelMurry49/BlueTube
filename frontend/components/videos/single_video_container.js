import { connect } from "react-redux";
import SingleVideo from "./single_video";
import { deleteVideo, fetchVideo, patchVideo } from '../../actions/video_actions';
import {deleteComment, fetchComment, postComment, patchComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(patchVideo(video)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    createComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),

})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)