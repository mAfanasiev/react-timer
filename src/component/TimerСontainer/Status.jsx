import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.number,
  timeFinish: PropTypes.string,
};

const defaultProps = {
  data: null,
  timeFinish: null,
};

const Status = ({ data, timeFinish }) => {
  const statusText = `Timer №${data} finish at ${timeFinish}`;
  return (
    <div>
      {
        `Status: ${data ? statusText : 'Waiting'}`
      }
    </div>
  );
};

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
