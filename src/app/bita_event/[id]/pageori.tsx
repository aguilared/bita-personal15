"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";

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

const convertDate1 = (date: any) => {
  const d = dayjs(date).format("D-M-YY h:mm");
  return d;
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventCard />
    </QueryClientProvider>
  );
}

const BitaEventCard = (props: any): JSX.Element => {
  const params = useSearchParams();
  const [bitacora_id, setBitacora_id] = useState("");
  const [bitacoraDate, setBitacoraDate] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tipoevent, setTipoEvent] = useState("");
  const [event, setEvent] = useState("");
  const [intervalMs, setIntervalMs] = useState(1000);

  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "bitacora/event_id/" + params?.get("id");
  console.log("ENDPOINT ", ENDPOINT);

  const { data, isLoading, refetch, status, isError } = useQuery({
    queryKey: ["EventId"],
    queryFn: async () => {
      const data = await axios.get(`${ENDPOINT}`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });

  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("====================================");
      setBitacora_id(data.bitacora_id);
      setBitacoraDate(data.event_date);
      setAuthor(data.bitacora.author.name);
      setTipoEvent(data.tipoEvent.description);
      setEvent(data.event.description);
      setDescription(data.description);
    }
  }, [data, status]);

  if (isLoading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        Error
      </div>
    );
  }
  if (data) {
    console.log("DATA", data);
  }

  return (
    <div className="flex justify-center">
      {" "}
      {isLoading ? (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      ) : null}
      <Card
        sx={{ maxWidth: 745, bgcolor: "neutral.900" }}
        color="neutral"
        invertedColors
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <div>
            <h3 className="text-2xl tahoma font-extrabold tracking-widest text-gray-500">
              Evento de una Bitacora.
            </h3>
          </div>
          <Typography variant="h6" component="div">
            Bitacora: {data.bitacora_id}, BitaEvent: {params?.get("id")}, Fecha:{" "}
            {convertDate1(data.event_date)}
          </Typography>{" "}
          <Typography variant="h6" component="div">
            Author: {data.bitacora.author.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Tipo Event: {data.tipoEvent.description}, Event:{" "}
            {data.event.description}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h2">
            <Interweave content={data.description} />
          </Typography>
        </CardContent>
        <div className="container max-w-4xl m-auto px-4 mt-0">
          <a
            href={"/static/images/" + `${params?.get("id")}` + ".jpg"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src={"/static/images/" + `${params?.get("id")}` + ".jpg"}
              alt={`${params?.get("id")}` + ".jpg"}
              width={1920 / 2}
              height={1280 / 2}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </a>
        </div>
        <div className="container max-w-4xl m-auto px-4 mt-20">
          <a
            href={"/static/images/" + `${params?.get("id")}` + ".jpg"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src={"/static/images/" + `${params?.get("id")}` + "_1.jpg"}
              alt="Image"
              width={1920 / 2}
              height={1280 / 2}
            />
          </a>
        </div>
        <div className="container max-w-4xl m-auto px-4 mt-20">
          <Image
            src={"/static/images/" + `${params?.get("id")}` + "_2.jpg"}
            alt="Image"
            width={1920 / 2}
            height={1280 / 2}
          />
        </div>
      </Card>
    </div>
  );
};
