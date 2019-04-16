import React from 'react';

const AddTimer = ({ addTimer, how = 1 }) => {
  const onClick = () => addTimer(how);

  return (
    <button type="button" onClick={onClick}>
      {`Add Timer ${how} `}
    </button>
  );
};

export default AddTimer;
