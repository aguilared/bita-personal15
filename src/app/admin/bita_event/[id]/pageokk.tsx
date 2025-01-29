"use client";
import { useEffect, useState, Suspense } from "react";
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

import Select from "react-select";
import WYSIWYGEditor from "@/styles/WYSIWYG";

// Add the import for useTypeEvents1
import { useTypeEvents1 } from "@/hooks/useTypeEvents1";
import { useEventsId } from "@/hooks/useEventsId";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";

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

interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventCard />
    </QueryClientProvider>
  );
}

const BitaEventCard = (props: any): JSX.Element => {
  const params = useSearchParams();
  console.log("PARAMS", params);
  const [bitacora_id, setBitacora_id] = useState("");
  const [bitacoraDate, setBitacoraDate] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tipoevent, setTipoEvent] = useState("");
  const [event, setEvent] = useState("");
  const [intervalMs, setIntervalMs] = useState(10000);
  const [isImage, setIsImage] = useState(false);
  const { typeEvents1 } = useTypeEvents1(); //
  const [eventId, setEventId] = useState("");
  const { eventsId }: { eventsId: Array<{ value: number; label: string }> } =
    useEventsId(eventId); //

  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "bitacora/event_id/" + params?.get("id");
  console.log("ENDPOINT ", ENDPOINT);

  const { data, isLoading, refetch, status, isError } = useQuery({
    queryKey: ["EventId"],
    queryFn: async () => {
      const data = await axios.get(`${ENDPOINT}`);
      console.log("DATAAAAAAAA", data);
      return data.data;
    },
    refetchInterval: intervalMs,
  });

  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("Data==============================", data);
      setBitacora_id(data.bitacora_id);
      setBitacoraDate(data.event_date);
      setAuthor(data.bitacora.author.name);
      setTipoEvent(data.tipoEvent.description);
      setEvent(data.event.description);
      setDescription(data.description);
      setIsImage(data.image);
    }
  }, [data, status]);

  const editFormDefaultValues: DefaultValues<EditFormValues> = {
    tipo_event_id: 1,
    events_id: 1,
    description: "",
    event_date: "event_date",
    image: false,
  };

  const {
    register: registerEditField,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditFormValues>({
    defaultValues: editFormDefaultValues,
  });

  const handleOnChangeE = (bitacoraKey: any, value: any) => {
    console.log("BitacoraKeyE", bitacoraKey);
    console.log("BitacoraKeyValueE", value);
    setBitacoraDate(value);
  };

  const handleOnChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsImage(!isImage);
    handleOnChangeE("image", !isImage);
  };

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
    createPostMutationE.mutate(parsedata);
  };

  const createPostMutationE = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/bitacora/events/admin/edit", parsedata);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["BitacoraEvents"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      const idd = data.data.id;
      ///router.push(`/bitacoras/bita_events/1?id=${encodeURIComponent(idd)}`);
      // modalEditClose();
    },
  });

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
      <Card sx={{ maxWidth: 745, bgcolor: "neutral.900" }} color="neutral">
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

        <form
          name="edit-form"
          className="w-full max-w-lg  bg-gray-200 shadow-md rounded"
        >
          <Suspense fallback="loading">
            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="description"
              >
                Descripcion evento
              </label>
              <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <WYSIWYGEditor
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    selected={value}
                    rows={14}
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
            </div>
          </Suspense>

          <br></br>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
              onClick={() => console.log("Cancel button clicked")}
            >
              Cancel
            </button>
            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Guardar
            </button>
          </div>
          <input
            type="hidden"
            name="id"
            defaultValue={data.id}
            {...registerEditField("id", {
              required: "Required",
              minLength: 3,
              maxLength: 41,
            })}
          ></input>
          <input
            type="hidden"
            name="bitacora_id"
            defaultValue={data.bitacora_id}
            {...registerEditField("bitacora_id", {
              required: "Required",
              minLength: 3,
              maxLength: 41,
            })}
          ></input>
        </form>
      </Card>
    </div>
  );
};
