import  { combineReducers } from 'redux';
import ClientReducer from './ClientReducer';
import ToolsReducer from './ToolsReducer'

export default combineReducers({
    client: ClientReducer,
    tools: ToolsReducer
})