import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number,
  time: PropTypes.number,
  onDeleted: PropTypes.func,
};

const defaultProps = {
  onDeleted: () => {},
  time: 0,
  id: 1,
};

const TimerItem = ({ id, onDeleted, time }) => (
  <div>
    <h2>
      {`Timer ${id}`}
    </h2>
    <button
      type="button"
      onClick={onDeleted}
    >
      {'X'}
    </button>
    <span>{time}</span>
  </div>
);

TimerItem.propTypes = propTypes;
TimerItem.defaultProps = defaultProps;

export default TimerItem;
