import {Dialog} from "@/components/dialog";
import {PageWrapper} from "@/components/page_wrapper";
import Search from "@/components/pokemon/search_pokemon";

const PokemonExamples = [
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Pikachu",
  "Eevee",
  "Mew",
];

function PokemonPage() {
  return (
    <PageWrapper>
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col rounded shadow sm:pt-20">
        <Search />
        <div className="mb-2 mt-auto flex justify-end sm:pr-2">
          <Dialog
            buttonText="Pokemon list"
            title="Pokemon list"
            description="List of all pokemon"
          >
            <ul className="flex flex-col">
              {PokemonExamples.map((pokemon) => (
                <li key={pokemon}> {pokemon} </li>
              ))}
            </ul>
          </Dialog>
        </div>
      </section>
    </PageWrapper>
  );
}

export default PokemonPage;
