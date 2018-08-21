import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Action extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>SimpleGoldenAcornApp extend with Redux</h1>
        <button id="up" type="button" onClick={onIncrement}>Buying</button>
        <div>{value}</div>
        <button id="down" type="button" onClick={onDecrement}>Eating</button>
      </div>
    );
  }
}

Action.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Action;
