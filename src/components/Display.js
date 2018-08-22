import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { count } = props;
  return (
    <div>
      {count}
    </div>
  );
}

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Display;
