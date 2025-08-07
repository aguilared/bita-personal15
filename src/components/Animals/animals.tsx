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
import useAnimals from "@/hooks/useAnimals";

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

const convertDate = (dateTo: string | Date) => {
  const d = dayjs(dateTo).format("DD-MM-YYYY");
  return d;
};
const convertDate1 = (date: string | Date) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const Animalss = (): React.JSX.Element => {
  const animalspage = useAnimals(5);
  console.log("ANIMALS", animalspage);

  const { data } = useQuery({
    queryKey: ["Animalsss"],
    queryFn: async (): Promise<
      Array<{
        id: string;
        clase: { id: string; description: string };
        name: string;
        owner: { name: string };
        birthdate: string;
        live: boolean;
        mother: string;
        mother_id: string;
        info: string;
      }>
    > => {
      const response = await axios.get(`${DATABASEURL}animals`);
      return response.data as Array<{
        id: string;
        clase: { id: string; description: string };
        name: string;
        owner: { name: string };
        birthdate: string;
        live: boolean;
        mother: string;
        mother_id: string;
        info: string;
      }>;
      //return data.data;
    },
  });

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <div className="flex rounded items-center justify-between flex-wrap bg-gray-500">
          <div className="flex-grow text-left  text-gray-100   dark:bg-slate-800 px-3 py-1 m-2 ">
            {" List Animals Live Deaths"}
          </div>
        </div>

        {data && data.length > 0
          ? data.map(
              (animal: {
                id: string;
                clase: { id: string; description: string };
                name: string;
                owner: { name: string };
                birthdate: string;
                live: boolean;
                mother: string;
                mother_id: string;
                info: string;
              }) => (
                <div
                  className="flex rounded items-left  dark:bg-slate-800 mb-1 shadow"
                  key={animal.id}
                >
                  <div className="inline-block text-left px-1 py-0 m-0">
                    <Image
                      src={"/static/images/" + `${animal.id}` + ".jpg"}
                      alt="my Image"
                      width="212"
                      height="188"
                    />
                  </div>

                  <div className="w-4/5 inline-block dark:text-gray-100 text-left text-base px-1 py-0 m-0">
                    ID= {animal.id} &nbsp;
                    {animal.clase.id}&nbsp; {animal.clase.description}:&nbsp;
                    <b> {animal.name}</b>, &nbsp; Dueno=
                    {animal.owner.name}. &nbsp; <br />
                    Nacimiento=
                    {convertDate(animal.birthdate)}, Live:
                    {animal.live! ? (
                      <input
                        type="checkbox"
                        checked
                        placeholder="Live"
                        onChange={() => console.log("change")}
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
                    Tipo animal: <b>{animal.clase.description}</b> <br />
                    Madre: {animal.mother},{" "}
                    <a
                      className="bg-blue-200 rounded underline hover:underline hover:underline-offset-4"
                      href={`/animals/animal/4?id=${encodeURIComponent(
                        animal.mother_id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {" "}
                      motherID:&nbsp; {animal.mother_id},{" "}
                    </a>{" "}
                    <br />
                    Info= {animal.info} &nbsp;
                    <br />
                  </div>
                </div>
              )
            )
          : null}
      </QueryClientProvider>
    </Container>
  );
};

export default function Animals() {
  return (
    <QueryClientProvider client={queryClient}>
      <Animalss />
    </QueryClientProvider>
  );
}
