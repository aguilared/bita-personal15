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
import Test from "../../../app/test/page";
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
  return <Test />;
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
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      <div>
        <img src="/static/images/3291.jpg" alt="" loading="lazy"></img>
      </div>
      <div className="col-start-3">
        <img src="/static/images/3292.jpg" alt="" loading="lazy"></img>
      </div>
      <div>
        <img src="/static/images/3293.jpg" alt="" loading="lazy"></img>
      </div>
      <div>
        <img src="/static/images/3294.jpg" alt="" loading="lazy"></img>
      </div>
      <div className="row-start-1 col-start-2 col-span-2">
        <img src="/static/images/3295.jpg" alt="" loading="lazy"></img>
      </div>
    </div>
  );
};
