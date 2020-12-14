import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import App from './components/App.jsx';

export default (gon) => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container'),
  );
}
