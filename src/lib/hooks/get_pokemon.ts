import {EndPoints} from "@/data/endpoints/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

export const getPokemon = async (slug: string) => {
  const url = EndPoints.pokemonByName(slug);
  try {
    const result = await fetch(url, {
      next: {
        tags: ["pokemons"],
        revalidate: 3600,
      },
    });
    const data = await result.json();
    return PokemonSchemaItem.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
