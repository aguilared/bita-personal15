"use client";
import { Fragment, useEffect, useState } from "react";
import type { NextPage } from "next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Interweave from "interweave";
import { useInView } from "react-intersection-observer";
import useBitacoras, { Bitacora } from "../../../hooks/useBitacoras";
import Link from "next/link";
import {
  useQuery,
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchClient from "../../../services/fetchClient1";
import Container from "@/components/Container";
import { Button, CardActions } from "@mui/material";

type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: Bitacora[];
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

  /*const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("http://localhost:3000/api/animals").then((res) => res.data),
  }); */

  const fetchPage = async ({ pageParam = 0 }) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated?offset=${pageParam}&limit=9`
    ).then((res) => res.json()); //Should be of type Page
  };

  async function fetchBitacoras({
    pageParam = 0,
    tipo_event_id,
  }: {
    pageParam?: number;
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
    queryFn: ({ pageParam }) => fetchBitacoras(pageParam),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.nextCursor,
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams
    ) => firstPage.prevCursor,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  console.log("DATA", data);
  return (
    <Container>
      <div className="flex-grow text-left text-gray-100 px-3 py-1 m-2 ">
        {" Admin Bitacoras"}
      </div>
      <div className="flex-grow text-right px-3 py-1 m-2 text-gray-100">
        <Button color="success" variant="contained">
          Add
        </Button>
      </div>

      {data &&
        data.pages.map((group, i) => (
          <Fragment key={i}>
            {group?.results.map((event) => (
              <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8">
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
