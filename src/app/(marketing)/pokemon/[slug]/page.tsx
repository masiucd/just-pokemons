import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {Suspense} from "react";

import {PageWrapper} from "@/components/page_wrapper";
import {PokemonBox} from "@/components/pokemon/pokemon_box";
import PokemonDetails from "@/components/pokemon/pokemon_details";
import {PokemonImage} from "@/components/pokemon/pokemon_image";
import {PokemonStat} from "@/components/pokemon/pokemon_stat";
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

  return (
    <PageWrapper className="max-w-6xl justify-center ">
      <div className="flex flex-col gap-5  sm:flex-row">
        <div className="w-full rounded  shadow sm:w-1/3">
          <PokemonBox pokemon={pokemon} />

          <ul className="flex flex-col gap-3 pr-1">
            {pokemon.stats.map(({stat, base_stat}) => (
              <PokemonStat
                key={randomUUID()}
                stat={stat}
                baseStat={base_stat}
              />
            ))}
          </ul>
        </div>
        <PokemonDetails pokemon={pokemon} />
      </div>
    </PageWrapper>
  );
}

export default PokemonSlugPage;
