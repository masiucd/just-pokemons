"use client";
import {useState} from "react";
import useSwr from "swr";

import {EndPoints} from "@/data/endpoints/pokemon";
import {Pokemon} from "@/types/pokemon";

import Paginate from "../paginate";
import PokemonItem from "./pokemon_item";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePokemons = (limit: number, offset: number) => {
  const {data, error, isLoading} = useSwr(
    EndPoints.allPokemons(limit, offset),
    fetcher,
    {refreshInterval: 3600}
  );

  return {
    data,
    error,
    isLoading,
  };
};

const LIMIT = 9;
const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const {data, error, isLoading} = usePokemons(LIMIT, offset);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <ul className="grid grid-cols-auto-fit justify-items-center gap-1">
        {data.results.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>

      <Paginate
        goNext={() => {
          if (data.next) {
            setOffset(offset + LIMIT);
          }
        }}
        goPrevious={() => {
          if (data.previous) {
            setOffset(offset - LIMIT);
          }
        }}
      />
    </div>
  );
};

export default PokemonList;
