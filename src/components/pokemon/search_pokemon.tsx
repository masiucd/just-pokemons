"use client";

import {type FormEvent, type ReactNode, useState} from "react";

import {cn} from "@/app/lib/styles";
import {Icons} from "@/components/icons";

import FoundPokemon from "./found_pokemon";

interface Props {
  children: ReactNode;
  className?: string;
}
function FormGroup({children, className}: Props) {
  return (
    <div className={cn("flex flex-col border border-red-500 px-1", className)}>
      {children}
    </div>
  );
}

interface SearchFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = (props: SearchFormProps) => {
  return (
    <form
      className="flex h-full flex-1 flex-col rounded border border-slate-950"
      onSubmit={props.onSubmit}
    >
      <FormGroup>
        <label htmlFor="search">
          <span>Search for pokemon</span>
        </label>
        <div className="flex">
          <input
            type="text"
            name="search"
            id="search"
            className="h-10 flex-1 rounded-l border border-slate-950 px-2"
          />
          <button
            className="flex min-w-[7rem]  basis-14 items-center justify-center gap-3 rounded-r border border-slate-950 bg-white capitalize hover:bg-slate-50 "
            type="submit"
          >
            <span>submit</span>
            <Icons.search size={20} />
          </button>
        </div>
      </FormGroup>
    </form>
  );
};

function SearchPokemon() {
  const [pokemonName, setPokemonName] = useState<string | null>(null);

  return (
    <div>
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
        <p>Search for a pokemon</p>
      )}
    </div>
  );
}

export default SearchPokemon;
