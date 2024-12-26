"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import fetchClient from "../../services/fetchClient1";

const queryClient = new QueryClient();
type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: Bitacora[];
};
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

const fetchProjectss = async (
  page = 0
): Promise<{
  projects: Array<{ name: string; id: number }>;
  hasMore: boolean;
}> => {
  //const response = await fetch(`/api/projects?page=${page}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated?offset=${page}&limit=9`
  );
  console.log("DATA", response.json());
  return await response.json();
};

async function fetchBitacoras({
  page,
  tipo_event_id = 0,
}: {
  page?: number;
  tipo_event_id?: number;
}): Promise<ResultData> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated?offset=${page}&limit=9`;
  console.log("URL", url);

  const request = await fetchClient.get<ResultData>(url);
  console.log("Requestttt", request);
  console.log("RequesData", request.data);
  console.log("RequesDataResultts", request.data.results);
  return request.data;
}

function Example() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);

  const { status, data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchBitacoras({ page }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  // Prefetch the next page!
  React.useEffect(() => {
    if (!isPlaceholderData && data?.next) {
      console.log("Page", page);

      queryClient.prefetchQuery({
        queryKey: ["projects", page],
        queryFn: () => fetchBitacoras({ page }),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

  return (
    <div>
      <p>
        In this example, each page of data remains visible as the next page is
        fetched. The buttons and capability to proceed to the next page are also
        supressed until the next page cursor is known. Each page is cached as a
        normal query too, so when going to previous pages, you'll see them
        instantaneously while they are also refetched invisibly in the
        background.
      </p>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <div>
          {data.results.map((project) => (
            <p key={project.id}>{project.tipo_event_id}</p>
          ))}
        </div>
      )}
      <div>Current Page: {page + 1}</div>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          setPage((old) => (data?.next ? old + 1 : old));
        }}
        disabled={isPlaceholderData || !data?.next}
      >
        Next Page
      </button>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'pending'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{" "}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
