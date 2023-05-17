import {z} from "zod";

export const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});
export const PokemonsSchema = z.array(PokemonSchema);
export type Pokemon = z.infer<typeof PokemonSchema>;

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

export const PokemonSchemaItem = z.object({
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

export type PokemonItem = z.infer<typeof PokemonSchemaItem>;
