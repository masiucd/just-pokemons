import {PageWrapper} from "@/components/page_wrapper";
import Search from "@/components/pokemon/search_pokemon";

function PokemonPage() {
  return (
    <PageWrapper>
      <section className="mx-auto w-full max-w-3xl flex-1 border border-red-400 pt-20">
        <Search />
      </section>
    </PageWrapper>
  );
}

export default PokemonPage;
