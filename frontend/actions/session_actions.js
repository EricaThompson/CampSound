import { signup, login, logout, getUser, update } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user, //includes jbuilder stuff .userImg
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const signupUser = (user) => dispatch => {
    return signup(user)
        .then(res => dispatch(receiveCurrentUser(res) 
        ), err => dispatch(receiveSessionErrors(err.responseJSON))) //jbuilder comes in here
}

export const loginUser = (user) => dispatch => {
    return login(user)
        .then(res => dispatch(receiveCurrentUser(res)
        ), err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const logoutUser = () => dispatch => {
    return logout()
        .then(() => dispatch(logoutCurrentUser()))
}

export const retrieveUser = (userId) => dispatch => {
    return getUser(userId)
        .then((res) => dispatch(receiveCurrentUser(res)));
}

export const updateUser = (user, id) => dispatch => {
    return update(user, id)
        .then((res) => dispatch(receiveCurrentUser(res)))
}