"use client";

import {useState} from "react";
import useSwr from "swr";
import {z} from "zod";

import {cn} from "@/app/lib/styles";
import {PokemonItem, UrlSchema} from "@/types/pokemon";

import Color from "./color";

const DetailsSchema = z.object({
  base_happiness: z.number(),
  capture_rate: z.number(),
  gender_rate: z.number(),
  color: UrlSchema,
  egg_groups: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
  hatch_counter: z.number(),
  flavor_text_entries: z.array(
    z.object({
      flavor_text: z.string(),
      language: z.object({
        name: z.string(),
        url: z.string(),
      }),

      version: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
  ),
  form_descriptions: z.array(z.any()),
});

type SpeciesInfo = z.infer<typeof DetailsSchema>;

export const useGetSpeciesInfo = (url: string) => {
  const {data, error, isLoading} = useSwr(
    url,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return DetailsSchema.parse(data);
    },
    {refreshInterval: 3600, suspense: true}
  );

  return {
    data,
    error,
    isLoading,
  };
  // return useQuery<SpeciesInfo>({
  //   queryKey: ["species", url],
  //   queryFn: async () => {
  //     const { data } = await axios.get(url);
  //     return data as SpeciesInfo;
  //   },
  //   select: (data) =>
  //     ({
  //       gender_rate: data.gender_rate,
  //       capture_rate: data.capture_rate,
  //       hatch_counter: data.hatch_counter,
  //       egg_groups: data.egg_groups,
  //       color: data.color,
  //       flavor_text_entries: data.flavor_text_entries,
  //       form_descriptions: data.form_descriptions,
  //     } || {}),
  // });
};

const Languages = Object.freeze([
  {name: "English", code: "en"},
  {name: "Korean", code: "ko"},
  {name: "French", code: "fr"},
  {name: "German", code: "de"},
  {name: "Spanish", code: "es"},
  {name: "Japanese", code: "ja"},
] as const);

interface Props {
  Pokemon: PokemonItem;
}
export default function PokemonDetails({Pokemon}: Props) {
  const [language, setLanguage] = useState("fr");
  const {data, error, isLoading} = useGetSpeciesInfo(Pokemon.species.url);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  // Desc here
  const x = data.flavor_text_entries.find((x) => x.language.name === language);
  console.log("x", x);
  console.log("data", data);
  return (
    <div>
      <div className="flex justify-between">
        <h2>PokemonDetails</h2>
        <div>
          <strong>Language</strong>
          <ul className="flex flex-wrap gap-3">
            {Languages.map((x) => (
              // TODO Make tooltip
              <li
                key={x.code}
                className={cn(
                  "cursor-pointer rounded bg-slate-300 p-1 shadow transition-all hover:bg-slate-200 hover:shadow-lg",
                  language === x.code && "bg-slate-100 shadow-lg"
                )}
                onClick={() => setLanguage(x.code)}
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <strong>Description</strong>
        <p>
          {x?.flavor_text ?? (
            <span>No description with language {language}</span>
          )}{" "}
        </p>
      </div>
      <div>
        <strong>Base Happiness</strong>
      </div>
      <div>
        <strong>Color</strong>
        <Color color={data.color} language={language} />
      </div>
    </div>
  );
}
