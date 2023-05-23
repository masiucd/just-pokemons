import {useState} from "react";
import useSwr from "swr";

import {fetcher} from "@/app/lib/fetcher";
import {PokemonAPI} from "@/lib/api/pokemon";

const LIMIT = 12;

export const usePokemons = (limit = LIMIT) => {
  const [url, setUrl] = useState(PokemonAPI.allPokemons(limit, 0));
  const {data, error, isLoading} = useSwr(url, fetcher, {
    refreshInterval: 3600,
  });
  return {
    data,
    error,
    isLoading,
    setUrl,
  };
};
