import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {Suspense} from "react";
import {z} from "zod";

import {cn} from "@/app/lib/styles";
import {PageWrapper} from "@/components/page_wrapper";
import {PokemonImage} from "@/components/pokemon/pokemon_image";
import {EndPoints} from "@/data/endpoints/pokemon";

function convertToPercent(value: number) {
  if (value < 1 || value > 1000) {
    throw new Error(
      "Invalid value. Please provide a value between 1 and 1000."
    );
  }

  return parseInt(((value / 1000) * 100).toFixed(2), 10);
}

const Stats = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

const VersionGroupDetail = z.object({
  level_learned_at: z.number(),
  move_learn_method: z.object({
    name: z.string(),
    url: z.string(),
  }),
  version_group: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

const Move = z.object({
  move: z.object({
    name: z.string(),
    url: z.string(),
  }),
  version_group_details: z.array(VersionGroupDetail),
});

const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  stats: z.array(Stats),
  weight: z.number(),
  height: z.number(),
  order: z.number(),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
  moves: z.array(Move),
});

const getPokemon = async (slug: string) => {
  const url = EndPoints.pokemonByName(slug);
  try {
    const result = await fetch(url, {
      next: {
        tags: ["pokemons"],
        revalidate: 3600, // 1 hour
      },
    });
    const data = await result.json();
    return PokemonSchema.parse(data);
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
  // console.log(pokemon);

  const WEIGHT = Math.floor((pokemon.weight / 100) * 10);
  const HEIGHT = Math.floor(pokemon.height / 100);
  const getHeightInPercent = (height: number) => {};
  console.log("HEIGHT", convertToPercent(pokemon.height));

  let s = "";
  switch (WEIGHT) {
    case 10:
      s = "w-[10%]";
      break;
    case 90:
      s = "w-[90%]";
      break;
    default:
      s = "w-[100%]";
  }

  return (
    <PageWrapper className="justify-center border border-red-500">
      <div className="border border-green-600">
        <div className="mb-5 border border-red-500 p-1">
          <Suspense fallback={<div>Loading...</div>}>
            <PokemonImage name={pokemon.name} width={300} />
          </Suspense>
          <h3>{pokemon.name}</h3>
        </div>
        <div className={cn("h-10 bg-red-300", `${s}`)}>
          <p> weight {pokemon.weight}</p>
        </div>
        <p>height {pokemon.height}</p>
        <p>order {pokemon.order}</p>
        <div>
          <p>stats</p>
          <ul>
            {pokemon.stats.map((x) => (
              <li key={randomUUID()}>
                <p>base stat {x.base_stat}</p>
                <p>effort {x.effort}</p>
                <p> state name {x.stat.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PokemonSlugPage;
