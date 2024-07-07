import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh', // Full viewport height to center vertically
  };
  return (
    <>
     <div style={spinnerContainerStyle}>
      <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"

  />
  </div>
    </>
  );
};

export default Loading;
