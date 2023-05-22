import EventsLoader from "@/components/loaders/events";
import {PageWrapper} from "@/components/page_wrapper";

function PokemonLoading() {
  return (
    <PageWrapper className="flex max-w-7xl flex-1 items-center justify-center">
      <EventsLoader style={{width: "100%"}} />
    </PageWrapper>
  );
}

export default PokemonLoading;
