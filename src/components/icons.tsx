import {
  ChevronFirst,
  ChevronLast,
  Command,
  Github,
  type Icon as LucideIcon,
  Twitter,
} from "lucide-react";

import {PokemonIcon} from "./pokemon_icon";

export type Icon = LucideIcon;

const Icons = {
  chevronFirst: ChevronFirst,
  chevronLast: ChevronLast,
  cmd: Command,
  github: Github,
  twitter: Twitter,
  pokemon: PokemonIcon,
};

export {Icons};
