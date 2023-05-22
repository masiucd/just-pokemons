"use client"; // Error components must be Client Components
import {useEffect} from "react";

import {PageWrapper} from "@/components/page_wrapper";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  // flex-grow: 1;
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   /* align-items: center; */
  //   align-items: flex-start;

  return (
    <PageWrapper>
      <div className="flex flex-1 flex-col items-start justify-center ">
        <div className="flex flex-col gap-3">
          <h2>Something went wrong!</h2>
          <button
            type="button"
            className="rounded border border-slate-950 p-1 shadow transition-all hover:bg-slate-300"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
