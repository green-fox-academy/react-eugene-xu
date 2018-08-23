import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './reducers/reducer';
import WithStates from './indexwithstates';
import App from './components/app';


const Routing = () => (
  <Router>
    <div>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        {' '}
        <span>
          <Link to="/simple/states">with States</Link>
        </span>
        {' '}
        <span>
          <Link to="/simple/redux">with Redux</Link>
        </span>
      </div>

      <hr />
      <Route exact path="/" component={home} />
      <Route path="/simple/states" component={withs} />
      <Route path="/simple/redux" component={withr} />
    </div>
  </Router>
);

const home = () => (
  <div>
    <h1>
      Golden Acorn is life!
      {' '}
      🌰
    </h1>
  </div>
);

const withs = () => (
  <div>
    <h1>GoldenAcornApp with states</h1>
    <WithStates />
  </div>
);

const store = createStore(reducer);
const withr = () => (
  <div>
    <h1>GoldenAcornApp with redux</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Routing;
