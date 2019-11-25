import  { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientReducer from './ClientReducer';
import ToolsReducer from './ToolsReducer'
import ContactReducer from './ContactReducer';

export default combineReducers({
    form: formReducer,
    client: ClientReducer,
    tools: ToolsReducer,
    contact: ContactReducer
})