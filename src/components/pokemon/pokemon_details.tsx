import useSwr from "swr";

import {PokemonItem} from "@/types/pokemon";

export const useGetSpeciesInfo = (url: string) => {
  const {data, error, isLoading} = useSwr(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
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

interface Props {
  Pokemon: PokemonItem;
}
export default function PokemonDetails({Pokemon}: Props) {
  const {data, error, isLoading} = useGetSpeciesInfo(Pokemon.species.url);
  return <div>PokemonDetails</div>;
}
