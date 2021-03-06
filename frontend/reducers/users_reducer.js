import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[Math.random()]: action.user })
        default:
            return state
    }
}

export default usersReducer