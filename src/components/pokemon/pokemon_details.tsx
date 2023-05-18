"use client";

import {useState} from "react";
import useSwr from "swr";

import {cn} from "@/app/lib/styles";
import {DetailsSchema, PokemonItem} from "@/types/pokemon";

import Color from "./color";

// type SpeciesInfo = z.infer<typeof DetailsSchema>;

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

const Details: Record<string, string> = Object.freeze({
  en: "details",
  fr: "détails",
  es: "detalles",
  de: "Einzelheiten",
  js: "詳細",
  ko: "세부 사항",
});

interface TopProps {
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (code: string) => void;
}
function Top({language, setLanguage}: TopProps) {
  return (
    <div className="mb-5 flex items-center justify-between px-2">
      <h2 className="capitalize">{getLanguageValue(language, Details)}</h2>
      {/* <div className="ml-auto flex flex-1 justify-end border"> */}
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

const Description: Record<string, string> = Object.freeze({
  en: "description",
  es: "descripción",
  fr: "description",
  de: "beschreibung",
  ja: "説明",
  ko: "설명",
});

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
      <aside className="flex w-full flex-col">
        <div>
          <strong className="capitalize">
            {getLanguageValue(language, Description)}
          </strong>
          <p>
            {x?.flavor_text ?? (
              <span>No description with language {language}</span>
            )}{" "}
          </p>
        </div>
        <div>
          <strong>
            {language === "en"
              ? "Base Happnies"
              : language === "fr"
              ? "bonheur de base"
              : language === "es"
              ? "felicidad básica"
              : language === "de"
              ? "Basisglück"
              : language === "ja"
              ? "ベースハッピネス"
              : language === "ko"
              ? "기본 행복"
              : "Base Happnies"}
          </strong>
          <p>{data.base_happiness}</p>
        </div>
        <div>
          <div>
            <strong>
              {language === "en"
                ? "Capture Rate"
                : language === "fr"
                ? "Taux de capture"
                : language === "es"
                ? "Tasa de captura"
                : language === "de"
                ? "Fangrate"
                : language === "ja"
                ? "キャプチャレート"
                : language === "ko"
                ? "캡처율"
                : "Capture Rate"}
            </strong>
            <p>{data.capture_rate} </p>
          </div>
        </div>
        <Color color={data.color} language={language} />
        <div>
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
