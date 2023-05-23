"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {
  type Dispatch,
  type FormEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import {experimental_useFormStatus as useFormStatus} from "react-dom";

import {cn} from "@/app/lib/styles";
import {Icons} from "@/components/icons";

import FoundPokemon from "./found_pokemon";

interface Props {
  children: ReactNode;
  className?: string;
}
function FormGroup({children, className}: Props) {
  return <div className={cn("flex flex-col px-1", className)}>{children}</div>;
}

interface SearchFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = (props: SearchFormProps) => {
  const {pending} = useFormStatus();
  return (
    <form className="mb-5 rounded" onSubmit={props.onSubmit}>
      <FormGroup>
        <label htmlFor="search">
          <span className="pl-1 text-xl">Search for a pokemon</span>
        </label>
        <motion.div
          className="flex"
          initial={{opacity: 0.1, scale: 0.6}}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {delay: 0.02, damping: 40, stiffness: 20},
          }}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="h-10 flex-1 rounded-l border border-slate-950 px-2 transition-all focus:outline-2 focus:outline-slate-900"
          />
          <button
            className={cn(
              "flex basis-28 items-center justify-center  gap-2  rounded-r border border-slate-950 bg-white capitalize hover:bg-slate-50",
              pending && "cursor-not-allowed opacity-40"
            )}
            type="submit"
            disabled={pending}
          >
            <span>submit</span>
            <Icons.search size={20} />
          </button>
        </motion.div>
      </FormGroup>
    </form>
  );
};

interface SearchPokemonProps {
  pokemonName: string | null;
  setPokemonName: Dispatch<SetStateAction<string | null>>;
}
function SearchPokemon({pokemonName, setPokemonName}: SearchPokemonProps) {
  return (
    <div className="flex flex-1 flex-col sm:mb-5">
      <SearchForm
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const values = new FormData(e.currentTarget);
          const pokemon = values.get("search") as string;
          setPokemonName(pokemon.toLowerCase());
        }}
      />
      {pokemonName !== null && typeof pokemonName === "string" ? (
        <FoundPokemon pokemonName={pokemonName} />
      ) : (
        <aside className="flex h-full flex-1 justify-center">
          <Image src="/poke.svg" alt="pokeball" width={200} height={200} />
        </aside>
      )}
    </div>
  );
}

export default SearchPokemon;
