import { deleteComment, fetchComment, fetchComments, postComment, patchComment } from '../../actions/comment_actions';
import { fetchVideo } from '../../actions/video_actions';
import { connect } from "react-redux";
import Comments from "./comments";


const mapStateToProps = (state, ownProps) => {
    let video = state.entities.videos[ownProps.videoId];
    return {
        comments: state.entities.comments,
        currentUser: state.session.currentUser,
        users: state.entities.users,
        video: video,
        videoId: ownProps.videoId,
        likes: ownProps.likes,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)