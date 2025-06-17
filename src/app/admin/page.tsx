"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

import Container from "@/components/Container";
import useUser from "@/hooks/useUser";
import BitacoraCreate from "@/components/Bitacoras/BitacoraCreate";
import BitacoraEdit from "@/components/Bitacoras/BitacoraEdit";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { IoMdClose } from "react-icons/io";
import Link from "next/link";
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

type Inputs = {
  alive: string;
  birthdate: string;
  clase_id: number;
  hierro: string;
  id: number;
  info: string;
  mother: string;
  mother_id: number;
  name: string;
  owner_id: number;
  tipopart: string;
  updated_at: string;
};

const dateBitacora = new Date();

const convertDate = (dateTo: any) => {
  const d = dayjs(dateTo).format("DD-MM-YYYY");
  return d;
};
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Bitacoras />
    </QueryClientProvider>
  );
}
const Bitacoras = (): React.JSX.Element => {
  const [intervalMs] = React.useState(4000);

  const router = useRouter();

  const { isUser } = useUser();

  useEffect(() => {
    if (!isUser) {
      //salir si no hay usuario loogado
      console.log("no hay Users ?? ", isUser);
    }
  }, [isUser, router]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Bitacorass"],
    queryFn: async () => {
      const data = await axios.get(`${DATABASEURL}bitacora`);
      return data.data;
    },
    refetchInterval: intervalMs,
  });
  console.log("DATAbitacoras", data);

  const [modalCreate, setModalCreate] = React.useState(false);
  const modalCreateOpen = () => setModalCreate(true);
  const modalCreateClose = () => setModalCreate(false);

  const [modalEdit, setModalEdit] = React.useState(false);
  const modalEditOpen = () => setModalEdit(true);
  const modalEditClose = () => setModalEdit(false);

  const [modalDelete, setModalDelete] = React.useState(false);
  const modalDeleteOpen = () => setModalDelete(true);
  const modalDeleteClose = () => setModalDelete(false);

  const [bitacoraAdd, setBitacoraAdd] = useState({
    author_id: 1,
    bitacora_date: convertDate1(dateBitacora),
  });

  const handleOnChange = (bitacoraKey: any, value: any) => {
    setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
  };

  const OnSubmit = async () => {
    const parsedata = {
      author_id: Number(bitacoraAdd.author_id),
      bitacora_date: bitacoraAdd.bitacora_date,
    };
    createPostMutation.mutate(parsedata);
  };

  const createPostMutation = useMutation({
    mutationFn: (parsedata: any) => {
      return axios.post("/api/bitacora/create", parsedata);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["Bitacorass"] });
      console.log("DATADDEVUELLTA", data);
      console.log("DATADATA0", data.data);
      console.log("variables", variables);
      const idd = data.data.id;
      router.push(`/admin/bita_events/1?id=${encodeURIComponent(idd)}`);
      modalCreateClose();
    },
  });

  //to edit
  const [bitacoraE, setBitacoraE] = useState({
    id: "",
    author_id: "",
    bitacora_date: convertDate1(dateBitacora),
    updated_at: "2022-01-03 11:07",
  });

  //item selected
  const [bitacoraSeleccionada, setBitacoraSeleccionada] = useState({
    id: "",
    author_id: "",
    bitacora_date: "",
    updated_at: "",
  });

  const handleOnChangeE = (animalKey: any, value: any) => {
    setBitacoraE({ ...bitacoraE, [animalKey]: value });
  };

  const seleccionarBitacoraE = (elemento: any, caso: any) => {
    setBitacoraSeleccionada(elemento);
    setBitacoraE({
      ...bitacoraE,
      id: elemento.id,
      author_id: elemento.author_id,
      bitacora_date: elemento.bitacora_date,
      updated_at: elemento.updated_at,
    });
    caso === "Edit" ? modalEditOpen() : setModalEdit(false);
  };

  const OnSubmitE = async () => {
    const parsedataE = {
      id: Number(bitacoraE.id),
      author_id: Number(bitacoraE.author_id),
      bitacora_date: bitacoraE.bitacora_date,
    };
    updatePostMutation.mutate(parsedataE);
  };

  const updatePostMutation = useMutation({
    mutationFn: (parsedataE: any) => {
      return axios.put("/api/bitacora/update", parsedataE);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Bitacorass"] });
      toast.success("Bitacora Updated successfully");
      modalEditClose();
    },
  });

  //Delete
  const seleccionarBitacoraD = (elemento: any, caso: any) => {
    console.log("A borrar");
    setBitacoraSeleccionada(elemento);
    caso === "Delete" ? modalDeleteOpen() : setModalDelete(false);
  };

  const eliminar = async () => {
    try {
      await fetch("/api/bitacora/delete/" + bitacoraSeleccionada.id);
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

  return (
    <Container>
      <div className="flex rounded items-center justify-between flex-wrap bg-gray-500">
        <div className="flex-grow text-left text-gray-100 px-3 py-1 m-2 ">
          {" Admin Bitacoras"}
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
      {data && data?.length > 0
        ? data?.map((bitacora: any) => (
            <div
              className="flex rounded mb-1 shadow bg-slate-100 dark:bg-slate-800"
              key={bitacora.id}
            >
              <div className="w-4/5 inline-block text-gray-900 dark:text-white text-left px-1 py-0 m-0">
                ({bitacora._count.bita_events})&nbsp;
                {bitacora.id} &nbsp;
                {convertDate(bitacora.bitacora_date)} &nbsp;
                {bitacora.author.name} &nbsp;
              </div>
              <div className="w-1/5 inline-block text-gray-700 text-right px-1 py-1 m-0">
                <Link
                  href={`bita_events/4?id=${encodeURIComponent(bitacora.id)}`}
                  passHref
                  target="_blank"
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
              </div>
              <div className="inline-block text-gray-700 text-right px-1 py-1 m-0">
                <button
                  onClick={() => seleccionarBitacoraD(bitacora, "Delete")}
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
                  onClick={() => seleccionarBitacoraE(bitacora, "Edit")}
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
              </div>{" "}
              <div className="w-1/5 inline-block text-gray-700 text-right px-1 py-1 m-0">
                <Link
                  href={`admin/bita_events/4?id=${encodeURIComponent(
                    bitacora.id
                  )}`}
                  passHref
                  target="_blank"
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
            Create Bitacora
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

          <BitacoraCreate
            onSubmit={OnSubmit}
            handleOnChange={handleOnChange}
            onClose={modalCreateClose}
            bitacoraAdd={bitacoraAdd}
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
            Edit Bitacora {bitacoraSeleccionada.id} Author:
            {bitacoraSeleccionada.author_id}
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

          <BitacoraEdit
            bitacoraSelected2={bitacoraSeleccionada}
            onSubmitE={OnSubmitE}
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
