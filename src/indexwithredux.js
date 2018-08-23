import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import App from './components/app';

const store = createStore(reducer);

const WithRedux = render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default WithRedux;
