import useSwr from "swr";

import {fetcher} from "@/app/lib/fetcher";
import {PokemonAPI} from "@/lib/api/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

import {PokemonBox} from "./pokemon_box";

interface Props {
  pokemonName: string;
}

function usePokemon(pokemon: string) {
  const {data, error, isLoading} = useSwr(
    PokemonAPI.pokemonByName(pokemon),
    fetcher,
    {
      suspense: true,
      fallback: <div>...loading</div>,
    }
  );

  return {
    data: PokemonSchemaItem.parse(data),
    error,
    isLoading,
  };
}

const FoundPokemon = ({pokemonName}: Props) => {
  const {data, error, isLoading} = usePokemon(pokemonName);
  if (isLoading) return <div>...loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="sm:pt-10">
      <PokemonBox className="sm:w-full" pokemon={data} />
    </div>
  );
};

export default FoundPokemon;
