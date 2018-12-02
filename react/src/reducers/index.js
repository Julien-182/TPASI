import { combineReducers } from 'redux';
import selectedReducer from '../reducers/selectedReducer';
import updateModelReducer from '../reducers/updateModelReducer'

const globalReducer = combineReducers({
    selectedReducer: selectedReducer,
    updateModelReducer: updateModelReducer,
});

export default globalReducer;