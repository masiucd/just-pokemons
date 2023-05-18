"use client";

import {useState} from "react";
import useSwr from "swr";

import {
  CaptureRate,
  Description,
  Details,
  Happiness,
  Languages,
} from "@/app/lib/language";
import {cn} from "@/app/lib/styles";
import {DetailsSchema, PokemonItem} from "@/types/pokemon";

import Color from "./color";
import Label from "./label";

// type SpeciesInfo = z.infer<typeof DetailsSchema>;

export const useGetSpeciesInfo = (url: string) => {
  const {data, error, isLoading} = useSwr(
    url,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return DetailsSchema.parse(data);
    },
    {refreshInterval: 3600, suspense: true, fallback: <div>...loading</div>}
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

interface TopProps {
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (code: string) => void;
}
function Top({language, setLanguage}: TopProps) {
  return (
    <div className="mb-5 flex items-center justify-between sm:px-1">
      <h3 className="capitalize">{getLanguageValue(language, Details)}</h3>
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
      {/* </div> */}
    </div>
  );
}

function getLanguageValue(language: string, record: Record<string, string>) {
  const value = record[language];
  return value ?? `No language value for  ${language}`;
}

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
    <section className="w-full sm:w-2/3">
      <Top
        language={language}
        setLanguage={(code: string) => {
          setLanguage(code);
        }}
      />
      <aside className="flex w-full flex-col justify-center sm:px-1">
        <div>
          <Label>{getLanguageValue(language, Description)}</Label>
          <p>
            {x?.flavor_text ?? (
              <span>No description with language {language}</span>
            )}{" "}
          </p>
        </div>
        <div>
          <Label>{getLanguageValue(language, Happiness)}</Label>
          <p>{data.base_happiness}</p>
        </div>
        <div>
          <div>
            <Label>{getLanguageValue(language, CaptureRate)}</Label>
            <p>{data.capture_rate} </p>
          </div>
        </div>
        <Color color={data.color} language={language} />
        <div>
          <Label>Egg groups</Label>
          <ul>
            {data.egg_groups.map((x) => (
              <li key={x.name}> {x.name} </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
