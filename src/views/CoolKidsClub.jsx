import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../styles/useStateHook.css';

const CoolKidsClub = () => {
  const [newCoolKid, setNewCoolKid] = useState('');
  const [coolKids, setCoolKids] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoolKids([...coolKids, newCoolKid]);
    setNewCoolKid('');
  };

  return (
    <section id="use-state-hook">
      <p>useState is a hook!</p>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-name"
          label="Name"
          value={newCoolKid}
          onChange={e => setNewCoolKid(e.target.value)}
          margin="normal"
          variant="outlined"
        />
      </form>
      <p>Cool Kids Club</p>
      <ul>
        {coolKids.map((coolKid, index) => (
          <li key={index}>{coolKid}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoolKidsClub;
