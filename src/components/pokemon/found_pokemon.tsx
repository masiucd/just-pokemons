import useSwr from "swr";

import {fetcher} from "@/app/lib/fetcher";
import {PokemonAPI} from "@/lib/api/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

import EventsLoader from "../loaders/events";
import {PokemonBox} from "./pokemon_box";

function Loader() {
  return (
    <div className="flex items-center justify-center ">
      <EventsLoader width="100%" />
    </div>
  );
}

function Error({error}: {error: Record<string, string>}) {
  return (
    <div className="flex flex-col gap-3 pt-10">
      <h1>Something went wrong while fetching the pokemon</h1>
      <p>
        <span className="font-bold">Error:</span> {error.message}
      </p>
      <p>
        <span className="font-bold">Make a new search </span>
      </p>
    </div>
  );
}

interface Props {
  pokemonName: string;
}

function usePokemon(pokemon: string) {
  const {data, error, isLoading} = useSwr(
    PokemonAPI.pokemonByName(pokemon),
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
}

const FoundPokemon = ({pokemonName}: Props) => {
  const {data, error, isLoading} = usePokemon(pokemonName);
  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  const pokemonData = PokemonSchemaItem.parse(data);
  return <PokemonBox className="sm:w-full" pokemon={pokemonData} />;
};

export default FoundPokemon;
