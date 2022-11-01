import React, { useState } from 'react';

const HocComp = (Component) => (props) => {
  // do something
  const [incVal, setIncVal] = useState(0);

  const handleEvent = () => {
    setIncVal(incVal + 1);
  };

  // return a component that renders the component from the argument
  return <Component {...props} increment={incVal} handleEvent={handleEvent} />;
};

export default HocComp;
