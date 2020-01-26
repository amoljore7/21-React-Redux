import{combineReducers} from 'redux';
import InsertReducer from './Component/reducer.jsx'

const allReducers = combineReducers({
    InsertReducer:InsertReducer
});

export default allReducers;
