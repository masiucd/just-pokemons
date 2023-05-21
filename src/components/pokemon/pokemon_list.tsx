"use client";

import {usePokemons} from "@/lib/hooks/pokemons";
import {Pokemon} from "@/types/pokemon";

import ImageGrid from "../loaders/image_grid";
import Paginate from "../paginate";
import PokemonItem from "./pokemon_item";

const PokemonList = () => {
  const {data, error, isLoading, setUrl} = usePokemons();
  if (isLoading) return <ImageGrid />;
  if (error) return <div>Error</div>;
  return (
    <section className="flex flex-col px-1 pt-5 ">
      <ul className="grid grid-cols-auto-fit justify-items-center gap-1">
        {data.results.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <Paginate
        leftEnabled={data.previous}
        rightEnabled={data.next}
        goNext={() => {
          setUrl(data.next);
        }}
        goPrevious={() => {
          setUrl(data.previous);
        }}
      />
    </section>
  );
};

export default PokemonList;
