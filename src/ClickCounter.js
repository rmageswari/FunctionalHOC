import React from 'react';
import HocComp from './HocComp';

const ClickCounter = ({ increment, handleEvent }) => {
  return (
    <div>
      <p>{increment}</p>
      <button onClick={() => handleEvent()}>Click Event</button>
    </div>
  );
};

export default HocComp(ClickCounter);
