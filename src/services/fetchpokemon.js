export async function fetchPokemon() {
  const params = new URLSearchParams();
  params.set = ('perPage', 10);
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchByType() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}

export async function filterPokemon(type) {
  const params = new URLSearchParams();

  params.set('perPage', 10);

  if (type !== 'all') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
