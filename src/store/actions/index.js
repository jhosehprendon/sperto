import { CREATE_CLIENT, CREATE_CLIENT_LEAD, CLIENT_ERROR, CLEAR_ERROR, FETCH_INTERESTS, CREATE_CONTACT, REQUEST_ERROR } from './types'
import sperto from '../../apis/sperto';
import active from '../../apis/active';
import axios from 'axios';
import history from '../../history';

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

//////
///// LEAD FORMS //////
//////

export const createContact = (formValues, tagId, sequenceId) => {
  return async dispatch => {
      const firstName = formValues.fullName.split(' ')[0]
      const lastName = formValues.fullName.split(' ')[1]
      const data = {
        contact: {
          ...formValues,
          firstName,
          lastName
        }
      }

      try {
        const response = await active.post('/contacts', data, {
          headers: {
            'Content-type': 'application/json',
            'Api-Token': process.env.REACT_APP_API_AC_TOKEN
          }
        })
        dispatch({ type: CREATE_CONTACT, payload: response.data })

        if(tagId == '2'){
          history.push('/guia-email-candidato/gracias')
        }

        if(tagId == '1'){
          history.push('/guia-esquema-google/gracias')
        }

        if(tagId == '4'){
          history.push('/mini-curso')
        }

        if(tagId == '3'){
          history.push('/curso-sistema-reclutadores/payment')
        }

        if(tagId == '5'){
          history.push('/guia-siglas-it/gracias')
        }

        ////// ADD TAG

        const tagData = {
          contactTag: {
            contact: response.data.contact.id,
            tag: tagId
          }
        }
        
        await active.post('/contactTags', tagData, {
          headers: {
            'Content-type': 'application/json',
            'Api-Token': process.env.REACT_APP_API_AC_TOKEN
          }
        })

        ////// ADD TO SEQUENCE

        const sequenceData = {
          contactAutomation: {
            contact: response.data.contact.id,
            automation: sequenceId
          }
        }
        
        await active.post('/contactAutomations', sequenceData, {
          headers: {
            'Content-type': 'application/json',
            'Api-Token': process.env.REACT_APP_API_AC_TOKEN
          }
        })


      } catch {
        dispatch({ type: REQUEST_ERROR, payload: 'Ocurrió un error, por favor intenta de nuevo' })
      }
      
  }
}