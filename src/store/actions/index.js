import { CREATE_CLIENT, CREATE_CLIENT_LEAD, CLIENT_ERROR, CLEAR_ERROR } from './types'
import sperto from '../../apis/sperto';

export const createClient = (formValues) => {
    return async dispatch => {
        dispatch({ type: CLEAR_ERROR })
        try{
            await sperto.post('/agency-client', {...formValues})
            dispatch({ type: CREATE_CLIENT })
        }
        catch {
            dispatch({ type: CLIENT_ERROR })
        }
    }
}

export const createClientLead = formValues => {
    return async dispatch => {
        dispatch({ type: CLEAR_ERROR })
        try{
            await sperto.post('/agency-lead', {...formValues})
            dispatch({ type: CREATE_CLIENT_LEAD })
        }
        catch {
            dispatch({ type: CLIENT_ERROR })
        }
    }
}