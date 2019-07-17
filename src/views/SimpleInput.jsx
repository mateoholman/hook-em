import React, { useState } from 'react';
import '../styles/simpleInput.css';

const SimpleInput = () => {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className="simple-input">
      <input
        value={inputVal}
        onChange={event => setInputVal(event.target.value)}
      />
      <p>The useState value is: {inputVal}</p>
    </div>
  );
};

export default SimpleInput;
