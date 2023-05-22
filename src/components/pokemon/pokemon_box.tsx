import {Suspense} from "react";

import {cn} from "@/app/lib/styles";
import {type PokemonItem} from "@/types/pokemon";

import ImageGrid from "../loaders/image_grid";
import {PokemonImage} from "./pokemon_image";
import {PokemonStat} from "./pokemon_stat";

type NameWeightHeightProps = Pick<Props, "pokemon">;

function NameWeightHeight({pokemon}: NameWeightHeightProps) {
  return (
    <div className="flex items-center justify-between px-1">
      <h3 className="capitalize">{pokemon.name}</h3>
      <ul className="flex gap-2">
        <li>
          <span>{pokemon.weight} KG</span>
        </li>
        <li>|</li>
        <li>
          <span>{pokemon.height} M</span>
        </li>
      </ul>
    </div>
  );
}

interface OrderProps {
  order: number;
}
function Order({order}: OrderProps) {
  return (
    <p className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
      #{order}
    </p>
  );
}

interface TopProps {
  pokemon: PokemonItem;
}
function Top({pokemon}: TopProps) {
  return (
    <div className="relative mb-5 rounded p-2">
      <div className="mb-5">
        <Suspense fallback={<ImageGrid />}>
          <PokemonImage name={pokemon.name} width={300} priority />
        </Suspense>
      </div>
      <NameWeightHeight pokemon={pokemon} />
      <Order order={pokemon.order} />
    </div>
  );
}

interface Props {
  pokemon: PokemonItem;
  className?: string;
}

export function PokemonBox({pokemon, className}: Props) {
  return (
    <div className={cn("w-full rounded  shadow sm:w-1/3", className)}>
      <Top pokemon={pokemon} />
      <ul className="flex flex-col gap-3 pr-1">
        {pokemon.stats.map(({stat, base_stat}) => (
          <PokemonStat key={stat.name} stat={stat} baseStat={base_stat} />
        ))}
      </ul>
    </div>
  );
}
