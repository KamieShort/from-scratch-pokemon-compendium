import React, { useState } from 'react';

export default function Search({ setQuery }) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} placeholder="Search" />
      <button onClick={() => setQuery(input)}>Search</button>
    </div>
  );
}
