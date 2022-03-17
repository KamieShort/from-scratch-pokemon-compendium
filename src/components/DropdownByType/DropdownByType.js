import React from 'react';
import './DropdownByType.css';

export default function DropdownByType({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((pokemonType) => (
        <option key={pokemonType}>{pokemonType}</option>
      ))}
    </select>
  );
}
