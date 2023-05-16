import React from "react";

import {PageWrapper} from "@/components/page_wrapper";
import PokemonList from "@/components/pokemon/pokemon_list";

function Home() {
  return (
    <PageWrapper className="max-w-[800px] justify-center">
      <PokemonList />
    </PageWrapper>
  );
}

export default Home;
