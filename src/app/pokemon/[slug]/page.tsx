import {randomUUID} from "node:crypto";

import {notFound} from "next/navigation";
import {z} from "zod";

import {PageWrapper} from "@/components/page_wrapper";
import {PokemonImage} from "@/components/pokemon/pokemon_image";
import {EndPoints} from "@/data/endpoints/pokemon";

const Stats = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

const PokemonSchema = z.object({
  name: z.string(),
  stats: z.array(Stats),
  weight: z.number(),
  height: z.number(),
  order: z.number(),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
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

  return (
    <PageWrapper className="border border-red-500">
      <div>
        <p>{pokemon.name}</p>
        <PokemonImage name={pokemon.name} width={300} />
        <p> weight {pokemon.weight}</p>
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
