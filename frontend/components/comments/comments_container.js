import { deleteComment, fetchComment, fetchComments, postComment, patchComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import {fetchLikes, createLike, updateLike, deleteLike } from '../../actions/like_actions';
import { connect } from "react-redux";
import Comments from "./comments";


const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        comments: state.entities.comments,
        currentUser: state.session.currentUser,
        users: state.entities.users,
        video: ownProps.video,
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
    createLike: like => dispatch(postLike(like)),
    updateLike: like => dispatch(patchLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)