"use client";

import Image, {type ImageLoaderProps} from "next/image";
import Link from "next/link";

import {Pokemon} from "@/types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const imageLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://img.pokemondb.net/artwork/large/${src}.jpg?raw=true?w=${width}&q=${
    quality || 75
  }`;
};

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
            {/* <div className="flex flex-1 flex-col justify-center p-5"> */}
            <Image
              loader={imageLoader}
              src={`${pokemon.name}`}
              alt={`Picture of the ${pokemon.name}`}
              width={200}
              quality={75}
              height={200}
            />
          </div>
        </Link>
      </div>
    </li>
  );
}

export default PokemonItem;
