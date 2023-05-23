import useSwr from "swr";
import {z} from "zod";

import {UrlSchema, UrlType} from "@/types/pokemon";

import Label from "./label";

// "https://pokeapi.co/api/v2/pokemon-color/8/"

const ColorSchema = z.object({
  id: z.number(),
  name: z.string(),
  names: z.array(
    z.object({
      language: UrlSchema,
      name: z.string(),
    })
  ),
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const useColor = (url: string) => {
  const {data, error, isLoading} = useSwr(url, fetcher, {
    refreshInterval: 3600,
    // suspense: true,
    // fallback: <div>Loading...</div>,
  });
  const colorData = ColorSchema.parse(data);
  return {
    data: colorData,
    error,
    isLoading,
  };
};
interface Props {
  color: UrlType;
  language: string;
}
export default function Color({color, language}: Props) {
  const {data, error, isLoading} = useColor(color.url);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const maybeLanguage = data.names.find(
    (item) => item.language.name === language
  );

  return (
    <div>
      <Label>
        {language === "en"
          ? "color"
          : language === "fr"
          ? "couleur"
          : language === "es"
          ? "color"
          : language === "ja"
          ? "色"
          : language === "ko"
          ? "색깔"
          : language === "de"
          ? "Farbe"
          : "color"}
      </Label>
      <p>{maybeLanguage?.name ?? "No Color for the language"}</p>
    </div>
  );
}
