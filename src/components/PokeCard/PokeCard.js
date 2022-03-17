import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, ...poke }) {
  return (
    <div className="poke-div">
      <h3>{pokemon}</h3>
      <img src={`${poke.url_image}`} />
    
    </div>
  );
}
