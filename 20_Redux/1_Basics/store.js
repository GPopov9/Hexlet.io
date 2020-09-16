import omit from 'lodash/omit';
import redux from 'redux';

const { createStore } = redux;

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      const { task } = action.payload;
      return { ...state, [task.id]: task }
    }
    case 'TASK_REMOVE': {
      const { id } = action.payload;
      return omit(state, id);
    }
    default:
      return state;
  }
}

const generateStore = (initState) => createStore(reducer, initState)

export default generateStore;