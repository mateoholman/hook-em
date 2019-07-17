import React, { useState } from 'react';
import '../styles/counter.css';

const PrevStateExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-container">
      <p className="counter-button">-</p>
      <p className="counter-digits">{counter}</p>
      <p className="counter-button">+</p>
    </div>
  );
};

export default PrevStateExample;
