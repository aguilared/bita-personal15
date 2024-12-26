import { useState, BaseSyntheticEvent, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import {
  useQuery,
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import dayjs from "dayjs";
import Interweave from "interweave";
import axios from "axios";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTypeEvents1 } from "../../hooks/useTypeEvents1";
import { Bitacora } from "@/hooks/useBitacoras";
import fetchClient from "../../services/fetchClient1";

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

type Inputs = {
  alive: string;
  birthdate: string;
  clase_id: number;
  hierro: string;
  id: number;
  info: string;
  mother: string;
  name: string;
  tipo_event_id: number;
  tipopart: string;
  updated_at: string;
};

type ResultData = {
  count: number;
  next: number;
  previous: number;
  results: Bitacora[];
};

const convertDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY");
};
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const SearchTipoEvent: NextPage = () => {
  const { typeEvents1 } = useTypeEvents1();
  const [ownerId, setOwnerId] = useState("");
  const [tipo_event_id, setTipo_event_id] = useState(1);
  const [bitacoraSearch, setBitacoraSearch] = useState();
  const [datafilter, setDatafilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const ENDPOINT = process.env.NEXT_PUBLIC_API_URL + "bitacora/tipo_event/";

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

  const {
    status,
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["listbitaEvent"],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await fetchBitacoras({ pageParam });
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage?.next,
    getPreviousPageParam: (firstPage, allPages) => firstPage?.previous,
  });

  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("====================================");
      console.log("DATA1", data);
      setDatafilter(data);
    }
  }, [data, status]);

  if (isLoading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }

  const handleOnChange = (ownerKey, value) => {
    console.log("valueOnChangeAdd", value);
    setBitacoraSearch(value);
    console.log("BitacoraSearch", bitacoraSearch);

    //return setDatafilter(newData);
  };

  const searchs = () => {
    console.log("BitacoraSearchhhhhh", bitacoraSearch);
    setLoading(true);
    if (loading) {
      return (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      );
    }

    const value = bitacoraSearch;
    console.log("ValueSearchvvvvv", value);
    if (!value || value === "") {
      return setDatafilter(data); //retorna a la data original
    }

    const getData = async () => {
      const result = await axios.get(`${ENDPOINT}${value}`);
      const resp = result.data;
      console.log("DATA44", resp);
      setDatafilter(resp);
      setLoading(false);
    };
    getData();
  };

  return (
    <Container>
      <div className="container mx-auto px-20">
        <h1 className="text-gray-600 text-5xl font-bold">
          Query Bitacoras typeEvent.
        </h1>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 p-2 text-center bg-green-400">
          {" "}
          <Controller
            name="tipo_event_id"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, name, ref } }) => {
              //console.log("CurrentSelection", currentSelection);
              const handleSelectChange = (
                selectedOption: tipo_event_id | null
              ) => {
                onChange(selectedOption?.value);
              };
              return (
                <Select
                  inputRef={ref}
                  defaultValue={{ label: "Seleccione..", value: 0 }}
                  options={typeEvents1}
                  name={name}
                  onChange={(val) => {
                    onChange(val.value);
                    setTipo_event_id(val.value);
                    handleOnChange("tipo_event_id", val.value);
                  }}
                  onBlur={() => searchs()}
                />
              );
            }}
          />
        </div>
        <div className="w-1/2 p-2 text-left bg-green-500">
          <button
            type="submit"
            onClick={() => searchs()}
            className="absolute w-10 h-10 rounded-full inline p-2 shadow"
          >
            {" "}
            <svg
              className="text-gray-100 w-6 h-6 fill-current"
              viewBox="0 0 56.966 56.966"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {datafilter ? (
          datafilter.map((event: any, key: any) => (
            <div className="flex flex-col rounded-xl shadow-lg " key={key}>
              <Card
                key={key}
                sx={{
                  display: "flex",
                  width: ["70%", "70%", "20.33%"],
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  subheader={
                    "TipoEvent: " +
                    `${event.tipo_event_id} ` +
                    `${event.tipoEvent.description}` +
                    ", Event: " +
                    `${event.event.id} ${event.event.description} ` +
                    `${convertDate(event.event_date)}`
                  }
                  title={
                    "ID:" + `${event.id}` + " " + convertDate(event.event_date)
                  }
                />
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
                    {convertDate(event.event_date)}
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
                  >
                    <Interweave content={event.description} />
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchTipoEvent />
    </QueryClientProvider>
  );
}
