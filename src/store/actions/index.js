import { CREATE_CLIENT, CREATE_CLIENT_LEAD, CLIENT_ERROR, CLEAR_ERROR, FETCH_INTERESTS } from './types'
import sperto from '../../apis/sperto';
import axios from 'axios';

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

//https://graph.facebook.com/search?type=adinterestsuggestion&interest_list=[“Golf”]&limit=1000&locale=en_US&access_token=your-access-token

export const fetchInterests = interest => {
    return async dispatch => {
        try{
            const response = await axios.get(`https://graph.facebook.com/search?type=adinterest&q=[${interest}]&limit=10000&locale=en_US&access_token=1336539159828316|bh4kS6-lGDx_SYrzJnuZX_6FpKE`)
            dispatch({ type: FETCH_INTERESTS, payload: response.data })
        }
        catch {
            dispatch({ type: CLIENT_ERROR })
        }
    }
}