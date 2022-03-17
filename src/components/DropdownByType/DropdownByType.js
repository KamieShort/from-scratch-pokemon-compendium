import React from 'react';
import './DropdownByType.css';

export default function DropdownByType({ types, selectedType, setSelectedType, ...poke }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
      <p>
        {poke.type_1} {poke.type_2}
      </p>
    </select>
  );
}
