"use client";
import React, { Fragment } from "react";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import fetchClient from "../../services/fetchClient1";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Interweave } from "interweave";
import dayjs from "dayjs";

const queryClient = new QueryClient();
type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: Bitacora[];
};
const convertDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm");
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

  const { status, data, error, isLoading, isFetching, isPlaceholderData } =
    useQuery({
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
    <div className="py-3">
      <div className="mx-auto px-4">
        <h1 className="text-gray-900 dark:text-white text-2xl font-bold">
          List Bitacoras Events.
        </h1>
      </div>
      {isLoading ? (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.results.map((event, i) => (
            <Card
              key={i}
              sx={{ maxWidth: 545, bgcolor: "neutral.900" }}
              color="neutral"
              invertedColors
            >
              {event.image! ? (
                <a
                  href={"/static/images/" + `${event.id}` + ".jpg"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={"/static/images/" + `${event.id}` + ".jpg"}
                    alt="No Image"
                  />
                </a>
              ) : (
                <></>
              )}
              <Typography variant="body1">
                <a
                  href={`/bitacora/view/${encodeURIComponent(
                    event.bitacora_id
                  )}`}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  BitacoraID: {event.bitacora_id}
                  {",  "}
                </a>
                {convertDate(event.bitacora.bitacora_date)}
              </Typography>
              <Typography variant="body1">
                {"IdEvent: " +
                  `${event.id}` +
                  " " +
                  convertDate(event.bitacora.bitacora_date)}
              </Typography>
              <Typography variant="body1" component="div">
                {"Tipo/Event: " +
                  `${event.tipoEvent.description}` +
                  ", " +
                  `${event.event.description}`}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                <Interweave content={event.description} />
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                component="div"
              ></Typography>
            </Card>
          ))}
      </div>
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
      <div>
        <button
          className={
            "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-8"
          }
        >
          Load more...
        </button>
      </div>
    </div>
  );
}
