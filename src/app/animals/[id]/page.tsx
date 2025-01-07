"use client";
import { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";
import Container from "@/components/Container";

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventCard />
    </QueryClientProvider>
  );
}

const BitaEventCard = (props: any): JSX.Element => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState<string | null>(null);
  const [owner, setOwner] = useState("");
  const [mother, setMother] = useState("");
  const [motherid, setMotherid] = useState("");
  const [clase, setClase] = useState("");
  const [hierro, setHierro] = useState("");
  const [live, setLive] = useState<boolean>(false);
  const [info, setInfo] = useState("");
  const params = useSearchParams();
  const [intervalMs, setIntervalMs] = useState(1000);

  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "animals/animal_id/" + params?.get("id");
  console.log("ENDPOINT ", ENDPOINT);

  interface AnimalData {
    id: string;
    name: string;
    birthdate: string | null;
    owner: { name: string };
    mother: string;
    mother_id: string;
    clase: { description: string };
    hierro: string;
    live: boolean;
    info: string;
  }

  const { data, isLoading, refetch, status, isError } = useQuery({
    queryKey: ["AnimalId"],
    queryFn: async () => {
      const response = await axios.get(`${ENDPOINT}`);
      return response.data;
    },
    refetchInterval: intervalMs,
  });

  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("Datos", data);
      setId((data as AnimalData).id);
      setName((data as AnimalData).name);

      setBirthdate((data as AnimalData).birthdate);
      setOwner((data as AnimalData).owner.name);
      setMother((data as AnimalData).mother);
      setMotherid((data as AnimalData).mother_id);
      setClase((data as AnimalData).clase.description);
      setHierro((data as AnimalData).hierro);
      setLive((data as AnimalData).live);
      setInfo((data as AnimalData).info);
    }
  }, [data, status]);

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
              Detalle Animal
            </h3>
          </div>
          <Typography variant="h6" component="h2">
            Id: {params?.get("id")}, Nombre: {name}
          </Typography>{" "}
          <Typography variant="h6" component="h2">
            Owner: {owner}
            { }
          </Typography>{" "}
          <Typography variant="h6" component="h2">
            Nacimiento: {birthdate}, Live?:
            {live! ? (
              <input
                type="checkbox"
                checked
                placeholder="Live"
                onChange={() => console.log("live")}
                className="mx-3"
              />
            ) : (
              <input type="checkbox" placeholder="Live" className="mx-3" />
            )}{" "}
          </Typography>{" "}
          <Typography variant="h6" component="h2">
            Madre: {mother},{" "}
            <a
              className="bg-blue-200 rounded underline hover:underline hover:underline-offset-4"
              href={`/animals/1?id=${encodeURIComponent(motherid)}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              motherID:&nbsp; {motherid},{" "}
            </a>{" "}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Info: {info}
          </Typography>
        </CardContent>
        <div className="container max-w-4xl m-auto px-4 mt-0">
          <a
            href={"/static/images/" + `${params?.get("id")}` + ".jpg"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src={"/static/images/" + `${params?.get("id")}` + ".jpg"}
              alt={`${params?.get("id")}` + ".jpg"}
              width={1920 / 2}
              height={1280 / 2}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </a>
        </div>
        <div className="container max-w-4xl m-auto px-4 mt-20">
          <a
            href={"/static/images/" + `${params?.get("id")}` + ".jpg"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src={"/static/images/" + `${params?.get("id")}` + "_1.jpg"}
              alt="Image"
              width={1920 / 2}
              height={1280 / 2}
            />
          </a>
        </div>
        <div className="container max-w-4xl m-auto px-4 mt-20">
          <Image
            src={"/static/images/" + `${params?.get("id")}` + "_2.jpg"}
            alt="Image"
            width={1920 / 2}
            height={1280 / 2}
          />
        </div>
      </Card>
    </div>
  );
};
