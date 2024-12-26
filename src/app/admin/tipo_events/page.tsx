"use client";
import React, { useState, forwardRef, BaseSyntheticEvent } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import Container from "@/components/Container";
import axios from "axios";
import Tipo_eventsCreate from "@/components/tipo_events/Tipo_eventsCreate";
import Tipo_eventsEdit from "@/components/tipo_events/Tipo_eventsEdit";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { TiposEvents } from "../../../interfaces/interfaces";

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

const DATABASEURL = process.env.NEXT_PUBLIC_API_URL;

interface CreateFormValues {
  description: string;
  created_at: string;
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
const dateTipoevent = new Date();
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const TipoEvents = (): JSX.Element => {
  const [intervalMs, setIntervalMs] = useState(4000);
  const ENDPOINT = DATABASEURL + "tipoEvents/conEvents";

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tipoEventss"],
    queryFn: async () => {
      const data = await axios.get(`${ENDPOINT}`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });
  console.log("DataTipoEvent", data);

  const [tipoeventAdd, setTipoeventAdd] = useState({
    description: "",
    // updated_at: convertDate1(dateTipoevent),
  });
  const [tipoeventE, setTipoeventE] = useState({
    id: 1,
    description: "tipoEvent",
    updated_at: "2022-01-03 11:07",
  });

  const [modalCreate, setModalCreate] = useState(false);
  const modalCreateOpen = () => setModalCreate(true);
  const modalCreateClose = () => setModalCreate(false);

  const [modalEdit, setModalEdit] = useState(false);
  const modalEditOpen = () => setModalEdit(true);
  const modalEditClose = () => setModalEdit(false);

  const [modalDelete, setModalDelete] = React.useState(false);
  const modalDeleteOpen = () => setModalDelete(true);
  const modalDeleteClose = () => setModalDelete(false);

  const [tipoEventSeleccionada, setTipoEventSeleccionada] =
    useState<TiposEvents | null>(null);

  // to editar
  const seleccionarTipoevent2 = (elemento: TiposEvents, caso: string) => {
    setTipoEventSeleccionada(elemento);
    console.log("ELEMENTO", elemento);
    setTipoeventE({
      ...tipoeventE,
      id: elemento.id,
      description: elemento.description,
      updated_at: elemento.updated_at,
    });
    console.log("TIPOEVENTE", tipoeventE);
    caso === "Editar" ? setModalEdit(true) : setModalDelete(false);
  };

  //eliminar?
  const seleccionarTipoevent = (elemento: TiposEvents, caso: string) => {
    setTipoEventSeleccionada(elemento);
    console.log("ELEMENTO A Eliminar o Editar", elemento);
    console.log("CASO Eliminar o Editar", caso);
    caso === "Delete" ? setModalDelete(true) : setModalEdit(false);
  };

  const handleOnChange = (tipoeventKey, value) => {
    console.log("valueOnChangeAdd", value);
    setTipoeventAdd({ ...tipoeventAdd, [tipoeventKey]: value });
    console.log("SETtipoeventAdd", tipoeventAdd);
  };
  const handleOnChangeE = (tipoeventKey, value) => {
    console.log("valueOnChangeEditar", value);
    setTipoeventE({ ...tipoeventE, [tipoeventKey]: value });
    console.log("tipoeventOnchageE", tipoeventE);
  };

  const onSubmit: SubmitHandler<CreateFormValues> = (data) => {
    const parsedata = {
      description: data.description,
      created_at: dateTipoevent,
    };
    console.log("ParseData", parsedata);
    createPostMutation.mutate(parsedata);
  };
  const createPostMutation = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/tipoEvents/create", parsedata);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["TipoeventEvents"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      let idd = data.data.id;
      ///router.push(`/bitacoras/bita_events/1?id=${encodeURIComponent(idd)}`);
      modalCreateClose();
    },
  });

  const onSubmitE = async () => {
    console.log("a Ediitar", tipoeventE);
    const parsedataE = {
      id: Number(tipoeventE.id),
      description: tipoeventE.description,
      updated_at: tipoeventE.updated_at,
    };
    updatePostMutation.mutate(parsedataE);
  };

  const updatePostMutation = useMutation({
    mutationFn: (parsedataE: any) => {
      return axios.put("/api/tipoEvents/update", parsedataE);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tipoeventss"] });
      toast.success("tipoevent Updated successfully");
      modalEditClose();
    },
  });

  const eliminar = async (e: BaseSyntheticEvent) => {
    try {
      console.log("Entra a Borrar");
      const result = await fetch(
        "/api/tipoEvents/delete/" + tipoEventSeleccionada?.id
      );
      // await removetipoevent(tipoeventSeleccionada.id);
      refetch();
      setModalDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="flex rounded items-center justify-between flex-wrap bg-gray-500">
        <div className="flex-grow text-left text-gray-100 px-3 py-1 m-2 ">
          {" Admin Tipo Events"}
        </div>
        <div className="flex-grow text-right px-3 py-1 m-2 text-gray-100">
          <Button color="success" variant="contained" onClick={modalCreateOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#F3F3F3"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            Add
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      ) : null}
      {data && data.length > 0
        ? data.map((tipoEvent: any) => (
            <div
              className="flex rounded items-left bg-gray-100 mb-1 shadow"
              key={tipoEvent.id}
            >
              <div className="w-4/5 inline-block text-gray-700 text-left px-1 py-0 m-0">
                <a>
                  <p className="text-gray-900 text-left leading-none">
                    ({tipoEvent._count.events})&nbsp;
                    <Link
                      href={`/bitacora/events/view/${encodeURIComponent(
                        tipoEvent.id
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
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                      </button>
                    </Link>
                    {tipoEvent.id} &nbsp;
                    {tipoEvent.description} &nbsp;
                    {tipoEvent.updated_at} &nbsp;
                  </p>
                </a>
              </div>

              <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                <button
                  onClick={() => seleccionarTipoevent(tipoEvent, "Delete")}
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
                  onClick={() => seleccionarTipoevent2(tipoEvent, "Editar")}
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
                <Link
                  href={`/admin/events/4?id=${encodeURIComponent(
                    tipoEvent.id
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
                      <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))
        : null}

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
            Create Tipo event.
            {tipoEventSeleccionada && tipoEventSeleccionada.id}
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
          <Tipo_eventsCreate
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            onClose={modalCreateClose}
            tipoeventAdd={tipoeventAdd}
          />
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
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Tipo event ID:{" "}
            {tipoEventSeleccionada && tipoEventSeleccionada.id}
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

          <Tipo_eventsEdit
            tipoEventSeleccionada={tipoEventSeleccionada}
            onSubmitE={onSubmitE}
            handleOnChangeE={handleOnChangeE}
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
            Estás Seguro que deseas eliminar Tipo Event ID:{" "}
            {tipoEventSeleccionada?.id}
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
      <TipoEvents />
    </QueryClientProvider>
  );
}
