"use client";

import {cn} from "@/app/lib/styles";
import {usePokemons} from "@/lib/hooks/pokemons";
import {Pokemon} from "@/types/pokemon";

import ImageGrid from "../loaders/image_grid";
import Paginate from "../paginate";
import PokemonItem from "./pokemon_item";

const PokemonList = () => {
  const {data, error, isLoading, setUrl} = usePokemons();
  if (isLoading) return <ImageGrid />;
  if (error) return <div>Error</div>;

  const {results, previous, next} = data;

  return (
    <section
      className={cn(
        "flex flex-col px-1 pt-5",
        !results ? "flex-1 justify-center items-center" : null
      )}
    >
      {results ? (
        <>
          <ul className="grid grid-cols-auto-fit justify-items-center gap-1">
            {results.map((pokemon: Pokemon) => (
              <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </ul>
          <Paginate
            leftEnabled={Boolean(previous)}
            rightEnabled={Boolean(next)}
            goNext={() => {
              setUrl(next);
            }}
            goPrevious={() => {
              setUrl(previous);
            }}
          />
        </>
      ) : (
        <div className="flex rounded bg-slate-950/80 px-2 py-5 shadow-md">
          <h1 className="bg-gradient-to-r from-slate-100 to-pink-400 bg-clip-text  text-transparent">
            Something went wrong and there are no pokemons!
          </h1>
        </div>
      )}
    </section>
  );
};

export default PokemonList;
