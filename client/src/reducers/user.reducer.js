import { GET_USER, DELETE_USER } from "../actions/user.actions"

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        case DELETE_USER:
            return action.payload
        default:
            return state
    }
}