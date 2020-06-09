import * as UtilAPI from '../util/session_api_util';

// export const SIGN_IN = "SIGN_IN";
// export const SIGN_UP = "SIGN_UP";
// export const SIGN_OUT = "SIGN_OUT";
export const RECEIVE_SESSION_USER = "RECEIVE_SESSION_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";



// Actions
const receiveSessionUser = user => ({
    type: RECEIVE_SESSION_USER,
    user
}) 

const signOutUser = () => ({
    type: SIGN_OUT_USER
}) 

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signUp = user => dispatch => (
    UtilAPI.signUp(user)
        .then(user => { dispatch(receiveSessionUser(user))},
        error => { dispatch(receiveErrors(error.responseJSON))})
)

export const signIn = user => dispatch => (
    UtilAPI.signIn(user)
        .then(user => dispatch(receiveSessionUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
)

export const signOut = () => dispatch => (
    UtilAPI.signOut()
        .then(() => dispatch(signOutUser()))
)


