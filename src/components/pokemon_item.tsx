"use client";

import Image, {type ImageLoaderProps} from "next/image";

import {Pokemon} from "@/types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const imageLoader = ({src, width, quality}: ImageLoaderProps) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}?raw=true?w=${width}&h=200&q=${
    quality || 75
  }`;
};

function PokemonItem({pokemon}: Props) {
  const id = pokemon.url.split("/")[6];
  return (
    <li key={pokemon.name}>
      <span>{pokemon.name}</span>
      <Image
        loader={imageLoader}
        src={`${id}.png`}
        alt={`Picture of the ${pokemon.name}`}
        width={200}
        quality={75}
        height={200}
      />
    </li>
  );
}

export default PokemonItem;
