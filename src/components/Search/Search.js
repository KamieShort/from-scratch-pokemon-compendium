import React, { useState } from 'react';

export default function Search({ query, setQuery }) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} placeholder="See this placeholder" />
      <button onClick={() => setQuery(input)}>Search</button>
    </div>
  );
}
