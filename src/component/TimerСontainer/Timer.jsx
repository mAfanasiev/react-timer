import React from 'react';
import PropTypes from 'prop-types';

import TimerItem from './TimerItem';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    time: PropTypes.string,
  })),
  onDeletedTimerItem: PropTypes.func,
};

const defaultProps = {
  onDeletedTimerItem: () => {},
  data: [],
};

const Timer = ({ data, onDeletedTimerItem }) => {
  const createTimerItem = ((item) => {
    const { id, done, ...timerProps } = item;
    const onDeleteHandler = () => onDeletedTimerItem(id);

    return (
      <TimerItem onDeletedTimerItem={onDeleteHandler} key={id} id={id} {...timerProps} />
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
