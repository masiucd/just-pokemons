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
      className="flex min-h-[22rem] w-full flex-col gap-1 rounded border border-slate-300 bg-white shadow transition-all duration-200 hover:z-10 hover:rotate-1 hover:scale-105 hover:animate-pulse hover:shadow-lg"
    >
      <Link href={`/pokemon/${pokemon.name}`} className="flex flex-1 flex-col ">
        <div className="w-full bg-zinc-50 p-1 capitalize">
          <strong className="bg-gradient-to-r from-slate-900 to-pink-500 bg-clip-text text-2xl text-transparent">
            {pokemon.name}
          </strong>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center ">
          <Suspense fallback={<div>Loading...</div>}>
            <PokemonImage name={pokemon.name} />
          </Suspense>
        </div>
      </Link>
    </li>
  );
}

export default PokemonItem;
