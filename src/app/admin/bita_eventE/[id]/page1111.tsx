"use client";
import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import dayjs from "dayjs";
import { Interweave } from "interweave";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import ImagenSegura from "@/components/ImagenSegura";
import BitaEventEdit11 from "@/components/Bitacoras/BitaEventEdit11";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import { useTypeEvents1 } from "@/hooks/useTypeEvents1";
import { useEventsId } from "@/hooks/useEventsId";

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

interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

type BitacoraEventData = {
  bitacora_id: string;
  event_date: string;
  events_id: number;
  tipo_event: number;
  bitacora: {
    author: {
      name: string;
    };
  };
  tipoEvent: {
    description: string;
  };
  event: {
    description: string;
  };
  description: string;
  image: boolean;
};

const convertDate1 = (date: string | Date) => {
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

const BitaEventCard = (): React.JSX.Element => {
  const params = useSearchParams();
  const componentRef = useRef(null);
  const dateBitacora = new Date();

  const { typeEvents1 }: { typeEvents1?: { value: number; label: string }[] } =
    useTypeEvents1() || {};

  const [bitacora_id, setBitacoraId] = useState(0);
  const [description, setDescription] = useState("");
  const [tipo_event_id, setTipoEventId] = useState(0);
  const [tipo_event_descri, setTipoEventDescri] = useState("");
  const [eventId, setEventId] = useState("");
  const { eventsId } = useEventsId(eventId); //

  const [events_descri, setEventsDescri] = useState("");
  const [event_date, setEventDate] = useState("");
  const [image, setImage] = useState(false);
  const [intervalMs, setIntervalMs] = useState(1000);
  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "bitacora/event_id/" + params?.get("id");
  console.log("ENDPOINT ", ENDPOINT);

  const eventId = params?.get("id");

  const { data, isLoading, status, isError } = useQuery<BitacoraEventData>({
    queryKey: ["EventId", eventId],
    queryFn: async () => {
      const response = await axios.get(`${ENDPOINT}`);
      return response.data as BitacoraEventData;
    },
    refetchInterval: intervalMs,
    enabled: !!eventId,
  });

  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("Data", data);
      setBitacoraId(data.bitacora_id);
      setEventDate(data.event_date);
      setTipoEventDescri(data.tipoEvent.description);
      setTipoEventId(data.tipo_event_id);
      setEventId(data.events_id);
      setEventsDescri(data.event.description);
      setDescription(data.description);
      setImage(data.image);
    }
  }, [data, status]);

  const editFormDefaultValues: DefaultValues<EditFormValues> = {
    tipo_event_id: tipo_event_id,
    events_id: events_id,
    description: description,
    event_date: event_date,
    image: image,
  };

  const {
    register: registerEditField,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditFormValues>({
    defaultValues: editFormDefaultValues,
  });

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Evento de Bitacora", // Optional
    onBeforePrint: async () => {
      console.log("Antes de obtener el contenido para imprimir...");
      // Aquí podrías poner lógica para esperar a que Animals cargue todo
      // O un simple (pero arriesgado) retardo:
      await new Promise((resolve) => setTimeout(resolve, 20000)); // Espera 20 segundos
    },
    onAfterPrint: () => {
      console.log("Impresión terminada.");
    },
  });

  const onSubmitE: SubmitHandler<EditFormValues> = (data) => {
    const parsedata = {
      id: Number(data.id),
      bitacora_id: Number(data.bitacora_id),
      tipo_event_id: Number(data.tipo_event_id),
      events_id: Number(data.events_id),
      description: data.description,
      event_date: new Date(data.event_date),
      image: new Boolean(data.image),
    };
    console.log("ParseDataEdit", parsedata);
    //createPostMutationE.mutate(parsedata);
  };

  const [bitacoraAdd, setBitacoraAdd] = useState({
    bitacora_id: Number(params?.get("id")),
    tipo_event_id: 1,
    events_id: 1,
    description: "Dolor en ...",
    event_date: convertDate1(dateBitacora),
    image: "true",
  });

  const handleOnChange = (bitacoraKey: string, value: string) => {
    console.log("BitacoraKey1", bitacoraKey);
    console.log("BitacoraKeyValue1", value);
    setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
  };

  const [bitacoraE, setBitacoraE] = useState({
    id: 1,
    bitacora_id: Number(params?.get("id")),
    tipo_event_id: 1,
    events_id: 1,
    description: "Dolor en..",
    event_date: "2022-01-01 11:07",
    image: "false",
  });

  const handleOnChangeE = (bitacoraKey: any, value: any) => {
    console.log("BitacoraKeyE", bitacoraKey);
    console.log("BitacoraKeyValueE", value);
    setBitacoraE({ ...bitacoraE, [bitacoraKey]: value });
  };

  const handleChange = (e: any) => console.log(e);

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
  if (!data) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {" "}
      <div>
        <button
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handlePrint}
        >
          Print Section using Hooks
        </button>
        <div
          ref={componentRef}
          style={{ padding: "20px", border: "1px dashed blue" }}
        >
          <Card sx={{ maxWidth: 745, bgcolor: "neutral.900" }} color="neutral">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div>
                <h3 className="text-2xl tahoma font-extrabold tracking-widest text-gray-500">
                  Evento de una Bitacora.
                </h3>
              </div>
              <Typography variant="h6" component="div">
                Bitacora: {data.bitacora_id}, BitaEvent: {params?.get("id")},
                Fecha: {convertDate1(data.event_date)}
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
                <ImagenSegura
                  src={"/static/images/" + `${params?.get("id")}` + ".jpg"}
                  alt={`${params?.get("id")}` + ".jpg"}
                />
              </a>
            </div>
            <div className="container max-w-4xl m-auto px-4 mt-20">
              <a
                href={"/static/images/" + `${params?.get("id")}` + "_1.jpg"}
                target={"_blank"}
                rel="noreferrer"
              >
                <ImagenSegura
                  src={"/static/images/" + `${params?.get("id")}` + "_1.jpg"}
                  alt="Image1"
                />
              </a>
            </div>
            <div className="container max-w-4xl m-auto px-4 mt-20">
              <ImagenSegura
                src={"/static/images/" + `${params?.get("id")}` + "_2.jpg"}
                alt="Image2"
              />
            </div>
          </Card>{" "}
        </div>
      </div>
      <BitaEventEdit11
        tipo_event_id={tipo_event_id}
        events_id={events_id}
        description={description}
        event_date={event_date}
        eventsId={eventsId}
        image={image}
        onSubmitE={onSubmitE}
        handleOnChangeE={handleOnChangeE}
        handleOnChange={handleOnChange}
        handleChange={handleChange}
      />
    </div>
  );
};
