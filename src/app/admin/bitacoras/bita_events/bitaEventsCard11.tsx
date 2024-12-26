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
import { Button } from "@mui/material";

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
              <Card
                key={i}
                sx={{
                  display: "flex",
                  width: ["70%", "70%", "20.33%"],
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  subheader={
                    "TipoEvent: " +
                    `${event.tipoEvent.description}` +
                    ", Event: " +
                    `${event.event.description}`
                  }
                  title={
                    "ID:" +
                    `${event.id}` +
                    " " +
                    convertDate(event.bitacora.bitacora_date)
                  }
                />
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="div"
                ></Typography>
                {event.image! ? (
                  <a
                    href={"/static/images/" + `${event.id}` + ".jpg"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 30 }}
                      image={"/static/images/" + `${event.id}` + ".jpg"}
                      alt="Live from space album cover"
                      onClick={() => console.log("CardActionArea clicked")}
                    />
                  </a>
                ) : (
                  <></>
                )}
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h6" component="div">
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

                  <Typography>
                    BitacoraID:
                    <Link
                      href={`/bitacora/view/${encodeURIComponent(
                        event.bitacora_id
                      )}`}
                      passHref
                    >
                      {event.bitacora_id}
                    </Link>
                  </Typography>

                  <Typography variant="h6" component="div">
                    <a
                      href={`/bitacora/bita_event/${encodeURIComponent(
                        event.id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      BitaEventID: {event.id}
                      {",  "}
                    </a>
                    {convertDate(event.event_date)}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="div"
                  ></Typography>
                </CardContent>
              </Card>
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
