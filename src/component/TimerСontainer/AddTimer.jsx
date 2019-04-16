import React from 'react';

const AddTimer = ({ addTimer, how = '' }) => (
  <button type="button" onClick={addTimer}>
    {`Add Timer ${how} `}
  </button>
);

export default AddTimer;
