export const EndPoints = Object.freeze({
  // Get all pokemons
  allPokemons: "https://pokeapi.co/api/v2/pokemon?limit=6",
  // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  pokemonByName: (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`,
});
