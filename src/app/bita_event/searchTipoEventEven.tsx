import { useState, BaseSyntheticEvent, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import Container from "../../../components/Container";
///import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useQuery } from "@tanstack/react-query";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

import dayjs from "dayjs";
import Interweave from "interweave";
import axios from "axios";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTypeEvents1 } from "../../../hooks/useTypeEvents1";
import { useEventsId } from "../../../hooks/useEventsId";

type Inputs = {
  alive: string;
  birthdate: string;
  clase_id: number;
  hierro: string;
  id: number;
  info: string;
  mother: string;
  name: string;
  tipo_event_id: number;
  tipopart: string;
  updated_at: string;
};

const convertDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY");
};
const convertDate1 = (date: any) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm");
};

const SearchTipoEvent: NextPage = () => {
  const { typeEvents1 } = useTypeEvents1(); //
  const [eventId, setEventId] = useState("");
  const { eventsId } = useEventsId(eventId); //

  const [tipo_event_id, setTipo_event_id] = useState(29);
  const [bitacoraSearch, setBitacoraSearch] = useState();
  const [datafilter, setDatafilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const ENDPOINT = process.env.NEXT_PUBLIC_API_URL + "bitacora/eventsId/";

  const { status, data, isLoading } = useQuery(["bitaTypeEvent"], async () => {
    const res = await axios.get(`${ENDPOINT}${tipo_event_id}`);
    console.log("DATA1", res.data);
    return res.data;
  });
  useEffect(() => {
    if (status === "success") {
      console.log("====================================");
      console.log("renders");
      console.log("====================================");
      console.log("DATA1", data);
      setDatafilter(data);
    }
  }, [data, status]);

  if (isLoading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }

  const handleOnChange = (ownerKey, value) => {
    console.log("valueOnChangeAdd", value);
    setBitacoraSearch(value);
    console.log("BitacoraSearch", bitacoraSearch);

    //return setDatafilter(newData);
  };

  const searchs = () => {
    console.log("BitacoraSearchhhhhh", bitacoraSearch);
    setLoading(true);
    if (loading) {
      return (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      );
    }

    const value = bitacoraSearch;
    console.log("ValueSearchvvvvv", value);
    if (!value || value === "") {
      return setDatafilter(data); //retorna a la data original
    }

    //setTipo_event_id(value);
    //filtrando la data al hacer un search
    const getData = async () => {
      const result = await axios.get(`${ENDPOINT}${value}`);
      const resp = result.data;
      console.log("DATA44", resp);
      setDatafilter(resp);
      setLoading(false);
    };
    getData();
  };

  return (
    <Container>
      <div className="container mx-auto px-20">
        <h1 className="text-gray-600 text-5xl font-bold">
          Query Bitacoras TypeEvent Event.
        </h1>
      </div>

      <div className="flex mb-4">
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
                  onBlur={() => searchs()}
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
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {datafilter ? (
          datafilter.map((event: any, key: any) => (
            <div className="flex flex-col rounded-xl shadow-lg " key={key}>
              <Card
                key={key}
                sx={{
                  display: "flex",
                  width: ["70%", "70%", "20.33%"],
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  title={
                    "ID:" +
                    `${event.id}` +
                    " " +
                    convertDate(event.bitacora.bitacora_date)
                  }
                  subheader={
                    "TipoEvent: " +
                    `${event.tipo_event_id} ` +
                    `${event.tipoEvent.description}` +
                    ", Event: " +
                    `${event.event.id} ` +
                    `${event.event.description}`
                  }
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="div"
                  >
                    <Interweave content={event.description} />
                  </Typography>
                </CardContent>
                {event.image! ? (
                  <a
                    href={"/static/images/" + `${event.id}` + ".jpg"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 30 }}
                      image={"/static/images/" + `${event.id}` + ".jpg"}
                      alt="Live from space album cover"
                      onClick={() => console.log("CardActionArea clicked")}
                    />
                  </a>
                ) : (
                  <></>
                )}
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h6" component="div">
                    <a
                      href={`/bitacora/view/${encodeURIComponent(
                        event.bitacora_id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      BitacoraID: {event.bitacora_id}
                      {",  "}
                    </a>
                    {convertDate(event.bitacora.bitacora_date)}
                  </Typography>

                  <Typography>
                    BitacoraID:
                    <Link
                      href={`/bitacora/view/${encodeURIComponent(
                        event.bitacora_id
                      )}`}
                      passHref
                    >
                      {event.bitacora_id}
                    </Link>
                  </Typography>

                  <Typography variant="h6" component="div">
                    <a
                      href={`/bitacora/bita_event/${encodeURIComponent(
                        event.id
                      )}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      BitaEventID: {event.id}
                      {",  "}
                    </a>
                    {convertDate(event.event_date)}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="div"
                  >
                    <Interweave content={event.description} />
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchTipoEvent;
