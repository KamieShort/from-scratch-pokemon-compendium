import { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon } from '../../services/fetchpokemon';
import PokeCard from '../../components/PokeCard/PokeCard';

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
        <PokeCard key={poke.pokemon} {...poke} />
        // <p>{poke.pokemon}</p>
      ))}
    </>
  );
}
