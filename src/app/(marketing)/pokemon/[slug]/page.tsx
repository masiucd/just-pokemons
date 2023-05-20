import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {Suspense} from "react";

import {cn} from "@/app/lib/styles";
import {PageWrapper} from "@/components/page_wrapper";
import PokemonDetails from "@/components/pokemon/pokemon_details";
import {PokemonImage} from "@/components/pokemon/pokemon_image";
import {getPokemon} from "@/lib/hooks/get_pokemon";

interface Props {
  params: {
    slug: string;
  };
}

// pokemon/[slug].tsx
async function PokemonSlugPage({params}: Props) {
  const pokemon = await getPokemon(params.slug);
  if (!pokemon) {
    notFound();
  }

  function getStatValue(stat: number) {
    if (stat < 10) {
      return "w-[10%]";
    }
    if (stat < 20) {
      return "w-[20%]";
    }
    if (stat < 30) {
      return "w-[30%]";
    }
    if (stat < 40) {
      return "w-[40%]";
    }
    if (stat < 50) {
      return "w-[50%]";
    }
    if (stat < 60) {
      return "w-[60%]";
    }
    if (stat < 70) {
      return "w-[70%]";
    }
    if (stat < 80) {
      return "w-[80%]";
    }
    if (stat < 90) {
      return "w-[90%]";
    }
    return "w-[100%]";
  }

  return (
    <PageWrapper className="max-w-6xl justify-center ">
      <div className="flex flex-col gap-5  sm:flex-row">
        <div className="w-full rounded  shadow sm:w-1/3">
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

          <ul className="flex flex-col gap-3 pr-1">
            {pokemon.stats.map(({stat, base_stat}) => (
              <li key={randomUUID()}>
                <p className="capitalize"> {stat.name}</p>
                {/* TODO framer motion */}
                <div
                  className={cn(
                    "h-8 rounded bg-slate-900 flex items-center pl-2 shadow text-white",
                    getStatValue(base_stat)
                  )}
                >
                  <p>{base_stat}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <PokemonDetails Pokemon={pokemon} />
      </div>
    </PageWrapper>
  );
}

export default PokemonSlugPage;
