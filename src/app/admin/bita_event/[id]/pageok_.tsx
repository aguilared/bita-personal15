"use client";
import { useEffect, useState, Suspense } from "react";
import dayjs from "dayjs";
import { Interweave } from "interweave";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";

import Select from "react-select";
//import WYSIWYGEditor from "@/styles/WYSIWYG";
import WYSIWYGEditor from "./WYSIWYG";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, Draft } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Add the import for useTypeEvents1
import { useTypeEvents1 } from "@/hooks/useTypeEvents1";
import { useEventsId } from "@/hooks/useEventsId";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";

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

const dateBitacora = new Date();

const convertDate1 = (date: any) => {
  const d = dayjs(date).format("D-M-YY h:mm");
  return d;
};

interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

const editFormDefaultValues: DefaultValues<EditFormValues> = {
  tipo_event_id: 1,
  events_id: 1,
  description: "",
  event_date: "event_date",
  image: false,
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BitaEventCard />
    </QueryClientProvider>
  );
}

const BitaEventCard = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const params = useSearchParams();
  console.log("PARAMS", params);
  const [bitacora_id, setBitacora_id] = useState("");
  const [bitacoraDate, setBitacoraDate] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tipoevent, setTipoEvent] = useState("");
  const [event, setEvent] = useState("");
  const [intervalMs, setIntervalMs] = useState(10000);
  const [isImage, setIsImage] = useState(false);
  const { typeEvents1 } = useTypeEvents1(); //
  const [eventId, setEventId] = useState("");
  const { eventsId }: { eventsId: Array<{ value: number; label: string }> } =
    useEventsId(eventId); //

  const handleChange = (editorState: {
    getCurrentContent: () => Draft.Model.ImmutableData.ContentState;
  }) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    console.log(contentState);
  };

  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "bitacora/event_id/" + params?.get("id");
  console.log("ENDPOINT ", ENDPOINT);

  const { data, isLoading, refetch, status, isError } = useQuery({
    queryKey: ["EventId"],
    queryFn: async () => {
      const data = await axios.get(`${ENDPOINT}`);
      console.log("DATAAAAAAAA", data);
      return data.data;
    },
    refetchInterval: intervalMs,
  });

  const [editFormDefaultValues, setEditFormDefaultValues] = useState({
    tipo_event_id: 1,
    events_id: 1,
    description: "",
    event_date: "event_date",
    image: false,
  });

  useEffect(() => {
    if (status === "success" && data) {
      const eventData = data as {
        bitacora_id: string;
        event_date: string;
        bitacora: { author: { name: string } };
        tipoEvent: { description: string };
        event: { description: string };
        description: string;
        image: boolean;
        tipo_event_id: number;
        events_id: number;
      };
      console.log("====================================");
      console.log("renders");
      console.log("Data==============================", eventData);
      setBitacora_id(eventData.bitacora_id);
      setBitacoraDate(eventData.event_date);
      setAuthor(eventData.bitacora.author.name);
      setTipoEvent(eventData.tipoEvent.description);
      setEvent(eventData.event.description);
      setDescription(eventData.description);
      setIsImage(eventData.image);

      setEditFormDefaultValues({
        tipo_event_id: eventData.tipo_event_id,
        events_id: eventData.events_id,
        description: eventData.description,
        event_date: eventData.event_date,
        image: eventData.image,
      });
    }
  }, [data, status, setEditFormDefaultValues]);

  const {
    register: registerEditField,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: editFormDefaultValues,
  });

  return (
    <div className="containeree">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card-body">
            <h4 className="card-title">New Code Snippe</h4>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  placeholder="title"
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <Suspense fallback="loading">
                <div className="md:w-11/12 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Descripcion evento{description}
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
              </Suspense>

              <div className="md:w-11/12 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Descripcion evento1
                </label>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Editor
                      defaultEditorState={editorState}
                      onEditorStateChange={(editorState) => {
                        setEditorState(editorState);
                        handleChange(editorState);
                      }}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />
                  )}
                />
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

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  &nbsp;Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
