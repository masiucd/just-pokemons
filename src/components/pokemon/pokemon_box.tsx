import {Suspense} from "react";

import {type PokemonItem} from "@/types/pokemon";

import {PokemonImage} from "./pokemon_image";

interface Props {
  pokemon: PokemonItem;
}

export function PokemonBox({pokemon}: Props) {
  return (
    <div className="relative mb-5 rounded p-2 ">
      <div className="mb-5">
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonImage name={pokemon.name} width={300} />
        </Suspense>
      </div>
      <div className="flex items-center justify-between px-1">
        <h3 className="capitalize">{pokemon.name}</h3>
        <ul className="flex gap-2">
          <li>
            {" "}
            <span>{pokemon.weight} KG</span>
          </li>
          <li>|</li>
          <li>
            <span>{pokemon.height} M</span>
          </li>
        </ul>
      </div>
      <p className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
        #{pokemon.order}
      </p>
    </div>
  );
}
