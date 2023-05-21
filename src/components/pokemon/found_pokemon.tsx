import useSwr from "swr";

import {fetcher} from "@/app/lib/fetcher";
import {EndPoints} from "@/data/endpoints/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

import {PokemonImage} from "./pokemon_image";

interface Props {
  pokemonName: string;
}

function usePokemon(pokemon: string) {
  const {data, error, isLoading} = useSwr(
    EndPoints.pokemonByName(pokemon),
    fetcher,
    {
      suspense: true,
      fallback: <div>...loading</div>,
    }
  );
  const parsed = PokemonSchemaItem.parse(data);
  return {
    data: parsed,
    error,
    isLoading,
  };
}

const FoundPokemon = ({pokemonName}: Props) => {
  const {data, error, isLoading} = usePokemon(pokemonName);
  if (isLoading) return <div>...loading</div>;
  if (error) return <div>Error</div>;
  console.log("data", data.name);
  return (
    <div>
      <PokemonImage name={data.name} />
      <h1>{data.name}</h1>
    </div>
  );
};

export default FoundPokemon;
