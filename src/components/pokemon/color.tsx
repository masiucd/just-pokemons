import useSwr from "swr";
import {z} from "zod";

import {UrlSchema, UrlType} from "@/types/pokemon";

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
    suspense: true,
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
  console.log("data", data);
  const foo = data.names.find((x) => x.language.name === language);
  console.log("foo", foo);
  return (
    <div>
      <p>{foo?.name ?? "No Color for the language"}</p>
    </div>
  );
}
