"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { convertFromHTML, EditorState, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// useRouter es importado correctamente desde next/navigation
import { useSearchParams, useRouter } from "next/navigation";
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import axios from "axios";
// Asegúrate de que estos imports sean correctos para tus hooks
import { useTypeEvents1 } from "@/hooks/useTypeEvents1";
import { useEventsId } from "@/hooks/useEventsId";
import Select, { StylesConfig } from "react-select";

// ELIMINADAS: import router from "next/router"; y import { parse } from "path";

type OptionType = { label: string; value: number; isDisabled?: boolean };

import "../../../globals.css";

// Define la estructura del formulario de edición
interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

interface MutationData {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: Date;
  image: boolean;
}

// Clases base reutilizables
const labelBaseClasses = `
    block text-lg font-medium mb-1.5 
    text-gray-700 dark:text-gray-200
`;

const customStyles: StylesConfig<{ label: string; value: number }, false> = {
  option: (base, state) => ({
    ...base,
    fontSize: 14,
    color: "blue",
    backgroundColor: state.isSelected ? "lightblue" : "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  }),
};

const editorBackgroundClasses = `
    p-3 border rounded-b-lg transition duration-200 
    bg-white text-gray-900 
    dark:bg-slate-800 dark:text-white dark:border-slate-700
    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
`;

const toolbarStyling = `
    bg-gray-100 dark:bg-slate-700 border-b dark:border-slate-600
`;

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

export default function EditEvent() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditForm />
    </QueryClientProvider>
  );
}

const EditForm: React.FC = () => {
  const params = useSearchParams();
  const router = useRouter(); // <-- Instancia Correcta
  const eventIdParam = params?.get("id");

  const editFormDefaultValues: Partial<EditFormValues> = {
    tipo_event_id: 0,
    events_id: 0,
    description: "",
    event_date: "",
    image: false,
  };

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<EditFormValues>({
    defaultValues: editFormDefaultValues as EditFormValues,
  });

  const [eventId, setEventId] = useState("");
  const [intervalMs, setIntervalMs] = useState(10000);
  const { typeEvents1 } = useTypeEvents1();
  const { eventsId }: { eventsId: Array<{ value: number; label: string }> } =
    useEventsId(eventId);

  // SOLUCIÓN PARA EVITAR 'setState on unmounted component'
  const isMounted = React.useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false; // Cleanup function
    };
  }, []);

  const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL + "bitacora/event_id/" + eventIdParam;

  const { data, isLoading, status } = useQuery({
    queryKey: ["EventId", eventIdParam],
    queryFn: async () => {
      if (!eventIdParam) return null;
      const data = await axios.get(`${ENDPOINT}`);
      return data.data;
    },
    enabled: !!eventIdParam,
    refetchInterval: intervalMs,
  });

  // Función de manejo de cancelación (con router.back() robusto)
  const handleCancel = () => {
    // Intenta volver a la página anterior
    //router.back(); //NO FUNCIONA

    // OPCIONAL: Si router.back() falla, puedes forzar la redirección aquí:

    const bitacoraId = data?.bitacora_id;
    if (bitacoraId) {
      router.push(`/admin/bita_events/4?id=${encodeURIComponent(bitacoraId)}`);
    } else {
      router.push("/admin/dashboard");
    }
  };

  // MUTATION para guardar los datos
  const createPostMutationE = useMutation({
    mutationFn: async (parsedata: MutationData) => {
      const response = await axios.post(
        "/api/bitacora/events/admin/edit",
        parsedata
      );
      return response.data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["BitacoraEvents"] });

      // Redirección exitosa (misma ruta que usas en tu código)
      router.push(
        `/admin/bita_events/4?id=${encodeURIComponent(variables.bitacora_id)}`
      );
    },
    onError: (error) => {
      console.error("Error al actualizar el registro:", error);
      alert("Error al guardar. Consulta la consola.");
    },
  });

  const handleOnChange = (bitacoraKey: string, value: string) => {
    console.log("BitacoraKey1", bitacoraKey);
    console.log("BitacoraKeyValue1", value);
    //setBitacoraAdd({ ...bitacoraAdd, [bitacoraKey]: value });
  };
  // Función de manejo de guardado (Conexión a useMutation)
  const onSubmit: SubmitHandler<EditFormValues> = (formData) => {
    const parsedata: MutationData = {
      id: Number(eventIdParam), // Usamos el ID de la URL
      bitacora_id: Number(data?.bitacora_id), // Usamos el ID de la bitácora cargada
      tipo_event_id: Number(formData.tipo_event_id),
      events_id: Number(formData.events_id),
      description: formData.description,
      event_date: new Date(formData.event_date),
      // NO USAR 'new Boolean()'. Se asume que formData.image ya es boolean
      image: formData.image,
    };

    createPostMutationE.mutate(parsedata);
  };

  // useEffect principal para la carga de datos y seteo de valores
  useEffect(() => {
    if (status === "success" && data) {
      if (!isMounted.current) return;

      const eventData = data as {
        bitacora_id: string;
        event_date: string;
        description: string;
        image: boolean;
        tipo_event_id: number;
        events_id: number;
      };

      // 1. Setear valores de RHF
      setValue("id", Number(eventIdParam));
      setValue("bitacora_id", Number(eventData.bitacora_id));
      setValue("events_id", eventData.events_id);
      setValue("event_date", eventData.event_date);
      setValue("image", eventData.image);

      // A. Setear el ID del evento (para el Select)
      setValue("tipo_event_id", eventData.tipo_event_id, {
        shouldValidate: true,
        shouldDirty: true,
      });

      // B. Setear la Descripción (Editor Enriquecido)
      const htmlDescription = eventData.description || "";
      const contentBlocks = convertFromHTML(htmlDescription);
      const contentState = ContentState.createFromBlockArray(
        contentBlocks.contentBlocks,
        contentBlocks.entityMap
      );

      setEditorState(EditorState.createWithContent(contentState));

      // Setear el valor HTML en RHF
      setValue("description", htmlDescription, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [data, status, setValue, eventIdParam]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      {isLoading ? (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      ) : null}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
          Editar Evento ({data?.id})
        </h2>

        <form
          name="edit-form"
          className="w-full max-w-lg bg-gray-200 dark:bg-slate-800 dark:text-gray-100 shadow-md rounded"
          onSubmit={handleSubmit(onSubmit)} // Usamos onSubmit (el que llama a la mutación)
        >
          {/* --- CAMPO 1: SELECT (Tipos Events) --- */}
          <div className="md:w-11/12 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="id"
            >
              Tipos Events
            </label>
            <Controller
              name="tipo_event_id"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                const eventValuesArray = Object.values(
                  typeEvents1
                ) as readonly OptionType[];

                const currentSelection =
                  eventValuesArray.find((c) => c.value === value) || null;

                return (
                  <Select
                    className="search-line"
                    ref={ref}
                    options={eventValuesArray}
                    value={currentSelection}
                    name={name}
                    styles={customStyles}
                    placeholder="Select a type of event"
                    isSearchable={true}
                    onChange={(val) => {
                      onChange(val?.value);
                      handleOnChange("tipo_event_id", val?.value);

                      setEventId(val?.value);
                    }}
                  />
                );
              }}
            />
          </div>

          {/* --- CAMPO 2: SELECT (Events de tipoeventos) --- */}
          <div className="md:w-11/12 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="events_id"
            >
              Events
            </label>
            <Controller
              name="events_id"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                const eventValuesArray1 = Object.values(
                  eventsId
                ) as readonly OptionType[];

                const currentSelection1 =
                  eventValuesArray1.find((c) => c.value === value) || null;

                return (
                  <Select
                    className="search-line"
                    ref={ref}
                    options={eventsId}
                    value={currentSelection1}
                    name={name}
                    styles={customStyles}
                    placeholder="Select a event"
                    isSearchable={true}
                    onChange={(val) => {
                      onChange(val?.value);
                      setEventId(val?.value);
                    }}
                  />
                );
              }}
            />
          </div>

          {/* --- CAMPO 2: EDITOR ENRIQUECIDO (Description) --- */}
          <div className="mt-6">
            <label htmlFor="description" className={labelBaseClasses}>
              Descripción del Evento (Editor Enriquecido)
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Editor
                  editorState={editorState}
                  wrapperClassName="wrapper-class"
                  editorClassName={`editor-class ${editorBackgroundClasses}`}
                  toolbarClassName={`toolbar-class ${toolbarStyling}`}
                  onBlur={() => field.onBlur()}
                  onEditorStateChange={(newEditorState) => {
                    setEditorState(newEditorState);
                    field.onChange(
                      stateToHTML(newEditorState.getCurrentContent())
                    );
                  }}
                  placeholder="Escribe la descripción aquí..."
                />
              )}
            />
          </div>

          {/* --- CONTENEDOR DE BOTONES (Guardar y Cancelar) --- */}
          <div className="flex justify-between gap-4 mt-8">
            {/* Botón CANCELAR (Sección Izquierda) - ¡Más Oscuro! */}
            <button
              type="button"
              onClick={handleCancel}
              className={`flex-1 py-3 font-bold rounded-lg transition duration-200 ease-in-out 
                                        text-indigo-600 dark:text-indigo-400 
                                        bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500
                                        shadow-md hover:shadow-lg`}
            >
              Cancelar
            </button>

            {/* Botón GUARDAR CAMBIOS (Sección Derecha) */}
            <button
              type="submit"
              className={`flex-1 py-3 font-bold rounded-lg transition duration-200 ease-in-out 
                                        text-white 
                                        bg-indigo-600 hover:bg-indigo-700 
                                        shadow-md hover:shadow-lg
                                        ${
                                          isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : ""
                                        }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
