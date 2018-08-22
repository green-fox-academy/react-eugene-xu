import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, callback, id }) => (
  <button onClick={callback} type="button" id={id}>{value}</button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


export default Button;
