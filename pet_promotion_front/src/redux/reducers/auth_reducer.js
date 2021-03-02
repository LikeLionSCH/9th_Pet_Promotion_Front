import { SET_AUTH_USER } from '../actions/types'

const initialCodeState = {
    currentAuth: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialCodeState, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                currentAuth: action.payload
            }
        default:
            return state
    }
}