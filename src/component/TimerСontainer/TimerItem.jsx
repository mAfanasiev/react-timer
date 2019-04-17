import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number,
  time: PropTypes.string,
  onDeletedTimerItem: PropTypes.func,
};

const defaultProps = {
  onDeletedTimerItem: () => {},
  time: '',
  id: 1,
};

const TimerItem = ({ id, onDeletedTimerItem, time }) => (
  <div>
    <h2>
      {`Timer ${id}`}
    </h2>
    <button
      type="button"
      onClick={onDeletedTimerItem}
    >
      {'X'}
    </button>
    <span>{time}</span>
  </div>
);

TimerItem.propTypes = propTypes;
TimerItem.defaultProps = defaultProps;

export default TimerItem;
