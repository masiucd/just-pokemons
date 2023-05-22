// import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {Suspense} from "react";

import HeadBodyGrid from "@/components/loaders/head_body";
import {PageWrapper} from "@/components/page_wrapper";
import {PokemonBox} from "@/components/pokemon/pokemon_box";
import PokemonDetails from "@/components/pokemon/pokemon_details";
import {PokemonAPI} from "@/lib/api/pokemon";
import {PokemonSchemaItem} from "@/types/pokemon";

const getPokemon = async (slug: string) => {
  const url = PokemonAPI.pokemonByName(slug);
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
      <div className="flex flex-col gap-5 sm:flex-row">
        <PokemonBox pokemon={pokemon} />
        <PokemonDetails pokemon={pokemon} />
      </div>
    </PageWrapper>
  );
}

export default PokemonSlugPage;
