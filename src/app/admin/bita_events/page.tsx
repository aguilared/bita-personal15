"use client";
import { Fragment, useEffect, useState } from "react";
import type { NextPage } from "next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { useInView } from "react-intersection-observer";
import useBitacoras, { Bitacora } from "@/hooks/useBitacoras";
import {
  useQuery,
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchClient from "@/services/fetchClient1";
import Container from "@/components/Container";
import { Button, CardActions } from "@mui/material";

// Define a more complete Bitacora type based on usage in the component
interface EventBitacora {
  id: number;
  description: string;
  tipoEvent: {
    description: string;
  };
  event: {
    description: string;
  };
  // Add any other properties from the API response that are used
}

type ResultData = {
  count: number;
  next: number | null; // 'next' can be null if there are no more pages
  previous: number | null; // 'previous' can be null if there are no previous pages
  results: EventBitacora[]; // Use the more specific EventBitacora type
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventsCard />
    </QueryClientProvider>
  );
}

const BitaEventsCard: NextPage = () => {
  const { ref, inView } = useInView();

  /*const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
    error,
    status,
    isLoading,
  } = useBitacoras();
  console.log("Datall", data); */
  async function fetchBitacoras({
    pageParam, // pageParam is always provided by useInfiniteQuery, no default needed
    tipo_event_id,
  }: {
    pageParam: number; // Ensure pageParam is a number
    tipo_event_id?: number;
  }): Promise<ResultData> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated?offset=${pageParam}&limit=9`;

    const request = await fetchClient.get<ResultData>(url);
    console.log("Requestttt", request);
    return request.data;
  }

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    ...result
  } = useInfiniteQuery({
    queryKey: ["listbitacoras"],
    // Pass pageParam as an object to match fetchBitacoras signature
    queryFn: ({ pageParam }) =>
      fetchBitacoras({ pageParam: pageParam as number }),
    initialPageParam: 0, // Start with offset 0 for the first page

    // Use lastPage.next as the next offset, or undefined if no more pages
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    // Use firstPage.previous as the previous offset, or undefined if no previous pages
    getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined,
  });

  // The useEffect block from lines 115-121 was incorrectly structured
  // and has been removed as its properties belong to useInfiniteQuery.

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      {data &&
        data.pages.map((group, i) => (
          <Fragment key={i}>
            {/* 'group.results' is guaranteed to be an array by ResultData type, so '?' is not needed here */}
            {group.results.map((event) => (
              // Add a unique 'key' prop for each mapped element
              <div
                key={event.id}
                className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8"
              >
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={"/static/images/" + `${event.id}` + ".jpg"}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        TipoEvent:{event.tipoEvent.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Event:
                        {event.event.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                {/* This second card block appears to be a duplicate.
                    If it's intended to be distinct or conditionally rendered, please adjust.
                    For now, it's kept as-is to resolve type errors. */}
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={"/static/images/" + `${event.id}` + ".jpg"}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        TipoEvent:{event.tipoEvent.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Event:
                        {event.event.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Shareqq</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      <div>
        <button
          ref={ref}
          className={
            "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-8"
          }
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </div>
    </Container>
  );
};
