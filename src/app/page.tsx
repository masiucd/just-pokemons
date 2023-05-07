import PokemonItem from "@/components/pokemon_item";
import {Pokemon, PokemonsSchema} from "@/types/pokemon";

async function getPokemons() {
  const base = "https://pokeapi.co/api/v2/pokemon?limit=102&offset=0";
  const result = await fetch(base, {
    next: {
      tags: ["pokemons"],
      revalidate: 3600, // 1 hour
    },
  });
  const data = await result.json();

  return PokemonsSchema.parse(data.results);
}

export default async function Home() {
  const pokemons = (await getPokemons()) as Pokemon[];
  return (
    <div className="mx-auto max-w-[910px] border border-red-500">
      <ul className="grid grid-cols-auto-fit justify-items-center   gap-5 p-0">
        {pokemons.map((pokemon) => {
          return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
        })}
      </ul>
      {/* <img src={pokemon1.url} alt="asd" /> */}
    </div>
  );
}
