const PokemonExamples = [
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Pikachu",
  "Eevee",
  "Mew",
  "Mewtwo",
  "Gengar",
  "Snorlax",
  "Gyarados",
  "Dragonite",
  "Arcanine",
  "Gardevoir",
];

interface Props {
  // eslint-disable-next-line no-unused-vars
  selectPokemon: (pokemonName: string) => void;
}
export function Examples({selectPokemon}: Props) {
  return (
    <ul className="flex flex-wrap gap-3">
      {PokemonExamples.map((pokemon) => (
        <li key={pokemon}>
          <button
            className="flex min-w-[7rem] bg-slate-100 p-1 shadow-md hover:opacity-60 hover:shadow-xl"
            type="button"
            onClick={() => {
              selectPokemon(pokemon.toLowerCase());
            }}
          >
            {pokemon}
          </button>
        </li>
      ))}
    </ul>
  );
}
