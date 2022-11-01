import React from 'react';
import './style.css';
import MouseCounter from './MouseCounter';
import ClickCouter from './ClickCounter';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ClickCouter />
      <MouseCounter />
    </div>
  );
}
