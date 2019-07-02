import { CREATE_CLIENT, CREATE_CLIENT_LEAD, CLIENT_ERROR, CLEAR_ERROR } from '../actions/types'

const INITIAL_STATE = {
    error: '',
    data: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_CLIENT:
            return { ...state, data: action.payload, error: '' }
        case CREATE_CLIENT_LEAD:
            return { ...state, data: action.payload, error: '' }
        case CLIENT_ERROR:
            return {...state, error: 'Email no es válido, intenta de nuevo'}
        case CLEAR_ERROR:
            return {...state, error: ''}
        default: 
            return state
    }
}