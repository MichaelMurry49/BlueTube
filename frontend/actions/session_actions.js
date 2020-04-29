import * as UtilAPI from '../util/session_api_util';

// export const SIGN_IN = "SIGN_IN";
// export const SIGN_UP = "SIGN_UP";
// export const SIGN_OUT = "SIGN_OUT";
export const RECEIVE_USER = "RECEIVE_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_USERS";



// Actions
const receiveUser = user => ({
    type: "RECEIVE_USER",
    user
}) 

const signOutUser = () => ({
    type: "SIGN_OUT_USER",
}) 

const receiveErrors = errors => ({
    type: "RECEIVE_ERRORS",
    errors
})

export const signUp = user => (
    UtilAPI.signUp(user)
        .then(user => dispatch(receiveUser(user))),
        error => dispatch(receiveErrors(error.reponseJSON))
)

export const signIn = user => (
    UtilAPI.signIn(user)
        .then(user => dispatch(receiveUser(user))),
        error => dispatch(receiveErrors(error.reponseJSON))
)

export const signOut = () => (
    UtilAPI.signOut()
        .then(() => dispatch(signOutUser()))
)


