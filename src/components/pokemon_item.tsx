"use client";

import Image, {type ImageLoaderProps} from "next/image";
import Link from "next/link";

import {Pokemon} from "@/types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const imageLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://img.pokemondb.net/artwork/large/${src}.jpg?raw=true?w=${width}&h=200&q=${
    quality || 75
  }`;
};

function PokemonItem({pokemon}: Props) {
  return (
    <li
      key={pokemon.name}
      className="flex flex-col items-center justify-center gap-2 rounded border border-slate-300 p-1 shadow"
    >
      <div className="w-full border-b px-1 py-2 text-xl capitalize">
        <Link href={`/pokemon/${pokemon.name}`}>
          <strong>{pokemon.name}</strong>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-center p-5">
        <Image
          loader={imageLoader}
          src={`${pokemon.name}`}
          alt={`Picture of the ${pokemon.name}`}
          width={200}
          quality={75}
          height={200}
        />
      </div>
    </li>
  );
}

export default PokemonItem;
