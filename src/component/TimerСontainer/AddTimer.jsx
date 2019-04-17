import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addTimer: PropTypes.func,
  how: PropTypes.number,
};

const defaultProps = {
  addTimer: () => {},
  how: 1,
};

const AddTimer = ({ addTimer, how }) => {
  const onClick = () => addTimer(how);

  return (
    <button type="button" onClick={onClick}>
      {`Add Timer ${how}`}
    </button>
  );
};

AddTimer.propTypes = propTypes;
AddTimer.defaultProps = defaultProps;
export default AddTimer;
