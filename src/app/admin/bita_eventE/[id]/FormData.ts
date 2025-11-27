// FormData.ts
export interface FormData {
  nombreUsuario: string;
  rol: "" | "administrador" | "editor" | "lector"; // Añadimos '' para la opción por defecto
}

export interface RolOption {
  value: FormData["rol"];
  label: string;
}

export const rolOptions: RolOption[] = [
  { value: "administrador", label: "Administrador" },
  { value: "editor", label: "Editor de Contenido" },
  { value: "lector", label: "Lector/Invitado" },
];

export const initialData: FormData = {
  nombreUsuario: "JuanPerez",
  // Es mejor dejar el valor inicial del select vacío para forzar la selección.
  rol: "editor",
};
