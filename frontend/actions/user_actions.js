import * as UtilUserAPI from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const fetchUser = userId => dispatch => (
    UtilUserAPI.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)),
            errors => dispatch(receiveUserErrors(errors.responseJSON)))
)

export const fetchUsers = () => dispatch => (
    UtilUserAPI.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)