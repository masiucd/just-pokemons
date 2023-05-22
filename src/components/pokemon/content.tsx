"use client";

import {useState} from "react";

import {Dialog} from "@/components/dialog";
import {Examples} from "@/components/pokemon/examples";
import Search from "@/components/pokemon/search_pokemon";

import {Icons} from "../icons";

export function Content() {
  const [pokemonName, setPokemonName] = useState<string | null>(null);
  return (
    <>
      <Search pokemonName={pokemonName} setPokemonName={setPokemonName} />
      <div className="mb-2 mt-auto flex justify-end sm:pr-2">
        <Dialog
          buttonText="Pokemon list"
          title="Pokemon list"
          description="List of some pokemons to search for"
          buttonIcon={<Icons.list />}
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
