import React from 'react';

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

export default TimerItem;
