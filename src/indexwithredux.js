import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Action from './actions/action';
import reducer from './reducers/reducer';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Action
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'BUYING' })}
      onDecrement={() => store.dispatch({ type: 'EATING' })}
    />,
    document.getElementById('root'),
  );
};

render();
store.subscribe(render);
