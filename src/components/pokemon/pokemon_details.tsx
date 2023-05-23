"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import useSwr from "swr";

import {
  CaptureRate,
  Description,
  Details,
  Groups,
  Happiness,
  Languages,
} from "@/app/lib/language";
import {cn} from "@/app/lib/styles";
import {DetailsSchema, PokemonItem} from "@/types/pokemon";

import Label from "./label";

function getCaptureRate(captureRate: number) {
  if (captureRate >= 100) {
    return 100;
  }
  return captureRate;
}

export const useGetSpeciesInfo = (url: string) => {
  const {data, error, isLoading} = useSwr(
    url,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return DetailsSchema.parse(data);
    },
    {
      refreshInterval: 3600,
      // suspense: true, fallback: <div>...loading</div>
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};

function DescriptionValue({
  flavor,
  language,
}: {
  flavor?: {flavor_text: string};
  language: string;
}) {
  return (
    <div>
      <Label>{getLanguageValue(language, Description)}</Label>
      <p>
        {flavor?.flavor_text ?? (
          <span>No description with language {language}</span>
        )}{" "}
      </p>
    </div>
  );
}

function BaseHappiness({
  language,
  baseHappiness,
}: {
  language: string;
  baseHappiness: number;
}) {
  return (
    <div>
      <Label>{getLanguageValue(language, Happiness)}</Label>
      <p>{baseHappiness}</p>
    </div>
  );
}

interface CaptureRateProps {
  captureRate: number;
  language: string;
}

function CaptureRateValue({captureRate, language}: CaptureRateProps) {
  return (
    <div className="mb-5">
      <Label>{getLanguageValue(language, CaptureRate)}</Label>
      <div className="relative">
        <motion.div
          className="absolute left-0 top-0 h-5 rounded bg-slate-900/80 shadow-md"
          initial={{width: 0}}
          animate={{width: 200}}
          transition={{duration: 1}}
        >
          <div
            className={cn("absolute left-0 top-0 h-full w-3 bg-red-500 pl-1")}
            style={{
              width: `${getCaptureRate(captureRate)}%`,
            }}
          >
            <p className="text-sm text-white">{captureRate}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface TopProps {
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (code: string) => void;
}

function Top({language, setLanguage}: TopProps) {
  return (
    <div className="mb-5 flex flex-col items-center justify-between gap-2 px-1 sm:flex-row sm:gap-0">
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
    </div>
  );
}

function getLanguageValue(language: string, record: Record<string, string>) {
  const value = record[language];
  return value ?? `No language value for  ${language}`;
}

interface Props {
  pokemon: PokemonItem;
}
export default function PokemonDetails({pokemon}: Props) {
  const [language, setLanguage] = useState("en");
  const {data, error, isLoading} = useGetSpeciesInfo(pokemon.species.url);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const flavor = data?.flavor_text_entries.find(
    (x) => x.language.name === language
  );

  return (
    <section className="w-full sm:w-2/3">
      <Top
        language={language}
        setLanguage={(code: string) => {
          setLanguage(code);
        }}
      />
      <aside className="flex w-full flex-col justify-center sm:px-1">
        <DescriptionValue flavor={flavor} language={language} />
        <BaseHappiness
          language={language}
          baseHappiness={data?.base_happiness ?? 0}
        />
        {data?.capture_rate && (
          <CaptureRateValue
            captureRate={data.capture_rate}
            language={language}
          />
        )}

        <Label>{getLanguageValue(language, Groups)}</Label>
        <ul>
          {data?.egg_groups.map(({name}) => {
            return <li key={name}> {name} </li>;
          }) ?? (
            <li>
              <span>No egg groups</span>
            </li>
          )}
        </ul>
      </aside>
    </section>
  );
}
