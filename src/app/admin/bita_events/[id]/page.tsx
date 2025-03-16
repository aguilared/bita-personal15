"use client";
import { useEffect, useState, useContext, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import Select from "react-select";
import { Box, debounce, IconButton, Modal, Typography } from "@mui/material";
import dayjs from "dayjs";
import Container from "@/components/Container";
import useBitacora from "@/hooks/useBitacora";
import { useTypeEvents1 } from "@/hooks/useTypeEvents1";
import { useEventsId } from "@/hooks/useEventsId";
import getBitacora from "@/services/getBitacora";
import { EventsContext } from "@/context/EventState";
import HeaderBitacora from "@/components/HearderBita";
import BitaEventEdit from "@/components/Bitacoras/BitaEventEdit";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import WYSIWYGEditor from "@/styles/WYSIWYG";
import Link from "next/link";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

const DATABASEURL = process.env.NEXT_PUBLIC_API_URL;
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  zIndex: 100,
  p: 4,
  pt: 2,
  px: 4,
  pb: 3,
  py: 4,
  "@media(max-height: 890px)": {
    top: "0",
    transform: "translate(-50%, 0%)",
  },
};

interface CreateFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

const dateBitacora = new Date();
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const createFormDefaultValues: DefaultValues<CreateFormValues> = {
  tipo_event_id: 0,
  events_id: 0,
  description: "",
  event_date: convertDate1(dateBitacora),
  image: true,
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEvents />
    </QueryClientProvider>
  );
}

const BitaEvents = (props: any): JSX.Element => {
  const { events } = useContext(EventsContext);
  const dateBitacora = new Date();
  const convertDate = (date: any) => {
    return dayjs(date).format("DD/MM/YYYY hh:mm");
  };

  const params = useSearchParams();
  const ID = params?.get("id");
  const [intervalMs, setIntervalMs] = useState(1000);

  console.log("PARAMS", params);
  console.log("ID", ID);

  const { isBitacora, loadBitacora, bitacora } = useBitacora(); //to Global
  const { typeEvents1 } = useTypeEvents1(); //
  const [eventId, setEventId] = useState("");
  const { eventsId } = useEventsId(eventId); //

  const [isImage, setIsImage] = useState(false);

  const [author, setAuthor] = useState("");
  const [bitacoraDate, setBitacoraDate] = useState("");
  const [totalEvents, setTotalEvents] = useState(0);

  const [modalCreate, setModalCreate] = useState(false);
  const modalCreateOpen = () => setModalCreate(true);
  const modalCreateClose = () => setModalCreate(false);

  const [modalEdit, setModalEdit] = useState(false);
  const modalEditOpen = () => setModalEdit(true);
  const modalEditClose = () => setModalEdit(false);

  const [modalDelete, setModalDelete] = useState(false);
  const modalDeleteOpen = () => setModalDelete(true);
  const modalDeleteClose = () => setModalDelete(false);

  const [modalViewHist, setModalViewHist] = useState(false);
  const toggleViewHist = () => setModalViewHist(!toggleViewHist);

  useEffect(() => {
    // this will set the state before component is mounted
    //setTitle(ID:any);
    if (!isBitacora) {
      console.log("no hay Idbitacora va a cargar a global", params?.get("id"));
      //loadBitacora(params?.get("id")); //load idto global
    }

    getBitacoraNew();
  }, [params, isBitacora, loadBitacora, ID]);

  const getBitacoraNew = useCallback(async () => {
    await getBitacora(params?.get("id")).then((resp) => {
      setAuthor(resp.author.name);
      setBitacoraDate(resp.bitacora_date);
      //setTotalEvents(events.length);
      setTotalEvents(resp._count.bita_events);
    });
  }, [setTotalEvents, events, bitacora]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BitacoraEvents"],
    queryFn: async () => {
      const data = await axios.get(`${DATABASEURL}bitacora/events/admin/${ID}`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });
  console.log("DATAbitaEvens", data);

  const {
    register: registerCreateField,
    handleSubmit: handleCreateFormSubmit,
    control,
    formState: { errors },
  } = useForm<CreateFormValues>({
    defaultValues: createFormDefaultValues,
  });

  const [bitacoraSeleccionada, setBitacoraSeleccionada] = useState({
    id: 1,
    tipo_event_id: 1,
    description: "Dolor en ..",
    event_date: "2022-01-01 11:07",
  });

  const [bitacoraAdd, setBitacoraAdd] = useState({
    bitacora_id: Number(params?.get("id")),
    tipo_event_id: 1,
    events_id: 1,
    description: "Dolor en ...",
    event_date: convertDate1(dateBitacora),
    image: "true",
  });

  const [bitacoraE, setBitacoraE] = useState({
    id: 1,
    bitacora_id: Number(params?.get("id")),
    tipo_event_id: 1,
    events_id: 1,
    description: "Dolor en..",
    event_date: "2022-01-01 11:07",
    image: "false",
  });

  const handleOnChange1 = () => {
    setIsImage(!isImage);
  };

  const handleOnChange = (bitacoraKey: string, value: string) => {
    console.log("BitacoraKey1", bitacoraKey);
    console.log("BitacoraKeyValue1", value);
    setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
  };

  const onSubmit: SubmitHandler<CreateFormValues> = (data) => {
    const parsedata = {
      bitacora_id: Number(data.bitacora_id),
      tipo_event_id: Number(bitacoraAdd.tipo_event_id),
      events_id: Number(bitacoraAdd.events_id),
      description: data.description,
      event_date: new Date(data.event_date),
      image: data.image,
    };
    console.log("ParseData", parsedata);
    debounce(() => createPostMutation.mutate(parsedata), 500)();
  };
  const createPostMutation = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/bitacora/events/admin/create", parsedata);
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["BitacoraEvents"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      modalCreateClose();
    },
  });

  // to editar
  const [bitacoraSeleccionada2, setBitacoraSeleccionada2] = useState({
    id: "",
    events_id: "",
    tipo_event_id: "",
    bitacora_id: "",
    description: "",
    event_date: "",
    image: "",
  });

  const handleOnChangeE = (bitacoraKey: any, value: any) => {
    console.log("BitacoraKeyE", bitacoraKey);
    console.log("BitacoraKeyValueE", value);
    setBitacoraE({ ...bitacoraE, [bitacoraKey]: value });
  };
  const seleccionarBitacoraE = (elemento: any, caso: any) => {
    console.log("ElementoEditar", elemento, caso);
    setBitacoraSeleccionada2(elemento);
    setBitacoraE({
      ...bitacoraE,
      id: elemento.id,
      bitacora_id: elemento.bitacora_id,
      tipo_event_id: elemento.tipo_event_id,
      events_id: elemento.tipo_event_id,
      description: elemento.description,
      event_date: elemento.event_date,
      image: elemento.image,
    });
    caso === "Editar" ? modalEditOpen() : setModalDelete(false);
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
      modalEditClose();
    },
  });

  //Delete
  const seleccionarBitacoraD = (elemento: any, caso: any) => {
    console.log("A borrar", elemento);
    setBitacoraSeleccionada(elemento);
    caso === "Delete" ? modalDeleteOpen() : setModalDelete(false);
  };

  const eliminar = async () => {
    try {
      const result = await fetch(
        "/api/bitacora/events/delete/" + bitacoraSeleccionada.id
      );

      refetch();
      toast.custom((t) => (
        <div
          className={`bg-white px-6 py-4 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          Deleted successfully 👋
        </div>
      ));

      setModalDelete(false);
    } catch (error) {
      toast.custom((t) => (
        <div
          className={`bg-white px-6 py-4 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          Not Deleted successfully 👋
        </div>
      ));
      console.log(error);
    }
  };

  // to viewBitacora
  const [bitacoraSeleccionada1, setBitacoraSeleccionada1] = useState({
    id: "",
    authorId: "",
    bitacoraDate: "",
  });
  // to viewBitaEvent
  const seleccionarBitacora1 = (elemento: any, caso: any) => {
    setBitacoraSeleccionada1(elemento);
    caso === "Editar" ? setModalEdit(true) : setModalViewHist(true);
  };

  const subscribeImage = registerCreateField("image");
  const handleChange = (e: any) => console.log(e);

  return (
    <Container>
      <div className="shadow-lg bg-gray-100">
        <div className="bg-white shadow-lg rounded">
          <HeaderBitacora
            bitacoraid={params?.get("id")}
            totalEvents={data?.length}
            author={author}
            bitacoraDate={bitacoraDate}
          />
          <div className="w-full h-0.5 bg-indigo-500 dark:bg-slate-800"></div>
          {isLoading ? (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
            </div>
          ) : null}
          <table className="lg:table-auto shadow-lg  bg-slate-100 dark:bg-slate-800">
            <thead>
              <tr>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Item/Id
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Tipo Evento
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Evento
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Description Event
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Date Event
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  Image
                </th>
                <th className=" text-gray-500 dark:text-white border text-left px-2 py-2">
                  <div>
                    <button
                      onClick={modalCreateOpen}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-0 mr-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#434343"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>

            {data && data?.length ? (
              <>
                {data.map((event: any, key: any) => (
                  <tbody key={key}>
                    <tr key={key}>
                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        {key + 1}/{event.id}
                        <IconButton
                          onClick={() => seleccionarBitacora1(event, "Mostrar")}
                        ></IconButton>
                        {event.image && (
                          <a
                            href={"/static/images/" + `${event.id}` + ".jpg"}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <Image
                              onClick={() =>
                                seleccionarBitacora1(event, "Mostrar")
                              }
                              src={"/static/images/" + `${event.id}` + ".jpg"}
                              alt=""
                              width="60"
                              height="50"
                            />
                          </a>
                        )}
                      </td>
                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        {event.tipo_event_id}
                      </td>
                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        {event.events_id}
                      </td>
                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        {event.description}
                      </td>
                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        {convertDate(event.event_date)}
                      </td>
                      {event.image! ? (
                        <td className="border px-2 py-2  text-gray-500 dark:text-white">
                          <input
                            type="checkbox"
                            checked
                            placeholder="Image"
                            className="mx-3"
                          />
                        </td>
                      ) : (
                        <td className="border px-2 py-2  text-gray-500 dark:text-white">
                          <input
                            type="checkbox"
                            placeholder="Image"
                            className="mx-3"
                          />
                        </td>
                      )}

                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        <Link
                          href={`/bita_event/1?id=${encodeURIComponent(
                            event.id
                          )}`}
                          passHref
                          legacyBehavior
                        >
                          <a target="_blank">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-1 py-1 px-1 rounded-full inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                              >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                              </svg>
                            </button>
                          </a>
                        </Link>
                      </td>

                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                          <button
                            onClick={() =>
                              seleccionarBitacoraD(event, "Delete")
                            }
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-0 mr-1 rounded-full inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </button>
                        </div>
                        <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                          <button
                            onClick={() =>
                              seleccionarBitacoraE(event, "Editar")
                            }
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-0 mr-1 rounded-full inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-edit"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </button>
                        </div>
                        <div className="w-1/5 inline-block text-gray-700 text-right px-1 py-1 m-0">
                          <a
                            href={`/admin/bita_event/bitaevent?id=${encodeURIComponent(
                              event.id
                            )}`}
                            passHref
                            legacyBehavior
                          >
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-1 py-1 px-1 rounded-full inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </>
            ) : (
              <thead>
                <tr>
                  <td className="text-center bg-gray-100 text-gray-500 py-5">
                    No data eventss
                  </td>
                </tr>
              </thead>
            )}
          </table>
        </div>
      </div>
      <Modal
        sx={{ overflowY: "scroll" }}
        disableScrollLock={false}
        open={modalCreate}
        onClose={modalCreateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 560 }}>
          <form
            id="create-form"
            className="w-full max-w-lg  bg-gray-200 shadow-md rounded"
            onSubmit={handleCreateFormSubmit(onSubmit)}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Evento A Bitacora {params?.get("id")}
            </Typography>
            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="tipo_event_id"
              >
                Tipos Events
              </label>
              <Controller
                name="tipo_event_id"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value, name, ref } }) => {
                  return (
                    <Select
                      inputRef={ref}
                      defaultValue={{ label: "Seleccione..", value: 0 }}
                      options={typeEvents1}
                      value={typeEvents1.find(
                        (c: { value: number }) => c.value === value
                      )}
                      name={name}
                      onChange={(val) => {
                        onChange(val.value);
                        setEventId(val.value);
                        handleOnChange("tipo_event_id", val.value);
                      }}
                    />
                  );
                }}
              />
              {errors.tipo_event_id && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
            </div>

            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="events_id"
              >
                Event
              </label>
              <Controller
                name="events_id"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value, name, ref } }) => {
                  return (
                    <Select
                      inputRef={ref}
                      options={eventsId}
                      value={eventsId.find((c) => c.value === value)}
                      name={name}
                      onChange={(val) => {
                        onChange(val.value);
                        handleOnChange("events_id", val.value);
                      }}
                    />
                  );
                }}
              />
              {errors.events_id && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
            </div>

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
                    rows={144}
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
            </div>

            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="event_date"
              >
                Fecha Evento
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-2"
                type="text"
                placeholder="Date Event"
                name="event_date"
                {...registerCreateField("event_date", {
                  required: "Required",
                  minLength: 3,
                  maxLength: 41,
                })}
                onChange={(e) => handleOnChange("event_date", e.target.value)}
              />
              {errors.event_date && (
                <span className="text-xs text-red-700">
                  {errors.event_date.message}
                </span>
              )}
            </div>

            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <input
                type="checkbox"
                id="image"
                name="image"
                checked={isImage}
                {...registerCreateField("image", {
                  required: "Required",
                })}
                onChange={handleOnChange1}
              />
              Image
            </div>

            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              Above checkbox is {isImage ? "checked" : "unchecked"}.
            </div>

            <div className="invisible md:invisible md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                type="number"
                name="bitacora_id"
                defaultValue={params?.get("id")}
                {...registerCreateField("bitacora_id", {
                  required: "Required",
                  minLength: 1,
                  maxLength: 9,
                })}
                onChange={(e) => handleOnChange("bitacora_id", e.target.value)}
              />
              {errors.id && errors.bitacora_id}
            </div>
            <br></br>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <button
                className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
                onClick={() => modalCreateClose()}
              >
                Cancel
              </button>
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                Guardar
              </button>
            </div>
          </form>
        </Box>
      </Modal>

      <Modal
        sx={{ overflowY: "scroll" }}
        disableScrollLock={false}
        open={modalEdit}
        onClose={modalEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit BitaEvent {bitacoraSeleccionada2.id}
            <button
              className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-9"
              onClick={() => modalEditClose()}
            >
              <IoMdClose size={18} />
            </button>
          </Typography>
          <BitaEventEdit
            bitacoraSeleccionada2={bitacoraSeleccionada2}
            seleccionarBitacora2={seleccionarBitacoraE}
            onSubmitE={onSubmitE}
            handleOnChangeE={handleOnChangeE}
            handleOnChange={handleOnChange}
            eventId={eventId}
            typeEvents1={typeEvents1}
            eventsId={eventsId}
            setEventId={setEventId}
            subscribeImage={subscribeImage}
            handleChange={handleChange}
            onClose={modalEditClose}
          />
        </Box>
      </Modal>

      <Modal
        sx={{ overflowY: "scroll" }}
        disableScrollLock={false}
        open={modalDelete}
        onClose={modalDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Estás Seguro que deseas eliminar la Bitacora ID:{" "}
            {bitacoraSeleccionada.id}
          </Typography>
          <Typography>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <button
                className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
                onClick={() => modalDeleteClose()}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                onClick={() => eliminar()}
              >
                Delete
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};
