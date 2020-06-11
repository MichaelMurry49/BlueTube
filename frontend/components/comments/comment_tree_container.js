import { deleteComment, fetchComment, fetchComments, postComment, patchComment } from '../../actions/comment_actions';
import {fetchUsers} from '../../actions/user_actions';
import { connect } from "react-redux";
import CommentTree from "./comment_tree";


const mapStateToProps = (state) => {
    // debugger;
    return {
        comments: state.entities.comments,
        currentUser: state.session.currentUser,
        users: state.entities.users,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentTree)