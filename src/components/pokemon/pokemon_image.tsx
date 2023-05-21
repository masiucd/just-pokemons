"use client";
import Image, {type ImageLoaderProps} from "next/image";

const imageLoader = ({src, width, quality}: ImageLoaderProps) =>
  `https://img.pokemondb.net/artwork/large/${src}.jpg?raw=true?w=${width}&q=${
    quality || 75
  }`;

interface Props {
  name: string;
  width?: number;
  fill?: boolean;
}

export function PokemonImage({name, width = 150, fill = false}: Props) {
  return (
    <Image
      loader={imageLoader}
      src={`${name}`}
      alt={`Picture of the ${name}`}
      width={width}
      quality={75}
      height={100}
      fill={fill}
    />
  );
}
