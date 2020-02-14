import { combineReducers } from 'redux';
import loggedUser from './loggedUser';
import nutritionUtils from './nutritionUtils';

export default combineReducers({
    loggedUser,
    nutritionUtils
});
