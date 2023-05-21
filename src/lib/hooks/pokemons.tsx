import {useState} from "react";
import useSwr from "swr";

import {EndPoints} from "@/data/endpoints/pokemon";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const LIMIT = 12;

export const usePokemons = (limit = LIMIT) => {
  const [url, setUrl] = useState(EndPoints.allPokemons(limit, 0));
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
