"use client";
import { useEffect, useState, useContext, useCallback } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PropTypes from "prop-types";
import Select from "react-select";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import Container from "@/components/Container";
import useBitacora from "../../../../../hooks/useBitacora";
import { useTypeEvents1 } from "../../../../../hooks/useTypeEvents1";
import { useEventsId } from "../../../../../hooks/useEventsId";
import getBitacora from "../../../../../services/getBitacora";
import { EventsContext } from "../../../../../context/EventState";
//import Button from "../../../components/ButtonAdd";
import HeaderBitacora from "@/components/HearderBita";
import BitaEventCard from "@/components/Bitacoras/BitaEventCard";
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

type Inputs = {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
};

interface IFormInput {
  bitacora_id: string;
  tipo_event_id: { label: string; value: string };
  events_id: { label: string; value: string };
  description: string;
  event_date: string;
  image: boolean;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEvents />
    </QueryClientProvider>
  );
}

const BitaEvents = (props: any): JSX.Element => {
  const { addBitaEvent, editBitaEvent, removeBitaEvent, events } =
    useContext(EventsContext);
  const [id, setId] = useState(0);
  const router = useRouter();

  //const router = useRouter();
  const params = useSearchParams();
  const ID = Number(params?.get("id"));
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

  const [modalInsertar, setModalInsertar] = useState(false);

  const [modalBitacora, setModalBitacora] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalViewHist, setModalViewHist] = useState(false);

  const toggle = () => setModalInsertar(!modalInsertar);
  const toggleBitacora = () => setModalBitacora(!modalBitacora);
  const toggleEliminar = () => setModalEliminar(!modalEliminar);
  const toggleEditar = () => setModalEditar(!modalEditar);
  const toggleViewHist = () => setModalViewHist(!toggleViewHist);
  const dateBitacora = new Date();
  const convertDate = (date: any) => {
    return dayjs(date).format("DD/MM/YYYY hh:mm");
  };
  const convertDate1 = (date: any) => {
    return dayjs(date).format("YYYY/MM/DD hh:mm");
  };
  const [title, setTitle] = useState("");
  if (params) {
    // Code using query
    console.log("PAramsHay", params);
    console.log("ID", ID);
  }

  const getBitacoraNew = useCallback(async () => {
    await getBitacora(ID).then((resp) => {
      setAuthor(resp.author.name);
      setBitacoraDate(resp.bitacora_date);
      //setTotalEvents(events.length);
      setTotalEvents(resp._count.bita_events);
    });
  }, [ID, setTotalEvents]);

  useEffect(() => {
    // this will set the state before component is mounted
    //setTitle(ID:any);
    if (!isBitacora) {
      console.log("no hay Idbitacora va a cargar a global", ID);
      //loadBitacora(params?.get("id")); //load idto global
    }

    getBitacoraNew();
  }, [isBitacora, loadBitacora, ID, getBitacoraNew]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BitacoraEvents"],
    queryFn: async () => {
      const data = await axios.get(`${DATABASEURL}bitacora/events/admin/${ID}`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });
  console.log("DATA", data);

  const [bitacoraAdd, setBitacoraAdd] = useState({
    bitacora_id: ID,
    tipo_event_id: 1,
    events_id: 1,
    description: "Dolor en ...",
    event_date: convertDate1(dateBitacora),
  });

  const [bitacoraE, setBitacoraE] = useState({
    tipo_event_id: 1,
    description: "Dolor en..",
    event_date: "2022-01-01 11:07",
    image: "false",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const [bitacoraSeleccionada, setBitacoraSeleccionada] = useState({
    id: 1,
    tipo_event_id: 1,
    description: "Dolor en ..",
    event_date: "2022-01-01 11:07",
  });

  // to viewBitacora
  const [bitacoraSeleccionada1, setBitacoraSeleccionada1] = useState({
    id: "",
    authorId: "",
    bitacoraDate: "",
  });
  // to viewBitaEvent
  const seleccionarBitacora1 = (elemento: any, caso: any) => {
    setBitacoraSeleccionada1(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalViewHist(true);
  };

  const [bitacoraSeleccionada2, setBitacoraSeleccionada2] = useState({
    id: "",
    events_id: "",
    tipo_event_id: "",
    bitacora_id: "",
    description: "",
    event_date: "",
    image: "",
  });

  const seleccionarBitacora = (elemento: any, caso: any) => {
    setBitacoraSeleccionada(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };
  // to editar
  const seleccionarBitacora2 = (elemento: any, caso: any) => {
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
    caso === "Editar" ? setModalEditar(true) : setModalViewHist(true);
  };

  const eliminar = () => {
    removeBitaEvent(bitacoraSeleccionada.id);
    toast.success("Bita-Event Deleted successfully");
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setModalInsertar(true);
  };

  const abrirModalBitacora = () => {
    setModalBitacora(true);
  };

  const handleOnChange1 = () => {
    setIsImage(!isImage);
  };
  const handleOnChange = (bitacoraKey, value) => {
    console.log("BitacoraKey1", bitacoraKey);
    console.log("BitacoraKeyValue1", value);
    setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
  };

  const handleOnChangeE = (bitacoraKey, value) => {
    console.log("BitacoraKeyE", bitacoraKey);
    console.log("BitacoraKeyValueE", value);
    setBitacoraE({ ...bitacoraE, [bitacoraKey]: value });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const parsedata = {
      bitacora_id: Number(data.bitacora_id),
      tipo_event_id: Number(data.tipo_event_id),
      events_id: Number(data.events_id),
      description: data.description,
      event_date: new Date(data.event_date),
      image: isImage,
    };
    console.log("ParseData", parsedata);
    createPostMutation.mutate(parsedata);

    // createBitacorae(bitacora);
    //addBitaEvent(parsedata);
    //notifyCreate();
    //setModalInsertar(false);
    //toast.success("Bita-Event created successfully");
  };
  const createPostMutation = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/bitacora/events/create", parsedata);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["BitacoraEvents"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      let idd = data.data.id;
      ///router.push(`/bitacoras/bita_events/1?id=${encodeURIComponent(idd)}`);
      modalCreateClose();
    },
  });

  const onSubmitE = useCallback(() => {
    const data = {
      id: bitacoraE.id,
      bitacora_id: bitacoraE.bitacora_id,
      tipo_event_id: parseInt(bitacoraAdd.tipo_event_id),
      events_id: parseInt(bitacoraAdd.events_id),
      description: bitacoraE.description,
      event_date: new Date(bitacoraE.event_date),
      image: bitacoraE.image,
    };
    console.log("Data a Editar", data);
    editBitaEvent(data);

    setModalEditar(false);
  });

  const subscribeImage = register("image");
  const handleChange = (e) => console.log(e);

  return (
    <Container>
      <div className="shadow-lg bg-gray-100">
        <div className="bg-white shadow-lg rounded">
          <HeaderBitacora
            onClick={() => abrirModalInsertar()}
            bitacoraid={ID}
            totalEvents={events.length}
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
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className="text-gray-500 dark:text-white border text-left px-2 py-4">
                  <div>
                    <Button onClick={() => abrirModalInsertar()} />
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
                          <Image
                            onClick={() =>
                              seleccionarBitacora1(event, "Mostrar")
                            }
                            src={"/static/images/" + `${event.id}` + ".jpg"}
                            alt=""
                            width="60"
                            height="50"
                          />
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
                        <>
                          <td className="border px-2 py-2  text-gray-500 dark:text-white">
                            <input
                              type="checkbox"
                              checked
                              placeholder="Image"
                              className="mx-3"
                            />
                          </td>
                        </>
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
                          href={`/bitacora/bita_event/${encodeURIComponent(
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
                              <title>Detailed</title>
                              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                            </svg>
                          </button>
                        </Link>
                      </td>

                      <td className="border px-2 py-2  text-gray-500 dark:text-white">
                        <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                          <button
                            onClick={() =>
                              seleccionarBitacora(event, "Eliminar")
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
                              seleccionarBitacora2(event, "Editar")
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
        <Box sx={{ ...style, width: 600 }}>
          <form
            className="w-full max-w-lg  bg-gray-200 shadow-md rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Evento A Bitacora: {ID}
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
                      value={typeEvents1.find((c) => c.value === value)}
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
                defaultValue={bitacoraAdd.event_date}
                {...register("event_date", {
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
                id="name"
                name="name"
                value="Image"
                checked={isImage}
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
                defaultValue={ID}
                {...register("bitacora_id", {
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
    </Container>
  );
};
