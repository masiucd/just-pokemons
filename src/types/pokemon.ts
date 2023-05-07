import {z} from "zod";

export const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});
export const PokemonsSchema = z.array(PokemonSchema);
export type Pokemon = z.infer<typeof PokemonSchema>;
