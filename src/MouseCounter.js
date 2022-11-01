import React from 'react';
import HocComp from './HocComp';

const MouseCounter = ({ increment, handleEvent }) => {
  return (
    <div>
      <p>{increment}</p>
      <button onMouseEnter={() => handleEvent()}>Mouse Event</button>
    </div>
  );
};

export default HocComp(MouseCounter);
