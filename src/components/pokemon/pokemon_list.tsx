"use client";
import {useState} from "react";
import useSwr from "swr";

import {EndPoints} from "@/data/endpoints/pokemon";
import {Pokemon} from "@/types/pokemon";

import ImageGrid from "../loaders/image_grid";
import Paginate from "../paginate";
import PokemonItem from "./pokemon_item";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePokemons = (url: string) => {
  const {data, error, isLoading} = useSwr(url, fetcher, {
    refreshInterval: 3600,
  });
  return {
    data,
    error,
    isLoading,
  };
};

const LIMIT = 9;
const PokemonList = () => {
  const [url, setUrl] = useState(EndPoints.allPokemons(LIMIT, 0));
  const {data, error, isLoading} = usePokemons(url);
  if (isLoading) return <ImageGrid />;
  if (error) return <div>Error</div>;
  console.log("data", data);
  return (
    <section>
      <ul className="grid grid-cols-auto-fit justify-items-center gap-1">
        {data.results.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <Paginate
        goNext={() => {
          if (data.next) {
            // setOffset(offset + LIMIT);
            setUrl(data.next);
          }
        }}
        goPrevious={() => {
          if (data.previous) {
            // setOffset(offset - LIMIT);
            setUrl(data.previous);
          }
        }}
      />
    </section>
  );
};

export default PokemonList;
