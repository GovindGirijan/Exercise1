import usernameReducer from './username';
import submitReducer from './isSubmit';
import firstnameReducer from './firstname';
import lastnameReducer from './lastname';
import genderReducer from './gender';
import ageReducer from './age';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    username: usernameReducer,
    isSubmit: submitReducer,
    firstname: firstnameReducer,
    lastname: lastnameReducer,
    gender: genderReducer,
    age: ageReducer
});

export default allReducers