import { CREATE_CONTACT, REQUEST_ERROR } from '../actions/types'

const INITIAL_STATE = {
    error: '',
    data: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      return { ...state, data: action.payload, error: '' }
    case REQUEST_ERROR:
      return {...state, error: action.payload}
    default: 
      return state
  }
}