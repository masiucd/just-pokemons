"use client";

import {useState} from "react";

import {Dialog} from "@/components/dialog";
import {Examples} from "@/components/pokemon/examples";
import Search from "@/components/pokemon/search_pokemon";

import {Icons} from "../icons";
import Tooltip from "../tooltip";

export function Content() {
  const [pokemonName, setPokemonName] = useState<string | null>(null);
  return (
    <>
      <Search pokemonName={pokemonName} setPokemonName={setPokemonName} />
      <div className="mb-2 mt-auto flex justify-end sm:pr-2">
        <Dialog
          title="Pokemon list"
          description="List of some pokemons to search for"
          buttonComponent={
            <Tooltip text="List of pokemons examples">
              <button
                type="button"
                className="flex h-[35px] min-w-[4rem] items-center justify-center gap-3 rounded-[4px] bg-white px-2 font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
              >
                <Icons.list />
              </button>
            </Tooltip>
          }
        >
          <Examples
            selectPokemon={(pokemonName: string) => {
              setPokemonName(pokemonName);
            }}
          />
        </Dialog>
      </div>
    </>
  );
}
