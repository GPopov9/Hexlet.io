// @ts-check
/* eslint-disable no-param-reassign */

//import _ from 'lodash';

// BEGIN (write your solution here)

/* const render = (state) => {
  const listsDiv = document.querySelector('div[data-container="lists"]');
  const tasksDiv = document.querySelector('div[data-container="tasks"]');

  const ulLists = document.createElement('ul');

  const onHrefClick = (list) => (e) => {
    e.preventDefault();
    state.activeList = list.id;
    render(state);
  };

  const listItem = (list) => {
    const li = document.createElement('li');
    let container;
    if (state.activeList === list.id) {
      container = document.createElement('b');
      container.innerHTML = list.name;
    } else {
      container = document.createElement('a');
      container.setAttribute('href', `#${list.name.toLowerCase()}`);
      container.innerHTML = list.name;
      container.addEventListener('click', onHrefClick(list));
    }
    li.appendChild(container);
    ulLists.appendChild(li);
  };

  state.lists.forEach(listItem);

  listsDiv.innerHTML = '';
  listsDiv.appendChild(ulLists);

  const tasksActive = state.tasks.filter(({ list }) => list === state.activeList);

  tasksDiv.innerHTML = '';
  if (tasksActive.length > 0) {
    const ulTasks = document.createElement('ul');
    tasksActive.forEach((task) => {
      const li = document.createElement('li');
      li.innerHTML = task.name;
      ulTasks.appendChild(li);
    });
    tasksDiv.appendChild(ulTasks);
  }
};

export default () => {
  const defaultList = {
    name: 'General',
    id: _.uniqueId(),
  };

  const state = {
    activeList: defaultList.id,
    lists: [defaultList],
    tasks: [],
  };

  const addTask = document.querySelector('[data-container="new-task-form"]');
  const addList = document.querySelector('[data-container="new-list-form"]');

  const onAddList = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    const newList = { name: value, id: _.uniqueId() };
    state.lists.push(newList);
    render(state);
  };

  const onTaskList = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    const newTask = { name: value, list: state.activeList };
    state.tasks.push(newTask);
    render(state);
  };

  addList.addEventListener('submit', onAddList);
  addTask.addEventListener('submit', onTaskList);
  render(state);
};
// END
 */