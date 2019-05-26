import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import testimonial from './TestimonialsReducer';
import experience from './experienceReducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  experience, 
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  testimonial,
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
