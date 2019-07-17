import React, { useState } from 'react';
import '../styles/simpleInput.css';

const MediumStateExample = () => {
  const [inputVal, setInputVal] = useState('');
  const [listVals, setListVal] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setListVal([...listVals, inputVal]);
    setInputVal('');
  };
  return (
    <div className="simple-input">
      <form onSubmit={handleSubmit}>
        <input
          value={inputVal}
          onChange={event => setInputVal(event.target.value)}
          placeholder="Input some text and press enter..."
        />
        <p>The input useState value is currently: {inputVal}</p>
        <hr />
        <p>The listVals useState value is currently:</p>
        {
          listVals.length === 0
            ? (<p>An empty array.</p>)
            : (
              <ul>
                {
                listVals.map((listVal, index) => (
                  <li key={index}>{listVal}</li> // Using index as a key is bad, don't do this!
                ))
                }
              </ul>
            )
        }
      </form>
    </div>
  );
};

export default MediumStateExample;
