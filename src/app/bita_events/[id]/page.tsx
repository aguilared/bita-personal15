"use client";
import { Fragment, useEffect } from "react";
import type { NextPage } from "next";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import fetchClient from "../../../services/fetchClient1";

type Bitacora = {
  id: number;
  bitacora_id: number;
  bitacora_date: string;
  event_date: string;
  tipoEvent: {
    description: string;
  };
  event: {
    description: string;
  };
  description: string;
  image?: string;
};

type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: Bitacora[];
};

const convertDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm");
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
  const { inView } = useInView();
  const params = useSearchParams();

  async function fetchBitacoras({
    pageParam = 0,
    bitacora_id = Number(params?.get("id")),
  }: {
    pageParam?: number;
    bitacora_id?: number;
  }): Promise<ResultData> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}bitacora/events/bita_events_paginated_id?offset=${pageParam}&limit=9&bitacora_id=${bitacora_id}`;

    const request = await fetchClient.get<ResultData>(url);
    console.log("Requestttt", request);
    return request.data;
  }

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
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
        <h1 className="text-gray-900 dark:text-white text-2xl font-bold">
          Events de Bitacora {params?.get("id")}.
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
                  component="div"
                  sx={{ maxWidth: 545, bgcolor: "neutral.900" }}
                  color="neutral"
                >
                  {event.image ? (
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
                      className="bg-blue-200 rounded underline hover:underline hover:underline-offset-4"
                      href={`/bita_event/1?id=${encodeURIComponent(
                        event.id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      BitacoraID: {event.bitacora_id}
                      {",  "}
                    </a>
                    {convertDate(event.bitacora_date)}
                  </Typography>
                  <Typography variant="body1">
                    <a
                      className="bg-blue-200 rounded underline hover:underline hover:underline-offset-4"
                      href={`/bita_event/1?id=${encodeURIComponent(
                        event.id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      EventID: {event.id}
                      {",  "}
                    </a>
                    {convertDate(event.event_date)}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {"Tipo/Event: " +
                      `${event.tipoEvent?.description}` +
                      ", " +
                      `${event.event?.description}`}
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
    </div>
  );
};
