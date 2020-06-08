import { connect } from "react-redux";
import SingleVideo from "./single_video";
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import { deleteVideo, fetchVideo, patchVideo } from '../../actions/video_actions';
import {deleteComment, deleteLike, fetchComment, fetchComments, postComment, patchComment} from '../../actions/comment_actions';
import {postLike, patchLike, fetchLike, fetchLikes}  from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    let user = video ? state.entities.users[video.authorId] : {};
    let users = state.entities.users;
    debugger;
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
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    createLike: like => dispatch(postLike(like)),
    updateLike: like => dispatch(patchLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLike: likeId => dispatch(fetchLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),

})

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo)