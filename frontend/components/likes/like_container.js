import { postLike, patchLike, fetchLike, fetchLikes, deleteLike } from '../../actions/like_actions';
import { connect } from "react-redux";
import Like from "./like";
import { fetchComments } from '../../util/comment_api_util';


const mapStateToProps = (state) => {
    // debugger;
    return {
        users: state.entities.users,
        // userId: this.props.userId,
        likes: state.entities.likes,
        comments: state.entities.comments,
    }
}

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(postLike(like)),
    updateLike: like => dispatch(patchLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLike: likeId => dispatch(fetchLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Like)