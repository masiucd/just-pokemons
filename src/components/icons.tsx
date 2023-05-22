import {
  ChevronFirst,
  ChevronLast,
  Command,
  Github,
  type Icon as LucideIcon,
  Search,
  Twitter,
  XIcon,
} from "lucide-react";

import PokemonIcon from "./pokemon_icon";

export type Icon = LucideIcon;

const Icons = {
  chevronFirst: ChevronFirst,
  chevronLast: ChevronLast,
  cmd: Command,
  github: Github,
  twitter: Twitter,
  pokemon: PokemonIcon,
  search: Search,
  x: XIcon,
};

export {Icons};
