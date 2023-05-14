import Image, {type ImageLoaderProps} from "next/image";

const imageLoader = ({src, width, quality}: ImageLoaderProps) =>
  `https://img.pokemondb.net/artwork/large/${src}.jpg?raw=true?w=${width}&q=${
    quality || 75
  }`;

interface Props {
  name: string;
}

export const PokemonImage = ({name}: Props) => {
  return (
    <Image
      loader={imageLoader}
      src={`${name}`}
      alt={`Picture of the ${name}`}
      width={150}
      quality={75}
      height={100}
    />
  );
};
