import React from 'react';
import PropTypes from 'prop-types';

import TimerItem from './TimerItem';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    time: PropTypes.number,
  })),
  onDeleted: PropTypes.func,
};

const defaultProps = {
  onDeleted: () => {},
  data: [],
};

const Timer = ({ data, onDeleted }) => {
  console.log(data);
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

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
