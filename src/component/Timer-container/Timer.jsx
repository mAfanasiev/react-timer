import React from 'react';

import TimerItem from './TimerItem';

const Timer = ({ data, onDeleted }) => {
  const elements = data.map((item) => {
    const { id, done, ...timerProps } = item;
    return (
      done ? null : <TimerItem onDeleted={() => onDeleted(id)} key={id} id={id} {...timerProps} />
    );
  });
  return (
    <div>
      {elements}
    </div>
  );
};

export default Timer;
