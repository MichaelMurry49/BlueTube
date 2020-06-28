import * as UtilCommentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => {
    return {
    type: RECEIVE_COMMENT,
    comment
}}

const removeComment = commentId => {
    return {
    type: REMOVE_COMMENT,
    commentId
}}

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

// Thunk actions
export const fetchComments = videoId => dispatch => (
    UtilCommentAPI.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
)

export const fetchComment = commentId => dispatch => (
    UtilCommentAPI.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)

export const deleteComment = commentId => dispatch => (
    UtilCommentAPI.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
)

export const postComment = comment => dispatch => {
    return UtilCommentAPI.postComment(comment)
        .then(comment => {
            return dispatch(receiveComment(comment))
        },
        errors => {
            return dispatch(receiveCommentErrors(errors.responseJSON))
        })
    }

export const patchComment = comment => dispatch => (
    UtilCommentAPI.patchComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)