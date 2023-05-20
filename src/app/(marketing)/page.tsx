import React from "react";

import {PageWrapper} from "@/components/page_wrapper";
import PokemonList from "@/components/pokemon/pokemon_list";

function Home() {
  return (
    <PageWrapper className="justify-center">
      <PokemonList />
    </PageWrapper>
  );
}

export default Home;
