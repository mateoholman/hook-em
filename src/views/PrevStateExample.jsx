import React, { useState } from 'react';
import '../styles/counter.css';

const PrevStateExample = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
  };
  const handleDecrease = () => {
    setCounter(prevState => prevState - 1);
  };
  return (
    <div className="counter-container">
      <button className="counter-button" onClick={handleDecrease}>
        -
      </button>
      <p className="counter-digits">{counter}</p>
      <button className="counter-button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default PrevStateExample;
