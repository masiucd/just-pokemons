import {PageWrapper} from "@/components/page_wrapper";
import {Content} from "@/components/pokemon/content";

function PokemonPage() {
  return (
    <PageWrapper>
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col rounded shadow sm:pt-20">
        <Content />
      </section>
    </PageWrapper>
  );
}

export default PokemonPage;
