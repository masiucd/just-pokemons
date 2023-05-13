import {PageWrapper} from "@/components/page_wrapper";
import PokemonItem from "@/components/pokemon_item";
import {EndPoints} from "@/data/endpoints/pokemon";
import {Pokemon, PokemonsSchema} from "@/types/pokemon";

async function getPokemons() {
  const result = await fetch(EndPoints.allPokemons, {
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
