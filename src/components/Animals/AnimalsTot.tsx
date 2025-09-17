"use client";
import React, { useState } from "react";
import Container from "@/components/Container";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";

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

const Animalss = (): React.JSX.Element => {
  const [intervalMs, setIntervalMs] = useState(30000);
  const [totalAnimals, setTotalAnimals] = useState("");
  const [totalAnimalsArqui, setTotalAnimalsArqui] = useState("");
  const [totalAnimalsJose, setTotalAnimalsJose] = useState("");
  const [totalAnimalsAngel, setTotalAnimalsAngel] = useState("");
  const [totalAnimalsYoel, setTotalAnimalsYoel] = useState("");
  const [totalAnimalsCruz, setTotalAnimalsCruz] = useState("");
  const [totalAnimalsPetra, setTotalAnimalsPetra] = useState("");
  const [totalAnimalsMilagro, setTotalAnimalsMilagro] = useState("");

  const URL = DATABASEURL + "animals/rawQueryAnimalsLive";
  console.log("URLs", URL);
  const { data, isLoading, refetch } = useQuery<any>({
    queryKey: ["TotAnimals"],
    queryFn: async () => {
      const response = await axios.get(`${URL}`);
      const data = response.data as {
        totalAnimalsi: string;
        totalAnimalsArqui: string;
        totalAnimalsJose: string;
        totalAnimalsAngel: string;
        totalAnimalsYoel: string;
        totalAnimalsCruz: string;
        totalAnimalsPetra: string;
        totalAnimalsMilagro: string;
        [key: string]: string;
      };
      setTotalAnimals(data.totalAnimals);
      setTotalAnimalsArqui(data.totalAnimalsArqui);
      setTotalAnimalsJose(data.totalAnimalsJose);
      setTotalAnimalsAngel(data.totalAnimalsAngel);
      setTotalAnimalsYoel(data.totalAnimalsYoel);
      setTotalAnimalsCruz(data.totalAnimalsCruz);
      setTotalAnimalsPetra(data.totalAnimalsPetra);
      setTotalAnimalsMilagro(data.totalAnimalsMilagro);
      return data;
    },
    refetchInterval: intervalMs,
  });
  console.log("RResultData", data);
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        {isLoading ? (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        ) : null}

        <>
          <div className="flex rounded items-center justify-between flex-wrap bg-gray-500">
            <div className="flex-grow text-left  text-gray-100   dark:bg-slate-800 px-3 py-1 m-2 ">
              Total de Animales: {totalAnimals}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-400 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                    Propietario
                  </th>
                  <th className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                    Animales
                  </th>
                  <th className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                    Activo
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Angel
                  </td>

                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsAngel}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Arquimedes
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsArqui}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Jose
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsJose}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Milagro
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsMilagro}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Petra
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsPetra}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Yoel
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsYoel}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Si
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    Cruz
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    {totalAnimalsCruz}
                  </td>
                  <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </QueryClientProvider>
    </Container>
  );
};

export default function AnimalsTot() {
  return (
    <QueryClientProvider client={queryClient}>
      <Animalss />
    </QueryClientProvider>
  );
}
