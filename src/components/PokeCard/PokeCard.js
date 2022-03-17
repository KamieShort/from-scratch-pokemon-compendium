import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, ...poke }) {
  return (
    <div className="poke-div">
      <h2>{pokemon.toUpperCase()}</h2>
      <img className="img" src={`${poke.url_image}`} />
      <p>Ability 1: {poke.ability_1}</p>
      <p>Ability 2: {poke.ability_2}</p>
      <p>HP: {poke.hp}</p>
      <p>Egg Group 1:{poke.egg_group_1}</p>
      <p>Defense:{poke.defense}</p>
    </div>
  );
}
