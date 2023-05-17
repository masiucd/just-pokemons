import {PageWrapper} from "@/components/page_wrapper";
import PokemonList from "@/components/pokemon/pokemon_list";

// async function getPokemons() {
//   const result = await fetch(EndPoints.allPokemons(6), {
//     next: {
//       tags: ["allPokemons"],
//       revalidate: 3600, // 1 hour
//     },
//   });
//   const data = await result.json();
//   return PokemonsSchema.parse(data.results);
// }

// TODO infinite scroll for pagination
export default async function Home() {
  // const pokemons = (await getPokemons()) as Pokemon[];
  return (
    <PageWrapper className="justify-center">
      <PokemonList />
    </PageWrapper>
  );
}
