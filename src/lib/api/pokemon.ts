export const PokemonAPI = Object.freeze({
  // Get all pokemons
  allPokemons: (limit = 9, offset = 0) =>
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  pokemonByName: (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`,
});
