import { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon } from '../../services/fetchpokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {pokemon.map((poke) => (
        <div key={poke.pokemon}>
          <p>{poke.pokemon}</p>
        </div>
      ))}
    </>
  );
}
