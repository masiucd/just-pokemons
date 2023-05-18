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
});

export const UrlSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type UrlType = z.infer<typeof UrlSchema>;
export type PokemonItem = z.infer<typeof PokemonSchemaItem>;
