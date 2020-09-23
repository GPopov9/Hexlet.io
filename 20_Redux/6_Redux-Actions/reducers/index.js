import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const defaultText = '';
const defaultTasks = [];

const taskText = handleActions({
  [actions.updateNewTaskText](state, { payload: { text } }) {
    return text;
  },
  [actions.addTask]() {
    return '';
  }
}, defaultText);

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return [task, ...state];
  },
  [actions.removeTask](state, { payload: { id } }) {
    return state.filter((task) => task.id !== id);
  }
}, defaultTasks);
// END

export default combineReducers({
  taskText,
  tasks,
});