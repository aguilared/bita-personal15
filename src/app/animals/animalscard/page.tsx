"use client";
import React, { useState, BaseSyntheticEvent } from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import StreetviewRoundedIcon from "@mui/icons-material/ThreeDRotation";
import Container from "@/components/Container";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import { useOwners } from "../../../hooks/useOwners";
import { useClases } from "../../../hooks/useClases";
import { useVacas } from "../../../hooks/useVacas";
import useAnimals from "../../../hooks/useAnimals";

import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.custom((t) => (
    <div
      className={`bg-white px-6 py-4 shadow-md rounded-full ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      Animal updated successfully 👋
    </div>
  ));

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

const dateAnimal = new Date();

const convertDate = (dateTo: any) => {
  const d = dayjs(dateTo).format("DD-MM-YYYY");
  return d;
};
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const Animalss = (): React.JSX.Element => {
  const animalspage = useAnimals(5);
  console.log("ANIMALS", animalspage);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Animalsss"],
    queryFn: async () => {
      const data = await axios.get(`${DATABASEURL}animals`);
      return data.data;
    },
  });

  const [animalAdd, setAnimalAdd] = useState({
    alive: "Si",
    birthdate: convertDate1(dateAnimal),
    clase_id: 1,
    hierro: "Si",
    info: "Hierro ... y .. Color ..., Cachos. ...",
    mother: "",
    mother_id: 0,
    name: "",
    owner_id: 1,
    tipopart: "Normal",
  });

  const [animalE, setAnimalE] = useState({
    alive: "",
    birthdate: convertDate1(dateAnimal),
    clase_id: 1,
    hierro: "",
    id: "",
    info: "",
    mother: "",
    mother_id: 0,
    name: "",
    owner_id: 1,
    tipopart: "",
    updated_at: "2022-01-03 11:07",
  });

  const [modalViewHist, setModalViewHist] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const toggleViewHist = () => setModalViewHist(!modalViewHist);
  const toggle = () => setModalInsertar(!modalInsertar);
  const toggleEliminar = () => setModalEliminar(!modalEliminar);
  const toggleEditar = () => setModalEditar(!modalEditar);

  const [animalSeleccionada, setAnimalSeleccionada] = useState({
    id: "",
    alive: "",
    birthdate: "",
    clase_id: "",
    hierro: "",
    info: "",
    mother_id: "",
    name: "",
    owner_id: "",
    tipopart: "",
    updated_at: "",
  });
  // to viewAnimal
  const [animalSeleccionada1, setAnimalSeleccionada1] = useState({
    id: "",
    description: "",
    updated_at: "",
  });
  const [animalSeleccionada2, setAnimalSeleccionada2] = useState({
    id: "",
    alive: "",
    birthdate: "",
    clase_id: "",
    hierro: "",
    info: "",
    mother: "",
    mother_id: "",
    name: "",
    owner_id: "",
    tipopart: "",
    updated_at: "",
  });

  const seleccionarAnimal = (elemento: any, caso: any) => {
    setAnimalSeleccionada(elemento);
    console.log("ELEMENTO Eliminar o Editar", elemento);
    console.log("CASO Eliminar o Editar", caso);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };
  // to viewHist
  const seleccionarAnimal1 = (elemento: any, caso: any) => {
    setAnimalSeleccionada1(elemento);
    console.log("ELEMENTOTO VIEW", elemento);
    console.log("CASO", caso);
    caso === "Mostrar" ? setModalViewHist(true) : setModalViewHist(false);
  };
  // to editar
  const seleccionarAnimal2 = (elemento: any, caso: any) => {
    setAnimalSeleccionada2(elemento);
    console.log("ELEMENTO", elemento);
    setAnimalE({
      ...animalE,
      birthdate: elemento.birthdate,
      clase_id: elemento.clase_id,
      hierro: elemento.hierro,
      id: elemento.id,
      updated_at: elemento.updated_at,
      info: elemento.info,
      mother: elemento.mother,
      mother_id: elemento.mother_id,
      name: elemento.name,
      owner_id: elemento.owner_id,
      tipopart: elemento.tipopart,
    });
    console.log("AnimalE", animalE);
    caso === "Editar" ? setModalEditar(true) : setModalViewHist(true);
  };

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        {isLoading ? (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        ) : null}
        {data && data.length > 0
          ? data.map((animal: any) => (
              <div
                className="flex rounded items-left bg-gray-100 mb-1 shadow"
                key={animal.id}
              >
                <div className="inline-block text-gray-700 text-left px-1 py-0 m-0">
                  <a
                    href={"/static/images/" + `${animal.id}` + ".jpg"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      onClick={() => seleccionarAnimal1(animal, "Mostrar")}
                      src={"/static/images/" + `${animal.id}` + ".jpg"}
                      alt="my Image"
                      width="212"
                      height="188"
                    />
                  </a>
                </div>

                <div className="w-4/5 inline-block text-gray-700 text-left text-base px-1 py-0 m-0">
                  ID= {animal.id} &nbsp;
                  {animal.clase.id}&nbsp; {animal.clase.description}:&nbsp;
                  <b> {animal.name}</b>, &nbsp; Dueno=
                  {animal.owner.name}. &nbsp; <br />
                  Nacimiento=
                  {convertDate(animal.birthdate)}. &nbsp; Madre: {animal.mother}{" "}
                  <br />
                  Live:
                  {animal.live! ? (
                    <input
                      type="checkbox"
                      checked
                      placeholder="Live"
                      className="mx-3"
                    />
                  ) : (
                    <input
                      type="checkbox"
                      placeholder="Live"
                      className="mx-3"
                    />
                  )}{" "}
                  <br />
                  Info= {animal.info} &nbsp;
                </div>
              </div>
            ))
          : null}
      </QueryClientProvider>
    </Container>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Animalss />
    </QueryClientProvider>
  );
}
