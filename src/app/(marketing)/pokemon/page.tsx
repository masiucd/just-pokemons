import {Icons} from "@/components/icons";
import {PageWrapper} from "@/components/page_wrapper";
import Search from "@/components/pokemon/search_pokemon";

function PokemonPage() {
  return (
    <PageWrapper>
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col rounded shadow sm:pt-20">
        <Search />
        <div className="mb-2 mt-auto flex justify-end sm:pr-2">
          <button
            className="flex gap-2 rounded border border-slate-950 p-1 shadow hover:opacity-40"
            type="button"
          >
            <span>Pokemon list</span>
            <span>
              <Icons.search />
            </span>
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default PokemonPage;
