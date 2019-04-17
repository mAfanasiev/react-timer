import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.number,
};

const defaultProps = {
  data: null,
};

const Status = ({ data }) => {
  const statusText = `Timer №${data} finish at ${Date()}`;
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
