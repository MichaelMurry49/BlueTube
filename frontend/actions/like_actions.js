import * as UtilLikeAPI from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

// Actions
const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId
    }
}



// Thunk Actions
export const fetchLikes = () => dispatch => (
    UtilLikeAPI.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
)

export const fetchLike = likeId => dispatch => (
    UtilLikeAPI.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)))
)

export const deleteLike = likeId => dispatch => (
    UtilLikeAPI.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
)

export const postLike = like => dispatch => {
    return UtilLikeAPI.postLike(like)
        .then(like => {
            return dispatch(receiveLike(like))})
}

export const patchLike = like => dispatch => (
    UtilLikeAPI.patchLike(like)
        .then(like => dispatch(receiveLike(like)))
)