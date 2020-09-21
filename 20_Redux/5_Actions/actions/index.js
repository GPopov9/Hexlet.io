export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

export const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
});

export const removeTask = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});

// BEGIN (write your solution here)
export const cleanTasks = () => ({
  type: 'TASKS_CLEAN',
  payload: {},
});

export const replaceTasks = (tasks) => ({
  type: 'TASKS_REPLACE',
  payload: {
    tasks,
  },
})
// END