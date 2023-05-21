import {useState} from "react";
import useSwr from "swr";

import {PokemonAPI} from "@/lib/api/pokemon";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
const LIMIT = 12;

export const usePokemons = (limit = LIMIT) => {
  const [url, setUrl] = useState(PokemonAPI.allPokemons(limit, 0));
  const {data, error, isLoading} = useSwr(url, fetcher, {
    refreshInterval: 3600,
    suspense: true,
    fallback: <div>...loading</div>,
  });
  return {
    data,
    error,
    isLoading,
    setUrl,
  };
};
