import hobbyReducer from './hobby';
import userReducer from './user';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    hobbyReducer,
    userReducer
});

export default rootReducer;