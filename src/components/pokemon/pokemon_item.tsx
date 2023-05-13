"use client";

import Link from "next/link";
import {Suspense} from "react";

import {Pokemon} from "@/types/pokemon";

import {PokemonImage} from "./pokemon_image";

interface Props {
  pokemon: Pokemon;
}

function PokemonItem({pokemon}: Props) {
  return (
    <li
      key={pokemon.name}
      className="flex flex-col items-center justify-center gap-1 rounded border border-slate-300 bg-white shadow transition-all duration-200 hover:z-10 hover:rotate-2 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex flex-col items-center justify-center">
        <Link href={`/pokemon/${pokemon.name}`}>
          <div className="p-1 capitalize ">
            <strong className="bg-gradient-to-r from-slate-500 to-pink-600 bg-clip-text text-2xl text-transparent">
              {pokemon.name}
            </strong>
          </div>

          <div className="flex min-h-[20rem] flex-1 flex-col justify-center p-10">
            <Suspense fallback={<div>Loading...</div>}>
              <PokemonImage name={pokemon.name} />
            </Suspense>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default PokemonItem;
