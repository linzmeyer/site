// Set the experience reducer value based on which company name the user clicks on.
const experienceReducer = (state = 'default', action) => {
  if ( action.type === 'SET_TO_PRIME_GROUP' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_PRIME_SOLO' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_HMI_INTERNSHIP' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_WIRE_TECH' ) {
    return action.payload;
  } else {
    return state;
  }
}

export default experienceReducer;