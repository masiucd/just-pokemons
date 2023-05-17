import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {Suspense} from "react";

import {cn} from "@/app/lib/styles";
import {PageWrapper} from "@/components/page_wrapper";
import PokemonDetails from "@/components/pokemon/pokemon_details";
import {PokemonImage} from "@/components/pokemon/pokemon_image";
import {EndPoints} from "@/data/endpoints/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

const getPokemon = async (slug: string) => {
  const url = EndPoints.pokemonByName(slug);
  try {
    const result = await fetch(url, {
      next: {
        tags: ["pokemons"],
        revalidate: 3600,
      },
    });
    const data = await result.json();
    return PokemonSchemaItem.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

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
    <PageWrapper className="max-w-6xl justify-center border border-red-500">
      <div className="flex gap-5 border border-green-600">
        <div className="rounded shadow">
          <div className="relative mb-5 rounded p-2 ">
            <Suspense fallback={<div>Loading...</div>}>
              <PokemonImage name={pokemon.name} width={300} />
            </Suspense>
            <h3 className="capitalize">{pokemon.name}</h3>
            <div className="flex gap-4 ">
              <p>
                {" "}
                W: <span>{pokemon.weight}Kg</span>
              </p>
              <p>
                H: <span>{pokemon.height}M</span>
              </p>
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
