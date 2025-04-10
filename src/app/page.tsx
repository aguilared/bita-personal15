"use client";
import { Fragment, useEffect } from "react";
import type { NextPage } from "next";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import { useInView } from "react-intersection-observer";
import Select from "react-select";
import { colourOptions } from "@/components/data";

import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchClient from "@/services/fetchClient1";

type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: {
    id: number;
    bitacora_id: number;
    bitacora: {
      bitacora_date: string;
    };
    image: string | null;
    tipoEvent: {
      description: string;
    };
    event: {
      description: string;
    };
    description: string;
  }[];
};

const convertDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm");
};
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: true,
      staleTime: 10000,
    },
  },
});

const BitaEventsCard: NextPage = () => {
  const { ref, inView } = useInView();

  async function fetchBitacoras({
    pageParam = 0,
    tipo_event_id = 0,
  }: {
    pageParam?: number;
    tipo_event_id?: number;
  }): Promise<ResultData> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated?offset=${pageParam}&limit=9`;

    const request = await fetchClient.get<ResultData>(url);
    console.log("Requestttt", request);
    return request.data;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["listbitacoras"],
      queryFn: async ({ pageParam = 0 }) => {
        const data = await fetchBitacoras({ pageParam });
        return data;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => lastPage?.next,
      getPreviousPageParam: (firstPage, allPages) => firstPage?.previous,
    });

  useEffect(() => {
    console.log("DATAUSE", data);
    if (inView) {
      fetchNextPage();
    }
  }, [data, fetchNextPage, inView]);
  console.log("DATA", data);

  return (
    <div className="py-3">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between">
          <Select
            options={colourOptions}
            className="w-1/2"
            placeholder="Filter by Event Type"
            isMulti
            isSearchable
          />
        </div>

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
        {data && data.pages.length > 0
          ? data.pages.map((group, i) => (
              <Fragment key={group.results[0]?.id}>
                {group?.results.map((event) => (
                  <Card
                    key={event.id}
                    sx={{ maxWidth: 545, bgcolor: "neutral.900" }}
                    color="neutral"
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
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href={`bita_events/4?id=${encodeURIComponent(
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
                      <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href={`bita_event/4?id=${encodeURIComponent(event.id)}`}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        IdEvent: {event.id}
                        {",  "}
                      </a>
                    </Typography>
                    <Typography variant="body1" component="div">
                      {"Tipo/Event: " +
                        `${event.tipoEvent.description}` +
                        ", " +
                        `${event.event.description}`}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      <Interweave content={event.description} />
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    ></Typography>
                  </Card>
                ))}
              </Fragment>
            ))
          : null}
      </div>

      <div>
        <button
          ref={ref}
          className={
            "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-8"
          }
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {(() => {
            if (isFetchingNextPage) return "Loading more...";
            if (hasNextPage) return "Load Newer";
            return "Nothing more to load";
          })()}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventsCard />
    </QueryClientProvider>
  );
}
