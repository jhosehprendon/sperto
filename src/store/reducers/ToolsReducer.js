import { FETCH_INTERESTS } from '../actions/types'

const INITIAL_STATE = {
    interests: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_INTERESTS:
            return { ...state, interests: action.payload.data }
        default: 
            return state
    }
}