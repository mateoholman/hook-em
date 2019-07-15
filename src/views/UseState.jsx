import React, { useState } from 'react';

const UseState = () => {
  const [coolKids, setCoolKids] = useState();
  //TODO: Add Material UI so you can use those components.
  //TODO: Add input/button for adding cool kids.
  return (
    <>
      <p>useState is a hook!</p>
      <p>Cool Kids Club</p>
    </>
  );
};

export default UseState;