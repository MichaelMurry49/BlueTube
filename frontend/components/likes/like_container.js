import { postLike, patchLike, fetchLike, fetchLikes, deleteLike } from '../../actions/like_actions';
import { connect } from "react-redux";
import Like from "./like";

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.entities.users,
        // likes: state.entities.likes,
        comments: state.entities.comments,
        likeable: ownProps.likeable,
        likeableId: ownProps.likeableId,
        currentUser: ownProps.currentUser,
    }
}

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(postLike(like)),
    updateLike: like => dispatch(patchLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLike: likeId => dispatch(fetchLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Like)