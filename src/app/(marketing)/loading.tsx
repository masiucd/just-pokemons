import EventsLoader from "@/components/loaders/events";
import {PageWrapper} from "@/components/page_wrapper";

function Loading() {
  return (
    <PageWrapper>
      <EventsLoader style={{width: "100%", height: "100%"}} />
    </PageWrapper>
  );
}

export default Loading;
