// @ts-check

//import onChange from 'on-change';

// BEGIN (write your solution here)
/* const render = (state) => {
  document.getElementById(state.currentHeaderId).classList.add('active');
  document.getElementById(state.previousHeaderId).classList.remove('active');
  document.getElementById(state.currentTabPaneId).classList.add('active', 'show');
  document.getElementById(state.previousTabPaneId).classList.remove('active', 'show');
};

export default () => {
  const state1 = {
    menu: {
      currentHeaderId: 'list-home-list',
      previousHeaderId: null,
      currentTabPaneId: 'list-home',
      previousTabPaneId: null,
    },
  };

  const state2 = {
    menu: {
      currentHeaderId: 'list2-home-list',
      previousHeaderId: null,
      currentTabPaneId: 'list2-home',
      previousTabPaneId: null,
    },
  };
  const list1 = document.getElementById('list-tab');
  const list2 = document.getElementById('list-tab2');

  const watchedState1 = onChange(state1, (path, value, previousValue) => {
    state1.menu.previousHeaderId = previousValue;
    state1.menu.currentTabPaneId = value.slice(0, -5);
    state1.menu.previousTabPaneId = previousValue.slice(0, -5);
    render(state1.menu);
  });

  const watchedState2 = onChange(state2, (path, value, previousValue) => {
    state2.menu.previousHeaderId = previousValue;
    state2.menu.currentTabPaneId = value.slice(0, -5);
    state2.menu.previousTabPaneId = previousValue.slice(0, -5);
    render(state2.menu);
  });

  list1.addEventListener('click', (e) => {
    watchedState1.menu.currentHeaderId = e.target.id;
  });
  list2.addEventListener('click', (e) => {
    watchedState2.menu.currentHeaderId = e.target.id;
  });
};
// END */
