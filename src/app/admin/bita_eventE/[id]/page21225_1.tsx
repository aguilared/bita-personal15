"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { convertFromHTML, EditorState, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
import { useEventsId } from "@/hooks/useEventsId"; // Este hook recibe el ID del padre
import Select, { StylesConfig } from "react-select";

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

type OptionType = { label: string; value: number; isDisabled?: boolean };

// Clases base reutilizables (Se mantienen)
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
            <EditForm />   {" "}
    </QueryClientProvider>
  );
}

const EditForm: React.FC = () => {
  const params = useSearchParams();
  const router = useRouter();
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
  }); // 🟢 CORRECCIÓN CLAVE 1: Estado para el filtro del select anidado // Inicializado en 0 (o cualquier valor que no devuelva opciones al inicio)3

  const [selectedTipoEventId, setSelectedTipoEventId] = useState<
    number | string
  >(0);
  const [intervalMs, setIntervalMs] = useState(10000);

  const { typeEvents1 } = useTypeEvents1(); // El hook eventsId ahora depende de selectedTipoEventId
  const { eventsId }: { eventsId: Array<{ value: number; label: string }> } =
    useEventsId(selectedTipoEventId); // SOLUCIÓN PARA EVITAR 'setState on unmounted component'

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
  }); // Función de manejo de cancelación

  const handleCancel = () => {
    const bitacoraId = data?.bitacora_id;
    if (bitacoraId) {
      router.push(`/admin/bita_events/4?id=${encodeURIComponent(bitacoraId)}`);
    } else {
      router.push("/admin/dashboard");
    }
  }; // MUTATION para guardar los datos (Se mantiene)

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

      router.push(
        `/admin/bita_events/4?id=${encodeURIComponent(variables.bitacora_id)}`
      );
    },
    onError: (error) => {
      console.error("Error al actualizar el registro:", error);
      alert("Error al guardar. Consulta la consola.");
    },
  }); // Función de manejo de guardado (Conexión a useMutation - Se mantiene)

  const onSubmit: SubmitHandler<EditFormValues> = (formData) => {
    const parsedata: MutationData = {
      id: Number(eventIdParam),
      bitacora_id: Number(data?.bitacora_id),
      tipo_event_id: Number(formData.tipo_event_id),
      events_id: Number(formData.events_id),
      description: formData.description,
      event_date: new Date(formData.event_date),
      image: formData.image,
    };

    createPostMutationE.mutate(parsedata);
  }; // useEffect principal para la carga de datos y seteo de valores

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
      }; // 1. Setear valores de RHF

      setValue("id", Number(eventIdParam));
      setValue("bitacora_id", Number(eventData.bitacora_id)); // A. Setear el ID del Tipo de Evento (PADRE) en RHF
      setValue("tipo_event_id", eventData.tipo_event_id, {
        shouldValidate: true,
        shouldDirty: true,
      }); // 🟢 CORRECCIÓN CLAVE 2: Actualizar el estado que alimenta el hook useEventsId // Esto dispara la carga de las opciones correctas para el Select anidado

      setSelectedTipoEventId(eventData.tipo_event_id); // B. Setear el ID del Evento (HIJO) en RHF. // Esto es temporal hasta que el siguiente useEffect lo revalide.

      setValue("events_id", eventData.events_id);
      setValue("event_date", eventData.event_date);
      setValue("image", eventData.image); // C. Setear la Descripción (Editor Enriquecido - Se mantiene)

      const htmlDescription = eventData.description || "";
      const contentBlocks = convertFromHTML(htmlDescription);
      const contentState = ContentState.createFromBlockArray(
        contentBlocks.contentBlocks,
        contentBlocks.entityMap
      );

      setEditorState(EditorState.createWithContent(contentState));

      setValue("description", htmlDescription, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [data, status, setValue, eventIdParam]); // 🟢 CORRECCIÓN CLAVE 3: Retención del valor del Select anidado (Hijo) // Este useEffect espera a que la lista de opciones (eventsId) se cargue completamente // y luego re-establece el valor inicial del evento para que se muestre en el Select.

  useEffect(() => {
    // Asegura que tenemos la lista cargada (eventsId) y el valor inicial (data?.events_id)
    if (eventsId.length > 0 && data?.events_id) {
      const initialEventId = data.events_id; // Verifica que el valor a retener exista en las opciones recién cargadas
      const optionExists = eventsId.some((e) => e.value === initialEventId);

      if (optionExists) {
        // Re-establece el valor en RHF, lo que obliga al componente Select a mostrarlo.
        setValue("events_id", initialEventId, {
          shouldValidate: false,
          shouldDirty: true,
        });
      }
    }
  }, [eventsId, data?.events_id, setValue]);

  // ... (código anterior)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            {/* ... (loader) ... */}     {" "}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-xl">
               {" "}
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
                    Editar Evento ({data?.id})        {" "}
        </h2>
               {" "}
        <form
          name="edit-form" // 🛑 CLASE MODIFICADA: Eliminamos bg-gray-200 y reducimos las sombras
          className="w-full max-w-lg dark:text-gray-100 rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
                    {/* --- CAMPO 1: SELECT (Tipos Events) --- */}         {" "}
          {/* 🟢 CLASE MODIFICADA: Usamos w-full, sin px, y mb-4 para un espaciado consistente */}
                   {" "}
          <div className="w-full mb-4">
                       {" "}
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="id"
            >
                            Tipos Events            {" "}
            </label>
                       {" "}
            <Controller
              name="tipo_event_id"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                // ... (lógica del Select) ...
                // Se mantiene el código del Controller
              }}
            />
                     {" "}
          </div>
                    {/* --- CAMPO 2: SELECT (Events de tipoeventos) --- */}     
             {" "}
          {/* 🟢 CLASE MODIFICADA: Usamos w-full, sin px, y mb-4 para un espaciado consistente */}
                   {" "}
          <div className="w-full mb-4">
                       {" "}
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="events_id"
            >
                            Events            {" "}
            </label>
                       {" "}
            <Controller
              name="events_id"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                // ... (lógica del Select) ...
                // Se mantiene el código del Controller
              }}
            />
                     {" "}
          </div>
                    {/* --- CAMPO 2: EDITOR ENRIQUECIDO (Description) --- */}   
               {" "}
          {/* 🟢 CLASE MODIFICADA: Usamos mt-4 para un margen superior consistente */}
                   {" "}
          <div className="mt-4">
                       {" "}
            <label htmlFor="description" className={labelBaseClasses}>
                            Descripción del Evento (Editor Enriquecido)        
                 {" "}
            </label>
                        {/* ... (código del Editor Enriquecido) ... */}         {" "}
          </div>
                    {/* --- CONTENEDOR DE BOTONES (Guardar y Cancelar) --- */} 
                 {" "}
          <div className="flex justify-between gap-4 mt-8">
                        {/* ... (botones) ... */}         {" "}
          </div>
                 {" "}
        </form>
             {" "}
      </div>
         {" "}
    </div>
  );
};
