// EditForm.tsx
"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

// Asume que este archivo contiene: FormData, initialData, y rolOptions
import { FormData, initialData, rolOptions } from "./FormData";

const EditForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: initialData,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Datos a guardar:", data);
    alert(`Guardando datos: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    // Contenedor principal (fondo de pantalla con modo oscuro Tailwind)
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Tarjeta del formulario (fondo blanco/gris oscuro con modo oscuro Tailwind) */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        {/* Título */}
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
          Editar Perfil de Usuario
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* --- CAMPO 1: TEXTFIELD (Nombre de Usuario) --- */}
          <div className="mt-4">
            <Controller
              name="nombreUsuario"
              control={control}
              rules={{
                required: "El nombre de usuario es obligatorio",
                minLength: { value: 4, message: "Mínimo 4 caracteres" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre de Usuario"
                  variant="outlined"
                  fullWidth
                  // ... otras props

                  // --- Estilos de Input (Valor escrito, bordes, helper text) ---
                  sx={{
                    // 🔑 SOLUCIÓN CRÍTICA: FORZAR EL FONDO DEL INPUT EN MODO OSCURO
                    "& .MuiInputBase-root": {
                      // Aplica un fondo oscuro al área donde se escribe el texto
                      ".dark &": {
                        backgroundColor: "#1e293b", // Fondo oscuro (ej: slate-800)
                      },
                    },

                    // 1. Texto escrito y valor inicial (Asegurado en blanco)
                    "& .MuiInputBase-input": {
                      color: "text.primary",
                      ".dark &": {
                        color: "#FFFFFF",
                      },
                      // Fix de autocompletado (solo efectivo si el fondo del input es oscuro)
                      "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0px 1000px #1e293b inset",
                        WebkitTextFillColor: "#FFFFFF",
                        borderRadius: "inherit",
                      },
                    },

                    // ... el resto de estilos de borde, helperText, etc., se mantienen
                    "& .MuiOutlinedInput-notchedOutline": {
                      /* ... */
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      /* ... */
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      /* ... */
                    },
                    "& .MuiFormHelperText-root": {
                      /* ... */
                    },
                  }}
                />
              )}
            />
          </div>

          {/* --- CAMPO 2: SELECT (Rol) --- */}
          <div className="mt-6">
            <FormControl fullWidth error={!!errors.rol}>
              <InputLabel
                id="rol-label"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  color: "text.secondary",
                  ".dark &": { color: "rgba(255, 255, 255, 0.95)" },
                  "&.Mui-focused, &.Mui-shrink": {
                    color: "primary.main",
                    ".dark &": { color: "primary.light" },
                  },
                }}
              >
                Rol del Usuario
              </InputLabel>
              <Controller
                name="rol"
                control={control}
                rules={{ required: "Debes seleccionar un rol" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="rol-label"
                    label="Rol del Usuario"
                    MenuProps={{
                      sx: {
                        "& .MuiPaper-root": {
                          backgroundColor: "white",
                          ".dark &": {
                            backgroundColor: "#1f2937",
                            color: "rgba(255, 255, 255, 0.9)",
                          },
                          zIndex: 1500,
                        },
                      },
                    }}
                    sx={{
                      "& .MuiSelect-select": {
                        color: "text.primary",
                        ".dark &": { color: "rgba(255, 255, 255, 0.9)" },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        ".dark &": { borderColor: "rgba(255, 255, 255, 0.3)" },
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        ".dark &": { borderColor: "primary.light" },
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                        ".dark &": { borderColor: "primary.light" },
                      },
                      // 🟢 ÍCONO DEL SELECT VISIBLE
                      "& .MuiSvgIcon-root": {
                        color: "text.secondary",
                        ".dark &": { color: "rgba(255, 255, 255, 0.95)" },
                      },
                    }}
                  >
                    {rolOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        sx={{
                          color: "text.primary",
                          ".dark &": {
                            color: "rgba(255, 255, 255, 0.9)",
                            backgroundColor: "transparent",
                          },
                          "&:hover": {
                            backgroundColor: "action.hover",
                            ".dark &": {
                              backgroundColor: "rgba(255, 255, 255, 0.15)",
                            },
                          },
                          "&.Mui-selected": {
                            backgroundColor: "action.selected",
                            ".dark &": {
                              backgroundColor: "rgba(255, 255, 255, 0.25)",
                            },
                          },
                          "&.Mui-selected:hover": {
                            backgroundColor: "action.selected",
                            ".dark &": {
                              backgroundColor: "rgba(255, 255, 255, 0.25)",
                            },
                          },
                        }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.rol && (
                <Typography
                  color="error"
                  variant="caption"
                  className="mt-1"
                  sx={{ ".dark &": { color: "error.light" } }}
                >
                  {errors.rol.message}
                </Typography>
              )}
            </FormControl>
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

export default EditForm;
