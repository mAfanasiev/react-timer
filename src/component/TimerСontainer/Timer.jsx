import React from 'react';

import TimerItem from './TimerItem';

const Timer = ({ data, onDeleted }) => {
  const createTimerItem = ((item) => {
    const { id, done, ...timerProps } = item;
    return (
      <TimerItem onDeleted={() => onDeleted(id)} key={id} id={id} {...timerProps} />
    );
  });
  return (
    <div>
      {data.map(createTimerItem)}
    </div>
  );
};

export default Timer;
