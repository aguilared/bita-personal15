/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Container from "@/components/Container";
import { IconButton } from "@mui/material";

import StreetviewRoundedIcon from "@mui/material";

const queryClient = new QueryClient();
const convertDate = (dateTo: any) => {
  const d = dayjs(dateTo).format("DD-MM-YYYY");
  return d;
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/api/bitacoras/events/")
        .then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container>
      <div>
        {isPending ? (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        ) : null}
        <h1>Bitacora Events</h1>

        {data && data.length > 0
          ? data.map((tipoEvent: any) => (
              <div
                className="flex rounded items-left bg-gray-100 mb-1 shadow"
                key={tipoEvent.id}
              >
                <div className="inline-block text-gray-700 text-left px-1 py-0 m-0">
                  <a
                    href={"/static/images/" + `${tipoEvent.id}` + ".jpg"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      onClick={() => seleccionarAnimal1(tipoEvent, "Mostrar")}
                      src={"/static/images/" + `${tipoEvent.id}` + ".jpg"}
                      alt="my Image"
                      width="212"
                      height="188"
                    />
                  </a>
                </div>

                <div className="w-4/5 inline-block text-gray-700 text-left px-1 py-0 m-0">
                  <a>
                    <p className="text-gray-900 text-left leading-none">
                      {tipoEvent.id} &nbsp;
                      {tipoEvent.tipo_event_id} &nbsp;
                      {tipoEvent.description} &nbsp;
                      {tipoEvent.updated_at} &nbsp;
                    </p>
                  </a>
                </div>
              </div>
            ))
          : null}
        <ReactQueryDevtools initialIsOpen />
      </div>
    </Container>
  );
}
