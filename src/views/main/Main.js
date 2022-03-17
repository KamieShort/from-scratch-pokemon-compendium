import { useState, useEffect } from 'react';
import './Main.css';
import { fetchPokemon, fetchByType } from '../../services/fetchpokemon';
import PokeCard from '../../components/PokeCard/PokeCard';
import DropdownByType from '../../components/DropdownByType/DropdownByType';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const pokemonData = await fetchByType();
      setTypes(['all', ...pokemonData]);
    };
    fetchData();
  }, []);

  return (
    <>
      <DropdownByType types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      {pokemon.map((poke) => (
        <PokeCard key={poke.pokemon} {...poke} />
      ))}
    </>
  );
}
