"use client";
import {
  useEffect,
  useState,
  useContext,
  useCallback,
  BaseSyntheticEvent,
} from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import dayjs from "dayjs";
import Container from "@/components/Container";
import { useTypeEvents } from "../../../../hooks/useTypeEvents";
import { useTypeEvents1 } from "../../../../hooks/useTypeEvents1";
import { useEventsId } from "../../../../hooks/useEventsId";
import getTypeEventsId from "../../../../services/getTypeEventsId";
import Button from "@/components/ButtonAdd";
import HeaderEventss from "@/components/HearderEventss";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { Events } from "../../../../interfaces/interfaces";

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
  tipo_event_id: number;
  description: string;
};

interface IFormInput {
  tipo_event_id: number;
  description: string;
}

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

const TipoEventsEventss = (props: any): JSX.Element => {
  //const apiUrl = "http://localhost:3000/api/eventss/";
  const params = useSearchParams();
  const ID = params?.get("id");
  const [intervalMs, setIntervalMs] = useState(1000);

  const { typeEvents } = useTypeEvents(); //
  const { typeEvents1 } = useTypeEvents1(); //
  const [eventId, setEventId] = useState("");
  const { eventsId } = useEventsId(eventId); //
  const { bitacoraSelected, imageObj } = props;

  const [tipoEvent, setTipoEvent] = useState("");
  const [bitacoraDate, setBitacoraDate] = useState("");
  const [totalEvents, setTotalEvents] = useState([]);

  useEffect(() => {
    getTypeEventsId(params?.get("id")).then((resp) => {
      setTipoEvent(resp.description);
      setBitacoraDate(resp.updated_at);
      //setTotalEvents(resp._count.events);
    });
  }, [params, setTipoEvent, setBitacoraDate, setTotalEvents]);

  // const ENDPOINT = "http://localhost:3000/api/eventss/";
  const ENDPOINT = process.env.NEXT_PUBLIC_API_URL + "events/";

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Eventsss"],
    queryFn: async () => {
      const data = await axios.get(`${ENDPOINT}${params?.get("id")}`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });
  console.log("DATA11", data);

  const [modalCreate, setModalCreate] = useState(false);
  const modalCreateOpen = () => setModalCreate(true);
  const modalCreateClose = () => setModalCreate(false);

  const [modalInsertar, setModalInsertar] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);
  const modalEditOpen = () => setModalEdit(true);
  const modalEditClose = () => setModalEdit(false);

  const [modalDelete, setModalDelete] = useState(false);
  const modalDeleteOpen = () => setModalDelete(true);
  const modalDeleteClose = () => setModalDelete(false);

  const [modalEditar, setModalEditar] = useState(false);
  const toggle = () => setModalInsertar(!modalInsertar);
  const toggleEditar = () => setModalEditar(!modalEditar);
  const dateBitacora = new Date();

  const [eventSeleccionada, setEventSeleccionada] = useState<Events | null>(
    null
  );

  const convertDate = (date: any) => {
    return dayjs(date).format("DD/MM/YYYY hh:mm");
  };
  const convertDate1 = (date: any) => {
    return dayjs(date).format("YYYY/MM/DD hh:mm");
  };

  const [bitacoraE, setBitacoraE] = useState({
    id: "",
    tipo_event_id: "",
    description: "",
  });

  const [bitacoraAdd, setBitacoraAdd] = useState({
    tipo_event_id: Number(params?.get("id")),
    description: "Dolor en ...",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  // console.log({ errors });

  const [bitacoraSeleccionada, setBitacoraSeleccionada] = useState({
    id: "",
    description: "",
    updated_at: "",
  });
  // to viewBitacora
  const [bitacoraSeleccionada1, setBitacoraSeleccionada1] = useState({
    id: "",
    authorId: "",
    bitacoraDate: "",
  });
  const [bitacoraSeleccionada2, setBitacoraSeleccionada2] = useState({
    id: "",
    tipo_event_id: "",
    description: "",
  });

  //eliminar?
  const seleccionarEvent = (elemento: Events, caso: string) => {
    setEventSeleccionada(elemento);
    console.log("ELEMENTO A Eliminar o Editar", elemento);
    console.log("CASO Eliminar o Editar", caso);
    caso === "Delete" ? setModalDelete(true) : setModalEdit(false);
  };

  const seleccionarBitacora = (elemento: any, caso: any) => {
    setBitacoraSeleccionada(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalDelete(false);
  };
  // to viewBitaEvent
  const seleccionarBitacora1 = (elemento: any, caso: any) => {
    setBitacoraSeleccionada1(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalViewHist(true);
  };
  // to editar
  const seleccionarBitacora2 = (elemento: any, caso: any) => {
    setBitacoraSeleccionada2(elemento);
    setBitacoraE({
      ...bitacoraE,
      id: elemento.id,
      tipo_event_id: elemento.tipo_event_id,
      description: elemento.description,
    });
    caso === "Editar" ? setModalEditar(true) : setModalViewHist(true);
  };

  const abrirModalInsertar = () => {
    setModalInsertar(true);
  };

  const handleOnChange = (bitacoraKey, value) => {
    //console.log("valueOnChangeIngresar", value);
    setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
    console.log("bitacoraOnchage", bitacoraAdd);
  };
  const handleOnChangeE = (bitacoraKey, value) => {
    setBitacoraE({ ...bitacoraE, [bitacoraKey]: value });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const parsedata = {
      tipo_event_id: Number(data.tipo_event_id),
      description: data.description,
    };
    createPostMutation.mutate(parsedata);
  };
  const createPostMutation = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/events/create", parsedata);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["Bitacorass"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      let idd = data.data.id;
      //router.push(`/bitacoras/bita_events/1?id=${encodeURIComponent(idd)}`);
      //router.push(`/admin/bita_events/1?id=${encodeURIComponent(idd)}`);
      modalCreateClose();
    },
  });

  const onSubmitE = async (e: BaseSyntheticEvent) => {
    console.log("FormData", bitacoraE);
    try {
      const result = await fetch("/api/eventss/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bitacoraE),
      });
      refetch();
      setModalEditar(false);
    } catch (error) {
      console.log("Error Edit", error);
    }
  };
  const eliminar = async (e: BaseSyntheticEvent) => {
    try {
      console.log("Borra Id", eventSeleccionada?.id);
      const result = await fetch("/api/events/delete/" + eventSeleccionada?.id);
      // await removeBitacora(bitacoraSeleccionada.id);
      refetch();
      setModalDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="flex rounded items-center justify-between flex-wrap bg-gray-100 p-2">
        {isLoading ? (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        ) : null}
        {data ? (
          <div className="bg-white shadow-lg ">
            <HeaderEventss
              onClick={() => abrirModalInsertar()}
              bitacoraid={params?.get("id")}
              totalEvents={data.length}
              tipoEvent={tipoEvent}
              bitacoraDate={bitacoraDate}
            />

            <div className="w-full h-0.5 bg-indigo-500"></div>

            <div className="flex justify-center p-4">
              <div className="border-b border-gray-200 shadow">
                <table className="shadow-lg bg-white table-auto">
                  <thead>
                    <tr>
                      <th className="bg-blue-100 border text-left px-8 py-4">
                        Renglon/Id
                      </th>
                      <th className="bg-blue-100 border text-left px-8 py-4">
                        Tipo Evento
                      </th>
                      <th className="bg-blue-100 border text-left px-8 py-4">
                        Description Event
                      </th>
                      <th className="bg-blue-100 border text-left px-8 py-4">
                        Date Event
                      </th>
                      <th className="bg-blue-100 border text-left px-8 py-4">
                        <div>
                          <Button onClick={modalCreateOpen} />
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <>
                    {data.map((event: any, key: any) => (
                      <>
                        <tbody key={key}>
                          <tr key={key}>
                            <td className="border px-8 py-4">
                              {key + 1} {event.id}
                            </td>
                            <td className="border px-8 py-4">
                              {event.tipo_event_id}
                            </td>
                            <td className="border px-8 py-4">
                              {event.description}
                            </td>
                            <td className="border px-8 py-4">
                              {convertDate(event.updated_at)}
                            </td>
                            <td className="border px-8 py-4">
                              <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                                <button
                                  onClick={() =>
                                    seleccionarBitacora(event, "Eliminar")
                                  }
                                  onClick={() =>
                                    seleccionarEvent(event, "Delete")
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
                      </>
                    ))}
                  </>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <thead>
            <tr>
              <td className="text-center bg-gray-100 text-gray-500 py-5">
                No data eventss
              </td>
            </tr>
          </thead>
        )}
      </div>

      <Modal
        sx={{ overflowY: "scroll" }}
        disableScrollLock={false}
        open={modalCreate}
        onClose={modalCreateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Evento
            <button
              className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-9"
              onClick={() => modalCreateClose()}
            >
              <IoMdClose size={18} />
            </button>
          </Typography>

          <form
            className="w-full max-w-lg  bg-gray-400 shadow-md rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:w-11/12 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="description"
              >
                Event
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                placeholder="TipoEvento"
                defaultValue={bitacoraAdd.description}
                {...register("description", {
                  required: "Required",
                })}
                onChange={(e) => handleOnChange("description", e.target.value)}
              />
              {errors.description && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
            </div>
            <div className="invisible md:invisible md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="tipo"
              >
                TIPO EVENT ID
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                type="number"
                defaultValue={bitacoraAdd && bitacoraAdd.tipo_event_id}
                {...register("tipo_event_id", {
                  required: "Required",
                  minLength: 1,
                  maxLength: 9,
                })}
                onChange={(e) =>
                  handleOnChange("tipo_event_id", e.target.value)
                }
              />
              {errors.tipo_event_id && (
                <p className="text-red-600 text-1xl font-bold">
                  This field is required
                </p>
              )}{" "}
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
        open={modalDelete}
        onClose={modalDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Estás Seguro que deseas eliminar la Bitacora ID:{" "}
            {eventSeleccionada?.id}
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TipoEventsEventss />
    </QueryClientProvider>
  );
}
