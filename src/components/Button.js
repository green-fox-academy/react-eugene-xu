import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value, callback, id } = props;
  return <button onClick={callback} type="button" id={id}>{value}</button>;
}
// const Button = ({ value, callback, id }) => {
//   return <button onClick={callback} type="button" id={id}>{value}</button>;
// };

Button.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


export default Button;
