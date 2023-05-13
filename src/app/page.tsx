import {PageWrapper} from "@/components/page_wrapper";
import PokemonItem from "@/components/pokemon_item";
import {Pokemon, PokemonsSchema} from "@/types/pokemon";

async function getPokemons() {
  const base = "https://pokeapi.co/api/v2/pokemon?limit=12";
  // const base = "https://pokeapi.co/api/v2/pokemon?limit=102&offset=0";
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
    <PageWrapper className="max-w-[800px] justify-center">
      <ul className="grid grid-cols-auto-fit justify-items-center gap-1">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </PageWrapper>
  );
}
