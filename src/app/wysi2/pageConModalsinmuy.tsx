"use client";
import React, { useState, useCallback } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// NOTA IMPORTANTE: Se han eliminado las importaciones de react-draft-wysiwyg, draft-js y
// draft-js-export-html ya que no pudieron ser resueltas en el entorno de compilación.
// Se ha sustituido el componente Editor por un <textarea> nativo.

// 1. Tipos y Datos (Internos para el single file)
interface FormData {
  nombreUsuario: string;
  rol: "" | "administrador" | "editor" | "lector";
  description: string; // Campo para el texto de la descripción
}

interface RolOption {
  value: FormData["rol"];
  label: string;
}

const rolOptions: RolOption[] = [
  { value: "administrador", label: "Administrador" },
  { value: "editor", label: "Editor de Contenido" },
  { value: "lector", label: "Lector/Invitado" },
];

const initialData: FormData = {
  nombreUsuario: "JuanPerez",
  rol: "editor",
  description:
    "Este es el texto inicial del perfil. Lamentablemente, el editor de texto enriquecido no es compatible con este entorno, por lo que usamos un simple campo de texto.",
};
// Fin de Tipos y Datos

// 2. Clases base reutilizables
const inputBaseClasses = `
  w-full p-3 border rounded-lg transition duration-200 
  bg-white text-gray-900 
  dark:bg-slate-800 dark:text-white dark:border-slate-700
  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
`;
const labelBaseClasses = `
  block text-lg font-medium mb-1.5 
  text-gray-700 dark:text-gray-200
`;
const errorTextClasses = `
  text-sm font-medium mt-1 
  text-red-500 dark:text-red-400
`;

// 3. Componente Modal (EditForm)
const EditFormModal = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = useCallback(
    (data) => {
      console.log("Datos a guardar:", data);
      // Usamos el mensaje box en lugar de alert
      console.log(`Guardando datos: ${JSON.stringify(data, null, 2)}`);
      // Puedes reemplazar el console.log con una implementación de modal custom si es necesario.

      // Opcional: Cerrar modal al guardar
      onClose();
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    // Backdrop Oscuro (Capa que cubre toda la pantalla)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
      {/* Tarjeta del formulario (Modal) */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Editar Perfil de Usuario
          </h2>
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Campo Nombre de Usuario y Rol en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label htmlFor="nombreUsuario" className={labelBaseClasses}>
                Nombre de Usuario
              </label>
              <Controller
                name="nombreUsuario"
                control={control}
                rules={{ required: "El nombre de usuario es obligatorio" }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      id="nombreUsuario"
                      type="text"
                      placeholder="Ingresa el nombre de usuario"
                      className={`${inputBaseClasses} ${
                        errors.nombreUsuario
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.nombreUsuario && (
                      <p className={errorTextClasses}>
                        {errors.nombreUsuario.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            {/* Campo Rol */}
            <div className="col-span-1">
              <label htmlFor="rol" className={labelBaseClasses}>
                Rol del Usuario
              </label>
              <Controller
                name="rol"
                control={control}
                rules={{ required: "Debes seleccionar un rol" }}
                render={({ field }) => (
                  <div className="relative">
                    <select
                      {...field}
                      id="rol"
                      className={`${inputBaseClasses} appearance-none pr-10 ${
                        errors.rol
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="" disabled>
                        Selecciona un rol...
                      </option>
                      {rolOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    {errors.rol && (
                      <p className={errorTextClasses}>{errors.rol.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          {/* --- CAMPO 3: TEXTAREA (Reemplazo del Editor Enriquecido) --- */}
          <div className="mt-6">
            <label htmlFor="description" className={labelBaseClasses}>
              Descripción del Perfil (Texto Simple)
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "La descripción es obligatoria" }}
              render={({ field }) => (
                <>
                  <textarea
                    {...field}
                    id="description"
                    rows={8}
                    placeholder="Escribe aquí la descripción detallada del perfil..."
                    className={`${inputBaseClasses} resize-none ${
                      errors.description
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.description && (
                    <p className={errorTextClasses}>
                      {errors.description.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* --- BOTÓN DE ENVÍO --- */}
          <button
            type="submit"
            className={`w-full py-3 mt-8 font-bold rounded-lg transition duration-200 ease-in-out 
                         text-white 
                         bg-indigo-600 hover:bg-indigo-700 
                         shadow-md hover:shadow-lg
                         ${
                           isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                         }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Guardando Cambios..." : "Guardar Cambios"}
          </button>
        </form>
      </div>
    </div>
  );
};

// 4. Componente Principal que maneja la Modal
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Configuración de Usuario
        </h1>
        {/* Botón para Abrir la Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 font-bold rounded-lg transition duration-200 ease-in-out 
                     text-white 
                     bg-green-600 hover:bg-green-700 
                     shadow-md hover:shadow-lg"
        >
          Abrir Editor de Perfil
        </button>
      </div>

      <EditFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 5. Se eliminó el bloque <style> ya que no hay dependencias de librerías externas */}
    </div>
  );
}
