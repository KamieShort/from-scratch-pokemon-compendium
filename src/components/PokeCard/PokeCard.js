import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, ability_1 }) {
  return (
    <div className="poke-div">
      <h3>{pokemon}</h3>
      <p>{ability_1}</p>
    </div>
  );
}
