import {Icons} from "@/components/icons";
import {PageWrapper} from "@/components/page_wrapper";

function PokemonPage() {
  return (
    <PageWrapper className="justify-center">
      <section className="mx-auto w-full max-w-2xl border border-red-400">
        <form
          action=""
          className="flex h-full flex-1 flex-col rounded border border-slate-950"
        >
          <div>
            <label htmlFor="search">
              <span>Search for pokemon</span>
            </label>
            <input type="text" name="search" id="search" />
          </div>
          <div className="border border-red-500 px-1">
            <button
              className="flex basis-14 items-center justify-center  border-slate-950 bg-white hover:bg-slate-50"
              type="submit"
            >
              <span>submit</span>
              <Icons.search size={20} />
            </button>
          </div>
        </form>
      </section>
    </PageWrapper>
  );
}

export default PokemonPage;
