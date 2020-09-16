import { combineReducers } from 'redux';

const text = (state = '', action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'UPDATE_TEXT': {
      return action.payload.value;
    }
    case 'RESET_TEXT': {
      return '';
    }
    default:
      return state;
  }
  // END
};

export default combineReducers({
  text,
});